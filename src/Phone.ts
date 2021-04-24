import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsIP, IsMACAddress } from "class-validator";
import { IsValidRoomNumber } from "./validators/IsValidRoomNumber";

@ObjectType()
export class Phone {
  @Field((type) => ID)
  id: number;

  @Field()
  @IsMACAddress({ no_colons: true })
  mac_address: string;

  @Field({ nullable: true })
  @IsValidRoomNumber()
  room_id: number;

  @Field({ nullable: true })
  @IsIP("4")
  ip?: string;

  @Field()
  status: string;

  @Field((type) => Date)
  updatedAt: Date;
}
