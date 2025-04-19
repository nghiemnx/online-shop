import { DataSource } from 'typeorm';
import { Employee } from './employee.entity';

export async function seedEmployees(dataSource: DataSource) {
  const employeeRepository = dataSource.getRepository(Employee);

  const employees = [
    {
      firstName: 'Ngọc',
      lastName: 'Anh',
      phoneNumber: '1234567890',
      address: '123 Main St, Hanoi',
      email: 'ngoc.anh@example.com',
      hireDate: new Date('2020-01-01'),
    },
    {
      firstName: 'Minh',
      lastName: 'Huy',
      phoneNumber: '0987654321',
      address: '456 Elm St, Ho Chi Minh City',
      email: 'minh.huy@example.com',
      hireDate: new Date('2019-05-15'),
    },
    {
      firstName: 'Lan',
      lastName: 'Phương',
      phoneNumber: '1112223333',
      address: '789 Oak St, Da Nang',
      email: 'lan.phuong@example.com',
      hireDate: new Date('2021-03-10'),
    },
    {
      firstName: 'Hà',
      lastName: 'My',
      phoneNumber: '4445556666',
      address: '321 Maple St, Hue',
      email: 'ha.my@example.com',
      hireDate: new Date('2018-07-20'),
    },
    {
      firstName: 'Quang',
      lastName: 'Dũng',
      phoneNumber: '7778889999',
      address: '654 Pine St, Can Tho',
      email: 'quang.dung@example.com',
      hireDate: new Date('2022-11-05'),
    },
    {
      firstName: 'Thảo',
      lastName: 'Vy',
      phoneNumber: '2223334444',
      address: '987 Birch St, Nha Trang',
      email: 'thao.vy@example.com',
      hireDate: new Date('2017-02-14'),
    },
    {
      firstName: 'Hoàng',
      lastName: 'Nam',
      phoneNumber: '5556667777',
      address: '159 Cedar St, Hai Phong',
      email: 'hoang.nam@example.com',
      hireDate: new Date('2020-09-30'),
    },
    {
      firstName: 'Bảo',
      lastName: 'Ngọc',
      phoneNumber: '8889990000',
      address: '753 Walnut St, Vung Tau',
      email: 'bao.ngoc@example.com',
      hireDate: new Date('2016-12-25'),
    },
    {
      firstName: 'Trung',
      lastName: 'Kiên',
      phoneNumber: '3334445555',
      address: '951 Spruce St, Quy Nhon',
      email: 'trung.kien@example.com',
      hireDate: new Date('2021-06-18'),
    },
    {
      firstName: 'Mai',
      lastName: 'Hương',
      phoneNumber: '6667778888',
      address: '852 Cherry St, Da Lat',
      email: 'mai.huong@example.com',
      hireDate: new Date('2019-10-10'),
    },
  ];

  for (const employee of employees) {
    const existingEmployee = await employeeRepository.findOneBy({
      email: employee.email,
    });

    if (!existingEmployee) {
      await employeeRepository.save(employee);
    }
  }
  return employees.length;
}
