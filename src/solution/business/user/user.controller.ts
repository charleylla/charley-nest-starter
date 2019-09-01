import { Controller, Post, Request, UseGuards, Body, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '~solution/gateway/auth/auth.service';
import { 
  ApiUseTags, 
  ApiOperation, 
  ApiResponse
} from '@nestjs/swagger';
import { LoginDto, LoginResponseDto } from '~solution/dto/user.dto';

@ApiUseTags('用户模块')
@Controller('user')
export class UserController {
  constructor(
    private readonly authService:AuthService
  ){}

  @ApiOperation({ title: '登录' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '登录成功',
    type: LoginResponseDto,
  })
  @ApiResponse({ 
    status: HttpStatus.UNAUTHORIZED,
    description: '登录失败.' 
  })
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req,@Body() loginDto: LoginDto){
    return this.authService.login(req.user);
  }
}
