import { Field, Float, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class OrderItemType {
    @Field(() => ID)
    productId: string;

    @Field()
    name: string;

    @Field(() => Float)
    price: number;

    @Field()
    quantity: number;
}
