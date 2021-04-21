import "reflect-metadata";
import * as tq from "type-graphql";
import { UserResolver } from "./UserResolver";
import { ApolloServer } from "apollo-server";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "./context";
import { GraphQLScalarType } from "graphql";
import { PhoneResolver, SortOrder, PhoneCreateInput } from "./PhoneResolver";
import { updateDeviceIps } from "./cron/updateDeviceIps";
import cron from "node-cron";

const app = async () => {
  tq.registerEnumType(SortOrder, {
    name: "SortOrder",
  });

  const schema = await tq.buildSchema({
    resolvers: [UserResolver, PhoneResolver, PhoneCreateInput],
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
  });

  cron.schedule("* * * * *", () => {
    updateDeviceIps();
  });

  new ApolloServer({ schema, context: context })
    .listen({ port: 4001 }, () =>
      console.log(`
🚀 Server ready at: http://localhost:4001
⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`)
    )
    .catch((error) => {
      console.log(error);
    });
};

app();
