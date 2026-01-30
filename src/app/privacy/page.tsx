import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Privacy Policy</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              Your privacy is important to us.
            </p>
          </div>
          <div className="space-y-6 text-foreground/80">
            <h2 className="text-2xl font-bold text-primary">1. Information We Collect</h2>
            <p>
              We collect information that you provide to us directly, such as when you create an account, place an order, or contact customer service. This may include your name, email address, shipping address, and payment information. We also collect information automatically as you navigate the site, such as your IP address and browsing behavior.
            </p>
            <h2 className="text-2xl font-bold text-primary">2. How We Use Your Information</h2>
            <p>
             We use the information we collect to process your orders, communicate with you, personalize your experience, and improve our services. We may also use your information for marketing purposes, but you can opt-out at any time.
            </p>
            <h2 className="text-2xl font-bold text-primary">3. Information Sharing</h2>
            <p>
              We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
            <h2 className="text-2xl font-bold text-primary">4. Data Security</h2>
            <p>
             We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>
            <h2 className="text-2xl font-bold text-primary">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also have other rights under applicable data protection laws. To exercise these rights, please contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
