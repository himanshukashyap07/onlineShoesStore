'use client'

import Link from 'next/link'
import { ChevronLeft, Upload } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function NewProductPage() {
  return (
    <div className="mx-auto grid max-w-2xl flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Link href="/admin/products">
            <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
        </Link>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Add New Product
        </h1>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>
              Fill in the details for the new product.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  placeholder="e.g. NebulaKnit Runner"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="A short description of the product"
                />
              </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="price">Price</Label>
                        <Input id="price" type="number" placeholder="129.99" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sale-price">Sale Price (Optional)</Label>
                        <Input id="sale-price" type="number" placeholder="109.99" />
                    </div>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="brand">Brand</Label>
                        <Select>
                            <SelectTrigger id="brand">
                                <SelectValue placeholder="Select brand" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Nike">Nike</SelectItem>
                                <SelectItem value="Adidas">Adidas</SelectItem>
                                <SelectItem value="Puma">Puma</SelectItem>
                                <SelectItem value="Reebok">Reebok</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="style">Style</Label>
                        <Select>
                            <SelectTrigger id="style">
                                <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sneaker">Sneaker</SelectItem>
                                <SelectItem value="boot">Boot</SelectItem>
                                <SelectItem value="formal">Formal</SelectItem>
                                <SelectItem value="sandal">Sandal</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Product Image</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <ImageUpload />
                </div>
            </CardContent>
        </Card>
        <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
            Discard
            </Button>
            <Button size="sm">Save Product</Button>
        </div>
        <div className="hidden items-center justify-end gap-2 md:flex">
            <Button variant="outline">Discard</Button>
            <Button>Save Product</Button>
        </div>
      </div>
    </div>
  )
}


function ImageUpload() {
    return (
        <div className="flex w-full items-center justify-center">
            <label htmlFor="dropzone-file" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <Upload className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>
    )
}
