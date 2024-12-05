import { Controller, Post } from "@nestjs/common";
import { JwtAuthService } from "./jwt-auth.service";
import { UserService } from "src/user/user.service";

@Controller('auth')
export class AuthController {
    constructor(
        private jwtAuthService: JwtAuthService,
        private userService: UserService,
    ) {}

    @Post('login')
    async jwtLogin(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    )
}