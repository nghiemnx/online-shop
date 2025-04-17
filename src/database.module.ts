import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Ensure the type is explicitly set
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@123',
      database: 'OnlineShop',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Disable in production
    }),
  ],
})
export class DatabaseModule {}
