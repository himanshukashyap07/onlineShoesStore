import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Terms of Service</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              Please read these terms carefully before using our services.
            </p>
          </div>
          <div className="space-y-6 text-foreground/80">
             <h2 className="text-2xl font-bold text-primary">1. Introduction</h2>
            <p>
              Welcome to SoleSculpt. These Terms of Service govern your use of our website and the services we provide. By accessing or using our website, you agree to be bound by these terms.
            </p>
             <h2 className="text-2xl font-bold text-primary">2. Use of Our Service</h2>
            <p>
              You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service in any way that violates any applicable federal, state, local, or international law or regulation.
            </p>
             <h2 className="text-2xl font-bold text-primary">3. Intellectual Property</h2>
            <p>
             The Service and its original content, features, and functionality are and will remain the exclusive property of SoleSculpt and its licensors.
            </p>
            <h2 className="text-2xl font-bold text-primary">4. Limitation of Liability</h2>
            <p>
            In no event shall SoleSculpt, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
             <h2 className="text-2xl font-bold text-primary">5. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
