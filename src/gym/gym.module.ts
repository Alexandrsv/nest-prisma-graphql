import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymResolver } from './gym.resolver';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GymService, GymResolver],
})
export class GymModule {}
