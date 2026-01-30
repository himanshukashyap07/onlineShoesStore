export interface Shoe {
  id: string;
  name: string;
  style: 'sneaker' | 'boot' | 'formal' | 'sandal';
  price: number;
  salePrice?: number;
  color: string;
  brand: 'Nike' | 'Adidas' | 'Puma' | 'Reebok';
  category: ('men' | 'women')[];
  sizes: number[];
  imageUrl: string;
  imageHint: string;
}

export interface CartItem extends Shoe {
  quantity: number;
  selectedSize: number;
}
