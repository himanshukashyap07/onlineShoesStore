'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, Upload } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export default function EditProductPage({ params }: { params: { id: string } }) {
  const product = PlaceHolderImages.find(p => p.id === params.id)

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto grid max-w-2xl flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Link href="/admin/products">
            <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
        </Link>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Edit Product
        </h1>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>
              Update the details for the product.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue={product.name}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue="A comfortable and stylish shoe for everyday wear."
                />
              </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="price">Price</Label>
                        <Input id="price" type="number" defaultValue={product.price} />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sale-price">Sale Price (Optional)</Label>
                        <Input id="sale-price" type="number" defaultValue={product.salePrice} />
                    </div>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="brand">Brand</Label>
                        <Select defaultValue={product.brand}>
                            <SelectTrigger id="brand">
                                <SelectValue placeholder="Select brand" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Nike">Nike</SelectItem>
                                <SelectItem value="Adidas">Adidas</SelectItem>
                                <SelectItem value="Puma">Puma</SelectItem>
                                <SelectItem value="Reebok">Reebok</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="style">Style</Label>
                        <Select defaultValue={product.style}>
                            <SelectTrigger id="style">
                                <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sneaker">Sneaker</SelectItem>
                                <SelectItem value="boot">Boot</SelectItem>
                                <SelectItem value="formal">Formal</SelectItem>
                                <SelectItem value="sandal">Sandal</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Product Image</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <Image 
                        src={product.imageUrl} 
                        alt={product.name}
                        width={200}
                        height={200}
                        className="rounded-md object-cover"
                    />
                    <ImageUpload />
                </div>
            </CardContent>
        </Card>
        <div className="flex items-center justify-end gap-2">
            <Button variant="outline">Discard</Button>
            <Button>Update Product</Button>
        </div>
      </div>
    </div>
  )
}


function ImageUpload() {
    return (
        <div className="flex w-full items-center justify-center">
            <label htmlFor="dropzone-file" className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <Upload className="mb-2 h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Replace current image</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>
    )
}
