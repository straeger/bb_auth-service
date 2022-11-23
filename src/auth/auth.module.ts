import { JwtModule } from "@nestjs/jwt";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [ClientsModule.register([{
    name: 'USER_CLIENT',
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4010,
    }
  }]), JwtModule.register({
    secret: 'yoursecret',
    signOptions: { expiresIn: '60s' }
  })]],
providers: [AuthService] 
})
export class AuthModule {}
