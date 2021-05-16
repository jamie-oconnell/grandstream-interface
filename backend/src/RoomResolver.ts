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
import { Room } from "./Room";
import { Context } from "./context";

@InputType()
export class RoomCreateInput {
  @Field()
  number: string;
}

@InputType()
class RoomOrderByUpdatedAtInput {
  @Field((type) => SortOrder)
  updatedAt: SortOrder;
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}

@Resolver(Room)
export class RoomResolver {
  @Query((returns) => Room, { nullable: true })
  async roomById(@Arg("id") id: number, @Ctx() ctx: Context) {
    return ctx.prisma.room.findUnique({
      where: { id },
    });
  }

  @Query((returns) => [Room])
  async rooms(
    @Arg("searchString", { nullable: true }) searchString: string,
    @Arg("skip", (type) => Int, { nullable: true }) skip: number,
    @Arg("take", (type) => Int, { nullable: true }) take: number,
    @Arg("orderBy", { nullable: true }) orderBy: RoomOrderByUpdatedAtInput,
    @Ctx() ctx: Context
  ) {
    const or = searchString
      ? {
          OR: [{ number: { contains: searchString } }],
        }
      : {};

    return ctx.prisma.room.findMany({
      where: {
        ...or,
      },
      take: take || undefined,
      skip: skip || undefined,
      orderBy: orderBy || undefined,
    });
  }

  @Mutation((returns) => Room)
  async createRoom(@Arg("data") data: RoomCreateInput, @Ctx() ctx: Context) {
    console.log(data);
    return ctx.prisma.room.create({
      data: {
        number: data.number,
      },
    });
  }

  @Mutation((returns) => Room, { nullable: true })
  async deleteRoom(@Arg("id", (type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.room.delete({
      where: {
        id,
      },
    });
  }
}
