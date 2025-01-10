import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtratoSicoob } from './extrato-sicoob/entities/extrato-sicoob.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExtratoSicoobService } from './extrato-sicoob/extrato-sicoob.service';
import { ExtratoSicoobController } from './extrato-sicoob/extrato-sicoob.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: Number(configService.get<string>('DB_PORT', '3306')),
        username: configService.get<string>('DB_USERNAME', 'root'),
        password: configService.get<string>('DB_PASSWORD', 'root'),
        database: configService.get<string>('DB_DATABASE', 'todo'),
        entities: [],
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController, ExtratoSicoobController ],
  providers: [AppService, ExtratoSicoobService],
})
export class AppModule {}
