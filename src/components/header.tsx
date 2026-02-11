'use client';

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, User, Shield } from "lucide-react";
import { Logo } from "./icons";
import { SearchDialog } from "./search-dialog";
import { Cart } from "./cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { useAuthStore } from "@/lib/auth-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IUser } from "@/models/User";
import { signOut, useSession } from "next-auth/react";

const navLinks = [
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/sale", label: "Sale" },
];



export function Header() {
  // Use NextAuth session directly instead of local store to avoid stale/empty values
  const router = useRouter();
  const { data: session, status } = useSession();
    console.log(session?.user);


  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <button onClick={()=>signOut()}>logout</button>
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-headline text-2xl text-primary">SoleSculpt</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <SearchDialog />
          <Cart />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {status === 'authenticated' && session?.user ? (
                <>
                  <DropdownMenuLabel>Hi, {session.user.fullName ?? session.user.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {session.user.role === 'admin' && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin"><Shield className="mr-2 h-4 w-4" />Admin Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuLabel>Welcome, {session?.user.fullName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/signup">Sign Up</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex h-full flex-col">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                    prefetch={false}
                  >
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-headline text-2xl text-primary">SoleSculpt</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Separator className="my-6" />
                <div className="grid gap-6 text-lg font-medium">
                  {status === 'authenticated' && session?.user ? (
                    <>
                      {session.user.role === 'admin' && (
                        <Link href="/admin" className="text-muted-foreground transition-colors hover:text-foreground">Admin</Link>
                      )}
                      <Link href="/profile" className="text-muted-foreground transition-colors hover:text-foreground">Profile</Link>
                      <button onClick={handleLogout} className="text-left text-muted-foreground transition-colors hover:text-foreground">Logout</button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="text-muted-foreground transition-colors hover:text-foreground">Login</Link>
                      <Link href="/signup" className="text-muted-foreground transition-colors hover:text-foreground">Sign Up</Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
