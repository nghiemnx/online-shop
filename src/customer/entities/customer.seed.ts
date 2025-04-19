import { DataSource } from 'typeorm';
import { Customer } from './customer.entity';

export async function seedCustomers(dataSource: DataSource) {
  const customerRepository = dataSource.getRepository(Customer);

  const customers = [
    {
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '1234567890',
      address: '123 Main St, Springfield',
      email: 'john.doe@example.com',
      birthday: new Date('1990-01-01'),
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      phoneNumber: '0987654321',
      address: '456 Elm St, Springfield',
      email: 'jane.smith@example.com',
      birthday: new Date('1985-05-15'),
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      phoneNumber: '1122334455',
      address: '789 Oak St, Springfield',
      email: 'alice.johnson@example.com',
      birthday: new Date('1992-07-20'),
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      phoneNumber: '2233445566',
      address: '101 Pine St, Springfield',
      email: 'bob.brown@example.com',
      birthday: new Date('1988-03-12'),
    },
    {
      firstName: 'Charlie',
      lastName: 'Davis',
      phoneNumber: '3344556677',
      address: '202 Maple St, Springfield',
      email: 'charlie.davis@example.com',
      birthday: new Date('1991-11-23'),
    },
    {
      firstName: 'Diana',
      lastName: 'Evans',
      phoneNumber: '4455667788',
      address: '303 Birch St, Springfield',
      email: 'diana.evans@example.com',
      birthday: new Date('1987-06-30'),
    },
    {
      firstName: 'Ethan',
      lastName: 'Foster',
      phoneNumber: '5566778899',
      address: '404 Cedar St, Springfield',
      email: 'ethan.foster@example.com',
      birthday: new Date('1993-09-14'),
    },
    {
      firstName: 'Fiona',
      lastName: 'Garcia',
      phoneNumber: '6677889900',
      address: '505 Walnut St, Springfield',
      email: 'fiona.garcia@example.com',
      birthday: new Date('1995-02-18'),
    },
    {
      firstName: 'George',
      lastName: 'Harris',
      phoneNumber: '7788990011',
      address: '606 Chestnut St, Springfield',
      email: 'george.harris@example.com',
      birthday: new Date('1989-08-25'),
    },
    {
      firstName: 'Hannah',
      lastName: 'Irvine',
      phoneNumber: '8899001122',
      address: '707 Willow St, Springfield',
      email: 'hannah.irvine@example.com',
      birthday: new Date('1994-12-05'),
    },
    {
      firstName: 'Ian',
      lastName: 'Jackson',
      phoneNumber: '9900112233',
      address: '808 Poplar St, Springfield',
      email: 'ian.jackson@example.com',
      birthday: new Date('1990-04-10'),
    },
    {
      firstName: 'Julia',
      lastName: 'King',
      phoneNumber: '1011121314',
      address: '909 Ash St, Springfield',
      email: 'julia.king@example.com',
      birthday: new Date('1986-07-19'),
    },
    {
      firstName: 'Kevin',
      lastName: 'Lewis',
      phoneNumber: '1112131415',
      address: '1010 Fir St, Springfield',
      email: 'kevin.lewis@example.com',
      birthday: new Date('1991-10-22'),
    },
    {
      firstName: 'Laura',
      lastName: 'Martinez',
      phoneNumber: '1213141516',
      address: '1111 Spruce St, Springfield',
      email: 'laura.martinez@example.com',
      birthday: new Date('1988-01-08'),
    },
    {
      firstName: 'Michael',
      lastName: 'Nelson',
      phoneNumber: '1314151617',
      address: '1212 Redwood St, Springfield',
      email: 'michael.nelson@example.com',
      birthday: new Date('1992-03-27'),
    },
  ];

  for (const customer of customers) {
    const existingCustomer = await customerRepository.findOneBy({
      email: customer.email,
    });

    if (!existingCustomer) {
      await customerRepository.save(customer);
    }
  }

  console.log('Customer seed data has been added.');
}
