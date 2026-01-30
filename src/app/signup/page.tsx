'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Logo } from "@/components/icons";
import { useToast } from '@/hooks/use-toast';
import axios from 'axios'

export default function SignupPage() {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber,setMobileNumber] = useState(0)
  const router = useRouter();
  const { toast } = useToast();
  const handleSubmit =  async(e: React.FormEvent) => {
    e.preventDefault();
    if (fullname && email && password) {
      try {
        const res = await axios.post("/api/register",{fullname,mobileNumber,email,password})
        console.log(res);
        if (!res) {
          toast({title:"error occure"})
        }
        toast({ title: 'Account Created', description: 'Welcome to SoleSculpt!' });
        router.replace('/login');
      } catch (error) {
        
      }
    } else {
      toast({
        title: 'Signup Failed',
        description: 'Please fill out all fields.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                <Logo className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline text-primary">Create an Account</CardTitle>
            <CardDescription>Join SoleSculpt to start your collection.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="fullname">Name</Label>
                <Input id="name" placeholder="Your Name" required value={fullname} onChange={e => setFullName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input id="mobileNumber" placeholder="Your Mobile Number" type='number' required value={mobileNumber} onChange={e => setMobileNumber(Number(e.target.value))} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline text-primary">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
