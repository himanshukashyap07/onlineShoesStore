'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Home,
  Package,
  FileText,
  Users,
  ShoppingCart,
  PanelLeft,
  Settings,
} from 'lucide-react';
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { useAuthStore } from '@/lib/auth-store';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: Home },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/content', label: 'Content', icon: FileText },
  { href: '#', label: 'Orders', icon: ShoppingCart },
  { href: '#', label: 'Customers', icon: Users },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoggedIn } = useAuthStore();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && (!isLoggedIn || user?.role !== 'admin')) {
      router.replace('/login');
    }
  }, [isLoggedIn, user, router, isClient]);

  if (!isClient || !isLoggedIn || user?.role !== 'admin') {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>You do not have permission to view this page. Redirecting to login...</CardDescription>
            </CardHeader>
            <CardContent>
                <p>If you are not redirected, please click the button below.</p>
                <Button onClick={() => router.push('/login')} className="mt-4 w-full">Login</Button>
            </CardContent>
          </Card>
        </div>
    );
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-sidebar-primary" />
            <span className="font-headline text-2xl text-sidebar-primary">SoleSculpt</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  tooltip={{
                    children: item.label,
                  }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={{children: "Settings"}}>
                    <Link href="#">
                        <Settings />
                        <span>Settings</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
            <SidebarTrigger className="md:hidden"/>
            <div className="w-full flex-1">
                {/* Can add search here */}
            </div>
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
