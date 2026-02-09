import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { OrderRepository } from './repositories/find-order-by-id';
import { RedisModule } from '../cache/redis.module';

@Module({
    imports: [RedisModule],
    providers: [
        PrismaService,
        OrderRepository,
        {
            provide: 'IOrderRepository',
            useClass: OrderRepository,
        },
    ],
    exports: [OrderRepository, 'IOrderRepository'],
})
export class DataBaseModule {}
