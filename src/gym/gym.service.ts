import { Injectable } from '@nestjs/common';
import { GymEntity } from './entities/gym.entity';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class GymService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAllGyms(): Promise<GymEntity[]> {
    return await this.databaseService.gym.findMany();
  }
}
