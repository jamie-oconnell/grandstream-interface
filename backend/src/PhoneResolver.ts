import "reflect-metadata";
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  FieldResolver,
  Root,
  Int,
  InputType,
  Field,
} from "type-graphql";
import { Phone } from "./Phone";
import { Context } from "./context";
import { IsMACAddress } from "class-validator";

@InputType()
export class PhoneCreateInput {
  @Field()
  @IsMACAddress({ no_colons: true })
  mac_address: string;

  @Field({ nullable: true })
  room_id?: number;
}

@InputType()
class PhoneOrderByUpdatedAtInput {
  @Field((type) => SortOrder)
  updatedAt: SortOrder;
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}

@Resolver(Phone)
export class PhoneResolver {
  @Query((returns) => Phone, { nullable: true })
  async phoneById(@Arg("id") id: number, @Ctx() ctx: Context) {
    return ctx.prisma.phone.findUnique({
      where: { id },
    });
  }

  @Query((returns) => [Phone])
  async phones(
    @Arg("searchString", { nullable: true }) searchString: string,
    @Arg("skip", (type) => Int, { nullable: true }) skip: number,
    @Arg("take", (type) => Int, { nullable: true }) take: number,
    @Arg("orderBy", { nullable: true }) orderBy: PhoneOrderByUpdatedAtInput,
    @Ctx() ctx: Context
  ) {
    const or = searchString
      ? {
          OR: [
            { mac_address: { contains: searchString } },
            { room_number: { contains: searchString } },
          ],
        }
      : {};

    return ctx.prisma.phone.findMany({
      where: {
        ...or,
      },
      take: take || undefined,
      skip: skip || undefined,
      orderBy: orderBy || undefined,
    });
  }

  @Mutation((returns) => Phone)
  async createPhone(@Arg("data") data: PhoneCreateInput, @Ctx() ctx: Context) {
    console.log(data);
    return ctx.prisma.phone.create({
      data: {
        mac_address: data.mac_address,
        // Room: {
        //   connect: {
        //     id: data.room_id ? data.room_id : undefined,
        //   },
        // },
      },
    });
  }

  @Mutation((returns) => Phone, { nullable: true })
  async deletePost(@Arg("id", (type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.phone.delete({
      where: {
        id,
      },
    });
  }
}
