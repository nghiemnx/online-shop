import { DataSource } from 'typeorm';
import { Product } from './product.entity';

export async function seedProducts(dataSource: DataSource) {
  const productRepository = dataSource.getRepository(Product);

  const products = [
    {
      name: 'Casual T-Shirt',
      price: 19.99,
      discount: 5.0,
      stock: 150,
      category: { id: 8 },
      supplier: { id: 3 },
      description: 'A comfortable and stylish casual t-shirt.',
    },
    {
      name: 'Smartphone Z',
      price: 799.99,
      discount: 75.0,
      stock: 120,
      category: { id: 8 },
      supplier: { id: 1 },
      description: 'A premium smartphone with cutting-edge technology.',
    },
    {
      name: 'Gaming Laptop Pro',
      price: 1499.99,
      discount: 150.0,
      stock: 40,
      category: { id: 8 },
      supplier: { id: 2 },
      description: 'A high-performance laptop for gaming enthusiasts.',
    },
    {
      name: 'Formal Shirt',
      price: 39.99,
      discount: 10.0,
      stock: 200,
      category: { id: 8 },
      supplier: { id: 3 },
      description: 'A sleek and professional formal shirt.',
    },
    {
      name: 'Winter Jacket',
      price: 99.99,
      discount: 15.0,
      stock: 100,
      category: { id: 8 },
      supplier: { id: 4 },
      description: 'A warm and durable winter jacket.',
    },
    {
      name: 'Running Shoes',
      price: 59.99,
      discount: 10.0,
      stock: 300,
      category: { id: 8 },
      supplier: { id: 2 },
      description: 'Lightweight and comfortable running shoes.',
    },
    {
      name: 'Bluetooth Headphones',
      price: 129.99,
      discount: 20.0,
      stock: 80,
      category: { id: 8 },
      supplier: { id: 1 },
      description: 'Wireless headphones with excellent sound quality.',
    },
    {
      name: 'Office Chair',
      price: 199.99,
      discount: 25.0,
      stock: 50,
      category: { id: 8 },
      supplier: { id: 5 },
      description: 'Ergonomic office chair for maximum comfort.',
    },
    {
      name: 'Coffee Maker',
      price: 49.99,
      discount: 5.0,
      stock: 70,
      category: { id: 8 },
      supplier: { id: 5 },
      description: 'Brew delicious coffee with ease.',
    },
    {
      name: 'Electric Kettle',
      price: 29.99,
      discount: 3.0,
      stock: 90,
      category: { id: 8 },
      supplier: { id: 5 },
      description: 'Fast and efficient electric kettle.',
    },
    {
      name: 'Yoga Mat',
      price: 19.99,
      discount: 2.0,
      stock: 200,
      category: { id: 8 },
      supplier: { id: 5 },
      description: 'Non-slip yoga mat for your workouts.',
    },
    {
      name: 'Smartwatch X',
      price: 199.99,
      discount: 30.0,
      stock: 60,
      category: { id: 8 },
      supplier: { id: 1 },
      description: 'Track your fitness and stay connected.',
    },
    {
      name: 'Desk Lamp',
      price: 24.99,
      discount: 5.0,
      stock: 120,
      category: { id: 8 },
      supplier: { id: 5 },
      description: 'Adjustable desk lamp with LED light.',
    },
    {
      name: 'Backpack',
      price: 49.99,
      discount: 8.0,
      stock: 150,
      category: { id: 8 },
      supplier: { id: 3 },
      description: 'Durable and spacious backpack.',
    },
    {
      name: 'Wireless Mouse',
      price: 19.99,
      discount: 2.0,
      stock: 200,
      category: { id: 8 },
      supplier: { id: 1 },
      description: 'Smooth and responsive wireless mouse.',
    },
    {
      name: 'Water Bottle',
      price: 14.99,
      discount: 1.0,
      stock: 300,
      category: { id: 8 },
      supplier: { id: 5 },
      description: 'Reusable water bottle for hydration.',
    },
    {
      name: 'Tablet Pro',
      price: 599.99,
      discount: 50.0,
      stock: 70,
      category: { id: 8 },
      supplier: { id: 1 },
      description: 'High-performance tablet for work and play.',
    },
    {
      name: 'Leather Wallet',
      price: 39.99,
      discount: 5.0,
      stock: 100,
      category: { id: 8 },
      supplier: { id: 3 },
      description: 'Stylish and durable leather wallet.',
    },
    {
      name: 'Portable Speaker',
      price: 89.99,
      discount: 10.0,
      stock: 80,
      category: { id: 8 },
      supplier: { id: 1 },
      description: 'Compact speaker with powerful sound.',
    },
    {
      name: 'Sunglasses',
      price: 29.99,
      discount: 3.0,
      stock: 150,
      category: { id: 8 },
      supplier: { id: 3 },
      description: 'Stylish sunglasses with UV protection.',
    },
  ];

  for (const product of products) {
    const existingProduct = await productRepository.findOneBy({
      name: product.name,
    });

    if (!existingProduct) {
      await productRepository.save(product);
    }
  }
  return products.length;
}
