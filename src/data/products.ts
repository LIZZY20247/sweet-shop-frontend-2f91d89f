
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Minimalist Watch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Accessories",
    description: "Elegant minimalist watch with leather strap, perfect for any occasion.",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    isFeatured: true
  },
  {
    id: "3",
    name: "Professional Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    category: "Electronics",
    description: "Professional DSLR camera with advanced features for photography enthusiasts.",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    isFeatured: true
  },
  {
    id: "4",
    name: "Luxury Handbag",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Fashion",
    description: "Elegant leather handbag with spacious interior and premium craftsmanship.",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isNew: true
  },
  {
    id: "5",
    name: "Smart Fitness Tracker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    category: "Electronics",
    description: "Advanced fitness tracker with heart rate monitoring and GPS capabilities.",
    rating: 4.5,
    reviews: 203,
    inStock: true
  },
  {
    id: "6",
    name: "Designer Sunglasses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Accessories",
    description: "Stylish designer sunglasses with UV protection and premium frames.",
    rating: 4.4,
    reviews: 78,
    inStock: true
  }
];

export const categories = ["All", "Electronics", "Fashion", "Accessories"];
