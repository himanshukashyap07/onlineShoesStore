import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const editablePages = [
    { slug: 'our-story', title: 'Our Story' },
    { slug: 'faq', title: 'Frequently Asked Questions' },
    { slug: 'careers', title: 'Careers' },
    { slug: 'terms', title: 'Terms of Service' },
    { slug: 'privacy', title: 'Privacy Policy' },
    { slug: 'press', title: 'Press' },
    { slug: 'shipping-returns', title: 'Shipping & Returns' },
];

export default function AdminContentPage() {
  return (
    <div>
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>Editable Pages</CardTitle>
          <CardDescription>Select a page to edit its content.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page Title</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {editablePages.map((page) => (
                <TableRow key={page.slug}>
                  <TableCell className="font-medium">{page.title}</TableCell>
                  <TableCell className="text-right">
                    <Link href={`/admin/content/${page.slug}`}>
                      <Button variant="outline">Edit</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
