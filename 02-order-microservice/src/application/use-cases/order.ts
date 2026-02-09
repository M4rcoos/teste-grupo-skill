import { InvalidOrderIdError } from 'src/domain/errors/invalid-order-id.error';
import { IOrderRepository } from '../../domain/repositories/order-repository';
import { OrderNotFoundError } from 'src/domain/errors/order-not-found.error';
import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class OrderUseCase {
    constructor(
        @Inject('IOrderRepository') readonly orderRepo: IOrderRepository,
    ) {}
    async execute(id: string) {
        if (!id) {
            throw new InvalidOrderIdError();
        }

        const order = await this.orderRepo.findById(id);

        if (!order) {
            throw new OrderNotFoundError(id);
        }

        return order;
    }
}
