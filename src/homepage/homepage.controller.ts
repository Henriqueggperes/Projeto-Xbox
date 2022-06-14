import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { HomepageService } from './homepage.service';

@ApiTags('HomePage')
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get()
  @ApiOperation({
    summary:'Rota a qual traz as informações principais da tela inicial da aplicação'
  })
  allInfo(@LoggedUser() user:User){
    return this.homepageService.allInfo(user)
  }
}
