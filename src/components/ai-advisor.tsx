import { Bot, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function AiAdvisor() {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-3">
                    <Bot className="w-8 h-8 text-accent" />
                    <CardTitle className="font-headline text-3xl text-primary">AI Style Advisor</CardTitle>
                </div>
                <CardDescription className="mt-2 text-md">
                  Can't decide? Let our AI find the perfect pair for your style and needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="occasion">What's the occasion?</Label>
                    <Input id="occasion" placeholder="e.g., 'a casual day out', 'a formal event'" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="color-preference">Any color preference?</Label>
                    <Select>
                      <SelectTrigger id="color-preference">
                        <SelectValue placeholder="Select a color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="neutral">Neutral Tones</SelectItem>
                        <SelectItem value="bold">Bold & Vibrant</SelectItem>
                        <SelectItem value="dark">Dark Colors</SelectItem>
                        <SelectItem value="pastels">Pastels</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" size="lg" className="mt-4 w-full group">
                    Get Advice <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:scale-125" />
                  </Button>
                </form>
              </CardContent>
            </div>
            <div className="relative hidden md:block">
                <img
                    src="https://picsum.photos/seed/ai-bg/600/800"
                    alt="AI Style Advisor Background"
                    data-ai-hint="fashion technology"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/30"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
