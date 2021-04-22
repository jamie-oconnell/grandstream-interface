import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
<<<<<<< HEAD
import { IsIP, IsMACAddress } from "class-validator";
=======
import { IsMACAddress , IsIP} from "class-validator";
>>>>>>> 207576f1e46bf8d5a0026bb948af5370cb26743b
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
<<<<<<< HEAD
  @IsIP("4")
  ip?: string;
=======
  @IsIP({version : "4"})
  ip: string?;
>>>>>>> 207576f1e46bf8d5a0026bb948af5370cb26743b

  @Field((type) => Date)
  updatedAt: Date;
}
