import { Order } from 'src/domain/entities/order-entity';
import { OrderType } from '../order/order.graphql';

export function mapOrderToGraphQL(order: Order): OrderType {
    return {
        id: order.id,
        createdAt: new Date(order.createdAt),
        updatedAt: new Date(order.updatedAt),
        items: order.items.map((item) => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            total: item.total,
        })),
        total: order.total,
    };
}
