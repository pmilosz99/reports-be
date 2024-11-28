import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret:
        '10ef0dcb0d521a5176697f681f868b725058aedd9e6a29482094c1f3b6d6f85a96918d6f43f671743ab964b1fa332809d8d5b4cc0e2041798e4c339a686a1c5df2226fddd7d814a1f3770a9b0aae2c55b211ad29aaa2e596659d31796f96125ad70406c00fad2a5af62e23f1711495b16f959c07ab2a7c1016ec38db35e5be8a5f97c722a7bbeba92f7da10f981aecb2ab8f705762c67bf245d08ed683f687696c6d1ae852ee2a77ba274e5a98258f9528173ec0861b1f0661ee81ce893e7b25f7171f085f8d4ddb9a3a0c685e2acf01ece28031c956dc6fe35ea3cd599e12e2ead5558c75c2a53ecf3d9184cd242b11274a385e091522d90a11746f35aafb32',
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
