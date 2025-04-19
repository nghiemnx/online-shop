import { DataSource } from 'typeorm';
import { Category } from './category.entity';

export async function seedCategories(dataSource: DataSource) {
  const categoryRepository = dataSource.getRepository(Category);

  const categories = [
    { name: 'Electronics', description: 'Devices, gadgets, and accessories' },
    { name: 'Clothing', description: 'Apparel for men, women, and children' },
    { name: 'Home & Kitchen', description: 'Furniture, appliances, and decor' },
    {
      name: 'Books',
      description: 'Fiction, non-fiction, and educational materials',
    },
    {
      name: 'Sports & Outdoors',
      description: 'Equipment and gear for outdoor activities',
    },
    {
      name: 'Beauty & Personal Care',
      description: 'Cosmetics and grooming products',
    },
    { name: 'Toys & Games', description: 'Entertainment for kids and adults' },
    { name: 'Automotive', description: 'Car accessories and tools' },
  ];

  for (const category of categories) {
    const existingCategory = await categoryRepository.findOneBy({
      name: category.name,
    });

    if (!existingCategory) {
      await categoryRepository.save(category);
    }
  }

  return categories.length;
}
