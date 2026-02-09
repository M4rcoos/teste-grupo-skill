import { DomainError } from './domain-error';

export class InvalidOrderIdError extends DomainError {
    readonly name = 'InvalidOrderIdError';

    constructor() {
        super('O ID do pedido é inválido');
    }
}
