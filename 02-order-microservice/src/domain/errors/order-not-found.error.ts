import { DomainError } from './domain-error';

export class OrderNotFoundError extends DomainError {
    readonly name = 'OrderNotFoundError';

    constructor(orderId: string) {
        super(`Pedido com id ${orderId} não foi encontrado`);
    }
}
