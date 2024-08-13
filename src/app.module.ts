import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { CountsModule } from './counts/counts.module';

@Module({
  imports: [UsersModule, DatabaseModule, ProductsModule, CountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
