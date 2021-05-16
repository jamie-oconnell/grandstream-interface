import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsIP, IsMACAddress } from "class-validator";
import { IsValidRoomNumber } from "./validators/IsValidRoomNumber";
import { Room } from "./Room";

@ObjectType()
export class Phone {
  @Field((type) => ID)
  id: number;

  @Field()
  @IsMACAddress({ no_colons: true })
  mac_address: string;

  @Field((type) => Room, { nullable: true })
  room?: Room;

  @Field({ nullable: true })
  @IsIP("4")
  ip?: string;

  @Field()
  status: string;

  @Field((type) => Date, { nullable: true })
  lastCheckedAt?: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
