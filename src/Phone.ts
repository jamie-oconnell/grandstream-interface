import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsMACAddress } from "class-validator";
import { IsValidRoomNumber } from "./validators/IsValidRoomNumber";

@ObjectType()
export class Phone {
  @Field((type) => ID)
  id: number;

  @Field()
  @IsMACAddress({ no_colons: true })
  mac_address: string;

  @Field()
  @IsValidRoomNumber()
  room_number: string;
}
