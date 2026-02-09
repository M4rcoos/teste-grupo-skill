import { Module } from '@nestjs/common';
import { GraphQLModule } from './infra/graphQL.module';

@Module({
    imports: [GraphQLModule],
})
export class AppModule {}
