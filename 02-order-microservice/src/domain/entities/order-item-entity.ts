import { InvalidOrderItemError } from '../errors/invalid-order-item.error';

export class OrderItem {
    constructor(
        public readonly productId: string,
        public readonly name: string,
        public readonly price: number,
        public readonly quantity: number,
    ) {
        if (quantity <= 0) {
            throw new InvalidOrderItemError('Quantidade inválida');
        }

        if (price <= 0) {
            throw new InvalidOrderItemError('Preço inválido');
        }
    }
    get total(): number {
        return this.price * this.quantity;
    }
}
