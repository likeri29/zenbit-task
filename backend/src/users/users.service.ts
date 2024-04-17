import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const isUserExists = await this.usersRepository.findOne({
      where: { email: email },
    });

    if (isUserExists) {
      throw new BadRequestException('This email already exist!');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.usersRepository.save({
      email,
      password: hashedPassword,
    });

    const accessToken = this.jwtService.sign({ email });

    return {
      user: { id: user.id, email: user.email },
      accessToken,
    };
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }
}
