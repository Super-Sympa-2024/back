import { ApiProperty } from "@nestjs/swagger";
import { EventType } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class CreateEventDto {
    @IsNotEmpty()
    @ApiProperty()
    eventType: EventType

    @IsNotEmpty()
    @ApiProperty()
    userId: number
}
