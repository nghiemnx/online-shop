import { DataSource } from 'typeorm';
import { Customer } from './customer.entity';

export async function seedCustomers(dataSource: DataSource) {
  const customerRepository = dataSource.getRepository(Customer);

  const customers = [
    {
      firstName: 'Nguyễn',
      lastName: 'Văn A',
      phoneNumber: '1234567890',
      address: '123 Đường Chính, Hà Nội',
      email: 'nguyen.vana@example.com',
      birthday: new Date('1990-01-01'),
    },
    {
      firstName: 'Trần',
      lastName: 'Thị B',
      phoneNumber: '0987654321',
      address: '456 Đường Phụ, Hà Nội',
      email: 'tran.thib@example.com',
      birthday: new Date('1985-05-15'),
    },
    {
      firstName: 'Lê',
      lastName: 'Văn C',
      phoneNumber: '1122334455',
      address: '789 Đường Lớn, Hà Nội',
      email: 'le.vanc@example.com',
      birthday: new Date('1992-07-20'),
    },
    {
      firstName: 'Phạm',
      lastName: 'Thị D',
      phoneNumber: '2233445566',
      address: '101 Đường Nhỏ, Hà Nội',
      email: 'pham.thid@example.com',
      birthday: new Date('1988-03-12'),
    },
    {
      firstName: 'Hoàng',
      lastName: 'Văn E',
      phoneNumber: '3344556677',
      address: '202 Đường Mới, Hà Nội',
      email: 'hoang.vane@example.com',
      birthday: new Date('1991-11-23'),
    },
    {
      firstName: 'Vũ',
      lastName: 'Thị F',
      phoneNumber: '4455667788',
      address: '303 Đường Cũ, Hà Nội',
      email: 'vu.thif@example.com',
      birthday: new Date('1987-06-30'),
    },
    {
      firstName: 'Đặng',
      lastName: 'Văn G',
      phoneNumber: '5566778899',
      address: '404 Đường Hoa, Hà Nội',
      email: 'dang.vang@example.com',
      birthday: new Date('1993-09-14'),
    },
    {
      firstName: 'Ngô',
      lastName: 'Thị H',
      phoneNumber: '6677889900',
      address: '505 Đường Làng, Hà Nội',
      email: 'ngo.thih@example.com',
      birthday: new Date('1995-02-18'),
    },
    {
      firstName: 'Bùi',
      lastName: 'Văn I',
      phoneNumber: '7788990011',
      address: '606 Đường Núi, Hà Nội',
      email: 'bui.vani@example.com',
      birthday: new Date('1989-08-25'),
    },
    {
      firstName: 'Đỗ',
      lastName: 'Thị J',
      phoneNumber: '8899001122',
      address: '707 Đường Biển, Hà Nội',
      email: 'do.thij@example.com',
      birthday: new Date('1994-12-05'),
    },
    {
      firstName: 'Nguyễn',
      lastName: 'Văn K',
      phoneNumber: '9900112233',
      address: '808 Đường Sông, Hà Nội',
      email: 'nguyen.vank@example.com',
      birthday: new Date('1990-04-10'),
    },
    {
      firstName: 'Trần',
      lastName: 'Thị L',
      phoneNumber: '1011121314',
      address: '909 Đường Hồ, Hà Nội',
      email: 'tran.thil@example.com',
      birthday: new Date('1986-07-19'),
    },
    {
      firstName: 'Lê',
      lastName: 'Văn M',
      phoneNumber: '1112131415',
      address: '1010 Đường Đồi, Hà Nội',
      email: 'le.vanm@example.com',
      birthday: new Date('1991-10-22'),
    },
    {
      firstName: 'Phạm',
      lastName: 'Thị N',
      phoneNumber: '1213141516',
      address: '1111 Đường Rừng, Hà Nội',
      email: 'pham.thin@example.com',
      birthday: new Date('1988-01-08'),
    },
    {
      firstName: 'Hoàng',
      lastName: 'Văn O',
      phoneNumber: '1314151617',
      address: '1212 Đường Cây, Hà Nội',
      email: 'hoang.vano@example.com',
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

  return customers.length;
}
