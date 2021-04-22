import "reflect-metadata";
import * as tq from "type-graphql";
import { UserResolver } from "./UserResolver";
import { ApolloServer } from "apollo-server";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "./context";
import { GraphQLScalarType } from "graphql";
import { PhoneResolver, SortOrder, PhoneCreateInput } from "./PhoneResolver";
import { updateDeviceIps } from "./cron/updateDeviceIps";
<<<<<<< HEAD
import { updateDeviceStatus } from "./cron/updateDeviceStatus";
import cron from "node-cron";
import performCronJobs from "./cron";
require("dotenv").config();

const app = async () => {
  cron.schedule("* * * * *", async () => {
    performCronJobs();
  });

=======
import cron from "node-cron";

const app = async () => {
>>>>>>> 207576f1e46bf8d5a0026bb948af5370cb26743b
  tq.registerEnumType(SortOrder, {
    name: "SortOrder",
  });

  const schema = await tq.buildSchema({
    resolvers: [UserResolver, PhoneResolver, PhoneCreateInput],
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
  });

<<<<<<< HEAD
  new ApolloServer({ schema, context: context })
    .listen({ port: process.env.SERVER_PORT }, () =>
      console.log(`
🚀 Server ready at: http://localhost:${process.env.SERVER_PORT}
=======
  cron.schedule("* * * * *", () => {
    updateDeviceIps();
  });

  new ApolloServer({ schema, context: context })
    .listen({ port: 4001 }, () =>
      console.log(`
🚀 Server ready at: http://localhost:4001
>>>>>>> 207576f1e46bf8d5a0026bb948af5370cb26743b
⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`)
    )
    .catch((error) => {
      console.log(error);
    });
<<<<<<< HEAD

  performCronJobs();
=======
>>>>>>> 207576f1e46bf8d5a0026bb948af5370cb26743b
};

app();
