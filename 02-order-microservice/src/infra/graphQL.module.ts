import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DataBaseModule } from './database/database.module';
import { OrderUseCase } from 'src/application/use-cases/order';
import { OrderResolver } from './graphql/order/order.resolver';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
    imports: [
        DataBaseModule,
        NestGraphQLModule.forRoot({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            playground: true,
            debug: true,
        }),
    ],
    providers: [OrderUseCase, OrderResolver],
})
export class GraphQLModule {}
