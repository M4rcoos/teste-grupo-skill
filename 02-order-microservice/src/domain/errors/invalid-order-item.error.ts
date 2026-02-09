export class InvalidOrderItemError extends Error {
    readonly name = 'InvalidOrderItemError';

    constructor(message: string) {
        super(message);
    }
}
