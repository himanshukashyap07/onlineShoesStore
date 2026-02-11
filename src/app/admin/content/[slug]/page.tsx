'use client';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const prevDetailsArray = [
    { slug: 'our-story', title: 'Our Sry', content: `Founded in 2024, SoleSculpt was born from a passion for innovative design and a desire to redefine the footwear industry. We believe that shoes should be more than just a functional necessity; they should be a seamless extension of your personal style and a testament to quality craftsmanship.\n\nOur journey began with a small team of designers, engineers, and dreamers who shared a common vision: to create shoes that perfectly balance aesthetics, comfort, and sustainability. We spent countless hours researching materials, refining our manufacturing processes, and pushing the boundaries of what's possible in footwear.\n\nToday, SoleSculpt is proud to offer a collection that embodies our core values. Each pair of shoes is a work of art, meticulously crafted to provide unparalleled comfort and timeless style. We are committed to using eco-friendly materials and ethical production methods, ensuring that our footprint on the planet is as light as the feeling of our shoes on your feet.\n\nThank you for being a part of our story. We're excited to see where the path takes us next.` },
    { slug: 'faq', title: 'Frequently Asked Questions', content: `[{"question":"What is your shipping policy?","answer":"We offer free standard shipping on all orders within the United States. Expedited shipping is available for an additional fee. International shipping rates vary by country."},{"question":"What is your return policy?","answer":"We accept returns within 30 days of purchase for a full refund. Items must be in new, unworn condition with original packaging. To initiate a return, please visit our returns portal."},{"question":"How do I know what size to order?","answer":"Our shoes generally run true to size. We recommend ordering your usual shoe size. If you are between sizes, we suggest sizing up. You can also refer to our size chart for more detailed measurements."},{"question":"Are your shoes vegan?","answer":"We offer a selection of vegan-friendly shoes made from high-quality synthetic materials. Look for the 'Vegan' badge on the product page to identify these styles."},{"question":"How do I care for my shoes?","answer":"Care instructions vary by material. For leather shoes, we recommend using a leather cleaner and conditioner. For canvas and synthetic materials, a gentle soap and water solution can be used. Always allow shoes to air dry."}]` },
    { slug: 'careers', title: 'Careers', content: `We're always looking for talented people to join our team.` },
    { slug: 'terms', title: 'Terms of Service', content: `Please read these terms carefully before using our services.` },
    { slug: 'privacy', title: 'Privacy Policy', content: `Your privacy is important to us.` },
    { slug: 'press', title: 'Press', content: `SoleSculpt in the news.` },
    { slug: 'shipping-returns', title: 'Shipping & Returns', content: `Information about our shipping and return policies.` },
]


export default function EditContentPage() {
    const params = useParams()
    const [editablePages, setEditablePages] = useState(prevDetailsArray)
    useEffect(() => {
        async function getContent() {
            try {
                const content = await axios.get("/api/content")
                if (content) {
                    setEditablePages(content.data.data.details)
                }

            } catch (error) {
                //    console.log(error);

            }
        }
        getContent()
    }, [])

    async function handleUpdate({ slug, content }: { slug: String, content: String }) {
        try {

            const updateContent = await axios.put("/api/content", { slug, content })

            setEditablePages(updateContent.data.data.details)
            toast({title:"content updated"})

        } catch (error) {
            // console.log("error occure", error);
        }
    }
    const page = editablePages.find(p => p.slug === params.slug);
    if (!page) {
        notFound();
    }
    const [changeContent, setChangeContent] = useState(page.content);

    useEffect(() => {
        if (page?.content) {
            setChangeContent(page.content);
        }
    }, [page]);


    const isJson = page.slug === 'faq' || page.slug === 'careers';

    return (
        <div className="mx-auto grid max-w-4xl flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
                <Link href="/admin/content">
                    <Button variant="outline" size="icon" className="h-7 w-7">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Back</span>
                    </Button>
                </Link>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    Edit: {page.title}
                </h1>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Page Content</CardTitle>
                    <CardDescription>
                        Use this editor to change the content of the page.
                        {isJson && <div className="mt-2 text-destructive text-xs">Note: This content is expected to be in JSON format. Please be careful when editing.</div>}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                            id="content"
                            onChange={(e) => setChangeContent(e.target.value)}
                            value={changeContent}
                            className="min-h-[400px]"
                        />
                    </div>
                </CardContent>
            </Card>
            <div className="flex items-center justify-end gap-2">
                <Button onClick={() => handleUpdate({ slug: page.slug, content: changeContent })} >Save Changes</Button>
            </div>
        </div>
    );
}
