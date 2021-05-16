import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { Phone } from "./Phone";

@ObjectType()
export class Room {
  @Field((type) => ID)
  id: number;

  @Field()
  number: string;

  @Field((type) => Phone, { nullable: true })
  phone?: Phone;

  @Field((type) => Date)
  updatedAt: Date;
}
