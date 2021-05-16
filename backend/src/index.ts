import "reflect-metadata";
import * as tq from "type-graphql";
import { UserResolver } from "./UserResolver";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import serveIndex from "serve-index";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "./context";
import { GraphQLScalarType } from "graphql";
import {
  PhoneResolver,
  SortOrder as PhoneSortOrder,
  PhoneCreateInput,
  PhoneUpdateInput,
} from "./PhoneResolver";
import {
  RoomResolver,
  SortOrder as RoomSortOrder,
  RoomCreateInput,
} from "./RoomResolver";
import cron from "node-cron";
import performCronJobs from "./cron";
import { generateDeployFiles } from "./cron/generateDeployFiles";
require("dotenv").config();

const startApolloServer = async () => {
  tq.registerEnumType(PhoneSortOrder, {
    name: "PhoneSortOrder",
  });
  tq.registerEnumType(RoomSortOrder, {
    name: "RoomSortOrder",
  });

  const schema = await tq.buildSchema({
    resolvers: [
      UserResolver,
      PhoneResolver,
      PhoneCreateInput,
      PhoneUpdateInput,
      RoomResolver,
      RoomCreateInput,
    ],
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
  });

  const app = express();
  const server = new ApolloServer({ schema, context: context });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: process.env.SERVER_PORT });
  app.use("/prov", express.static("./src/xml"));
  app.use("/prov", serveIndex("./src/xml"));

  console.log(
    `🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`
  );
  return { server, app };
};

// cron.schedule("* * * * *", async () => {
//   performCronJobs();
// });
// performCronJobs();
// generateDeployFiles();

startApolloServer();
