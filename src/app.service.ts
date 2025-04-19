import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {}

  getHello(): string {
    return 'Hello, I am the Online Store API!';
  }

  getDataSource(): DataSource {
    return this.dataSource;
  }

  async testDatabaseConnection(): Promise<string> {
    try {
      await this.dataSource.query('SELECT 1');
      return 'Database connection is successful!';
    } catch (error) {
      return `Database connection failed: ${error.message}`;
    }
  }
}
