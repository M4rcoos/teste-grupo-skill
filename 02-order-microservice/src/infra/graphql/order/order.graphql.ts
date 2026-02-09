import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { OrderItemType } from './order-item.graphql';

@ObjectType()
export class OrderType {
    @Field(() => ID)
    id: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => [OrderItemType])
    items: OrderItemType[];

    @Field(() => Float, { nullable: true })
    total?: number;
}
