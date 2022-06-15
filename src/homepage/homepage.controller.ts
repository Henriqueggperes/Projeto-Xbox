import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { Genre } from 'src/genres/entities/genre.entitie';
import { Profile } from 'src/profile/entities/profile.entity';
import { User } from 'src/user/entities/user.entity';
import { HomepageService } from './homepage.service';

@ApiTags('HomePage')
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary:'Rota a qual traz as informações principais da tela inicial da aplicação'
  })
  allInfo( @LoggedUser() user: User){
    return this.homepageService.allInfo(user)
  }
}
