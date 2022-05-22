import { Module } from '@nestjs/common';
import { LibService } from './lib.service';
import { LibController } from './lib.controller';

@Module({
  providers: [LibService],
  controllers: [LibController]
})
export class LibModule {}
