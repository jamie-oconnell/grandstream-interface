import "reflect-metadata";
import * as tq from "type-graphql";
import { UserResolver } from "./UserResolver";
import { ApolloServer } from "apollo-server";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "./context";
import { GraphQLScalarType } from "graphql";
import { PhoneResolver, SortOrder, PhoneCreateInput } from "./PhoneResolver";
import cron from "node-cron";
import performCronJobs from "./cron";
require("dotenv").config();

const app = async () => {
  cron.schedule("* * * * *", async () => {
    performCronJobs();
  });

  tq.registerEnumType(SortOrder, {
    name: "SortOrder",
  });

  const schema = await tq.buildSchema({
    resolvers: [UserResolver, PhoneResolver, PhoneCreateInput],
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
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

  performCronJobs();
};

app();
