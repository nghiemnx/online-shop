import { DataSource } from 'typeorm';
import { Product } from './product.entity';

export async function seedProducts(dataSource: DataSource) {
  const productRepository = dataSource.getRepository(Product);

  const products = [
    {
      name: 'Smartphone A',
      price: 699.99,
      discount: 50.0,
      stock: 100,
      category: { id: 1 }, // Assuming category ID 1 exists
      supplier: { id: 1 }, // Assuming supplier ID 1 exists
      description: 'A high-end smartphone with excellent features.',
    },
    {
      name: 'Laptop B',
      price: 1299.99,
      discount: 100.0,
      stock: 50,
      category: { id: 1 }, // Assuming category ID 1 exists
      supplier: { id: 2 }, // Assuming supplier ID 2 exists
      description: 'A powerful laptop for professionals.',
    },
    {
      name: 'Running Shoes',
      price: 89.99,
      discount: 10.0,
      stock: 200,
      category: { id: 5 }, // Assuming category ID 5 exists
      supplier: { id: 3 }, // Assuming supplier ID 3 exists
      description: 'Comfortable and durable running shoes.',
    },
    {
      name: 'Blender X',
      price: 49.99,
      discount: 5.0,
      stock: 150,
      category: { id: 3 }, // Assuming category ID 3 exists
      supplier: { id: 4 }, // Assuming supplier ID 4 exists
      description: 'A versatile blender for your kitchen.',
    },
    {
      name: 'Fiction Book Y',
      price: 19.99,
      discount: 2.0,
      stock: 300,
      category: { id: 4 }, // Assuming category ID 4 exists
      supplier: { id: 5 }, // Assuming supplier ID 5 exists
      description: 'An engaging fiction book.',
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

  console.log('Product seed data has been added.');
}
