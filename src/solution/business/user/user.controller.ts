import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../gateway/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly authService:AuthService
  ){}
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req){
    return this.authService.login(req.user);
  }
}
