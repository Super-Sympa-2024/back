import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

export class User {
    @ApiProperty()
    id: number;

    @ApiProperty()
    username: string;

    @ApiProperty()
    @Exclude()
    password: string;
}
