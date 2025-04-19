import { DataSource } from 'typeorm';
import { Supplier } from './supplier.entity';

export async function seedSuppliers(dataSource: DataSource) {
  const supplierRepository = dataSource.getRepository(Supplier);

  const suppliers = [
    {
      name: 'Supplier One',
      email: 'supplier.one@example.com',
      phoneNumber: '1234567890',
      address: '123 Supplier St, Springfield',
    },
    {
      name: 'Supplier Two',
      email: 'supplier.two@example.com',
      phoneNumber: '0987654321',
      address: '456 Supplier Ave, Springfield',
    },
    {
      name: 'Supplier Three',
      email: 'supplier.three@example.com',
      phoneNumber: '1122334455',
      address: '789 Supplier Blvd, Springfield',
    },
    {
      name: 'Supplier Four',
      email: 'supplier.four@example.com',
      phoneNumber: '2233445566',
      address: '101 Supplier Rd, Springfield',
    },
    {
      name: 'Supplier Five',
      email: 'supplier.five@example.com',
      phoneNumber: '3344556677',
      address: '202 Supplier Ln, Springfield',
    },
  ];

  for (const supplier of suppliers) {
    const existingSupplier = await supplierRepository.findOneBy({
      email: supplier.email,
    });

    if (!existingSupplier) {
      await supplierRepository.save(supplier);
    }
  }
  return suppliers.length;
}
