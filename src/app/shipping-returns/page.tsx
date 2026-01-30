import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ShippingReturnsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 space-y-12">
          <div className="text-center">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Shipping & Returns</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              Information about our shipping and return policies.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Shipping Policy</h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>We are pleased to offer complimentary standard shipping on all orders within the United States. Orders are typically processed within 1-2 business days and delivered within 3-5 business days.</p>
                <p>Expedited (2-day) shipping is available for a flat rate of $15. International shipping is also available, with rates calculated at checkout based on your location. Please note that international customers are responsible for any customs fees or import taxes.</p>
              </div>
            </div>
            
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Return Policy</h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>Your satisfaction is our priority. If you're not completely happy with your purchase, you can return it for a full refund within 30 days of the delivery date.</p>
                <p>To be eligible for a return, items must be unused, in the same condition that you received them, and in the original packaging. To initiate a return, please visit our online returns portal or contact our customer support team.</p>
                <p>Once your return is received and inspected, we will process your refund to the original method of payment. Please allow 5-7 business days for the refund to appear on your statement.</p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
