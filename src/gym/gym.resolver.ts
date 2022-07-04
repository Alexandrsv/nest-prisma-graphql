import { Resolver } from '@nestjs/graphql';
import { GymEntity } from './entities/gym.entity';
import { Query } from '@nestjs/common';
import { GymService } from './gym.service';

@Resolver(() => GymEntity)
export class GymResolver {
  constructor(private readonly gymService: GymService) {}

  // @Query(() => [GymEntity])
  async getAllGyms(): Promise<GymEntity[]> {
    return await this.gymService.getAllGyms();
  }
}
