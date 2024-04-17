import { Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { Deal } from './entities/deal.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deal) private readonly dealsRepository: Repository<Deal>,
  ) {}

  async create(createDealDto: CreateDealDto) {
    const deal = this.dealsRepository.create(createDealDto);

    return await this.dealsRepository.save(deal);
  }

  async findAll() {
    const deals = await this.dealsRepository.find();
    return deals;
  }
}
