import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

type TUser = {
  email: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(login: TUser) {
    const { email, password } = login;

    const user = await this.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Email або пароль неправильні');
    }

    return {
      user: {
        email,
      },
      accessToken: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }

  async logout() {
    return {
      user: {},
      access_token: '',
    };
  }

  //   async validateUser(email: string, password: string) {
  //     const user = await this.usersService.findOne(email);

  //     if (!user) {
  //       throw new UnauthorizedException('Such user does not exist');
  //     }

  //     const isMatchedPassword = await bcrypt.compare(password, user.password);

  //     if (isMatchedPassword) {
  //       return user;
  //     }

  //     throw new UnauthorizedException('Password is incorrect');
  //   }
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email);

    if (!user) {
      throw new UnauthorizedException('Such user does not exist');
    }

    if (!password || !user.password) {
      throw new UnauthorizedException('Password is missing');
    }

    const isMatchedPassword = await bcrypt.compare(password, user.password);

    if (isMatchedPassword) {
      return user;
    }

    throw new UnauthorizedException('Password is incorrect');
  }
}
