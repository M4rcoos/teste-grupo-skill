import { Order } from './order-entity';
import { OrderItem } from './order-item-entity';

describe('Order', () => {
    it('It should be possible to create a new order with products.', () => {
        const items = [
            new OrderItem('product-id-1', 'Cadeira Gamer Pro', 50, 2),
            new OrderItem('product-id-2', 'Mouse Pad XL', 30, 1),
        ];
        const order = new Order('order-id-1', new Date(), new Date(), items);

        expect(order.id).toBe('order-id-1');
        expect(order.items).toHaveLength(2);
    });

    it('It should be possible to calculate the total.', () => {
        const items = [
            new OrderItem('product-id-1', 'Cadeira Gamer Pro', 50, 2),
            new OrderItem('product-id-2', 'Mouse Pad XL', 30, 1),
        ];
        const order = new Order('order-id-1', new Date(), new Date(), items);

        expect(order.total).toBe(130);
    });

    it('The total should be 0 if there are no items.', () => {
        const order = new Order('order-id-1', new Date(), new Date(), []);
        expect(order.total).toBe(0);
    });
});
