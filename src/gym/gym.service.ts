import { Injectable } from '@nestjs/common';
import {GymEntity} from "./entities/gym.entity";

@Injectable()
export class GymService {
  async getAllGyms(): Promise<GymEntity> {
    return {} as GymEntity;}

}
