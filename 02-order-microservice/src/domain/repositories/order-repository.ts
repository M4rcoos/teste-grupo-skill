import { Order } from '../entities/order-entity';

export abstract class IOrderRepository {
    abstract findById(id: string): Promise<Order>;
}
