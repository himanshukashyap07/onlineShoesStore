import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              We'd love to hear from you. Get in touch with us for any questions or feedback.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary font-headline">Get in Touch</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-accent"/>
                        <p className="text-lg text-foreground/80">123 Shoe Lane, Footwear City, 54321</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-accent"/>
                        <p className="text-lg text-foreground/80">(123) 456-7890</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-accent"/>
                        <p className="text-lg text-foreground/80">hello@solesculpt.com</p>
                    </div>
                </div>
            </div>
            <div>
              <form className="space-y-4 rounded-lg border bg-card p-8">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
