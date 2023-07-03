import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AutorModule } from './autor/autor.module';
import { NacionalidadeModule } from './nacionalidade/nacionalidade.module';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AutorModule,
    NacionalidadeModule,
    LivroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
