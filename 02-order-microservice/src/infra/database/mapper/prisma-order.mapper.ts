import {
    Order as PrismaOrder,
    OrderItem as PrismaOrderItem,
} from '@prisma/client';
import { OrderItem } from '../../../domain/entities/order-item-entity';
import { Order } from '../../../domain/entities/order-entity';

export class PrismaOrderMapper {
    static toDomainItem(item: PrismaOrderItem): OrderItem {
        if (!item) return null;
        return new OrderItem(
            item.productId,
            item.name,
            Number(item.price),
            item.quantity,
        );
    }

    static toDomain(order: PrismaOrder & { items: PrismaOrderItem[] }): Order {
        if (!order) return null;
        const items = order.items.map(this.toDomainItem);
        return new Order(order.id, order.createdAt, order.updatedAt, items);
    }
}
