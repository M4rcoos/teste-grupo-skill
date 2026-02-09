import { OrderItem } from './order-item-entity';
import { InvalidOrderItemError } from '../errors/invalid-order-item.error';

describe('OrderItem', () => {
    it('should create a valid OrderItem', () => {
        const item = new OrderItem('product-id-1', 'Cadeira Gamer Pro', 50, 2);
        expect(item.productId).toBe('product-id-1');
        expect(item.name).toBe('Cadeira Gamer Pro');
        expect(item.price).toBe(50);
        expect(item.quantity).toBe(2);
    });

    it('should correctly calculate the total', () => {
        const item = new OrderItem('product-id-1', 'Cadeira Gamer Pro', 50, 3);
        expect(item.total).toBe(150);
    });

    it('should throw an error if quantity <= 0', () => {
        expect(
            () => new OrderItem('product-id-1', 'Cadeira Gamer Pro', 50, 0),
        ).toThrow(InvalidOrderItemError);
        expect(
            () => new OrderItem('product-id-1', 'Cadeira Gamer Pro', 50, -2),
        ).toThrow('Quantidade inválida');
    });

    it('should throw an error if price <= 0', () => {
        expect(
            () => new OrderItem('product-id-1', 'Cadeira Gamer Pro', 0, 2),
        ).toThrow(InvalidOrderItemError);
        expect(
            () => new OrderItem('product-id-1', 'Cadeira Gamer Pro', -50, 2),
        ).toThrow('Preço inválido');
    });
});
