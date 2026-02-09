import { IOrderRepository } from 'src/domain/repositories/order-repository';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from 'src/infra/cache/redis.service';
import { Order } from 'src/domain/entities/order-entity';
import { PrismaOrderMapper } from '../mapper/prisma-order.mapper';
import { Injectable } from '@nestjs/common';
@Injectable()
export class OrderRepository implements IOrderRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly redisService: RedisService,
    ) {}

    async findById(id: string): Promise<Order> {
        const cached = await this.redisService.get<Order>(id);
        if (cached) return cached;

        const order = await this.prisma.order.findUnique({
            where: { id },
            include: { items: true },
        });
        if (!order) return null;
        const domainOrder = PrismaOrderMapper.toDomain(order);

        if (order) await this.redisService.set(id, domainOrder, 300);

        return domainOrder;
    }
}
