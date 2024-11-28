import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = this.userRepository.create({
      firstName,
      lastName,
      email,
      password,
    });
    return this.userRepository.save(user);
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
