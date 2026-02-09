import { OrderItem } from './order-item-entity';

export class Order {
    constructor(
        public readonly id: string,
        public createdAt: Date,
        public updatedAt: Date,
        public readonly items: OrderItem[],
    ) {}

    get total(): number {
        return this.items?.reduce((sum, item) => sum + item.total, 0) ?? 0;
    }
}
