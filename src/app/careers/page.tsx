import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Careers</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              Join our team and help us shape the future of footwear.
            </p>
          </div>
          <div className="space-y-8">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-bold text-primary">Footwear Designer</h2>
              <p className="text-muted-foreground mt-2">Remote | Full-time</p>
              <p className="mt-4 text-foreground/80">
                We are looking for a creative and passionate Footwear Designer to join our team. You will be responsible for creating innovative and stylish shoe designs from concept to production.
              </p>
              <Button className="mt-6">Apply Now</Button>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-bold text-primary">Marketing Specialist</h2>
              <p className="text-muted-foreground mt-2">New York, NY | Full-time</p>
              <p className="mt-4 text-foreground/80">
                Drive the growth of SoleSculpt by developing and executing marketing campaigns that resonate with our audience and build brand awareness.
              </p>
              <Button className="mt-6">Apply Now</Button>
            </div>
             <div className="rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-bold text-primary">Customer Support Representative</h2>
              <p className="text-muted-foreground mt-2">Remote | Part-time</p>
              <p className="mt-4 text-foreground/80">
                Be the voice of SoleSculpt and provide exceptional support to our customers. Help them with their orders, answer their questions, and resolve their issues.
              </p>
              <Button className="mt-6">Apply Now</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
