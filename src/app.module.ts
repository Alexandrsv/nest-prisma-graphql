import { Module } from '@nestjs/common';
import { GymModule } from './gym/gym.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    GymModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
