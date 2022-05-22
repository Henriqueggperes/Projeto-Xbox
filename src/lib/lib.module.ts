import { Module } from '@nestjs/common';
import { LibService } from './lib.service';
import { LibController } from './lib.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [LibService],
  controllers: [LibController]
})
export class LibModule {}
