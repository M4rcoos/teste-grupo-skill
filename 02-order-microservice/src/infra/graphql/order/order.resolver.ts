import { Args, Query, Resolver } from '@nestjs/graphql';
import { OrderUseCase } from 'src/application/use-cases/order';
import { OrderType } from './order.graphql';
import { z } from 'zod';
import { mapOrderToGraphQL } from '../mapper/order.mapper';

const validationSchema = z.object({
    id: z.uuid({ message: 'ID inválido' }),
});
@Resolver(() => OrderType)
export class OrderResolver {
    constructor(private readonly orderUseCase: OrderUseCase) {}

    @Query(() => OrderType, { name: 'order' })
    async getOrder(@Args('id') id: string): Promise<OrderType> {
        const { id: orderId } = validationSchema.parse({ id });
        const order = await this.orderUseCase.execute(orderId);
        return mapOrderToGraphQL(order);
    }
}
