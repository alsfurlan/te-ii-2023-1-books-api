import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NacionalidadeEntity } from './nacionalidade.entity';
import { NacionalidadeService } from './nacionalidade.service';
import { NacionalidadeController } from './nacionalidade.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NacionalidadeEntity])],
  controllers: [NacionalidadeController],
  providers: [NacionalidadeService],
})
export class NacionalidadeModule {}
