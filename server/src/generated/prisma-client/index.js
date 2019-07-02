"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Bird",
    embedded: false
  },
  {
    name: "Score",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/joe-53c25e/andrew-sutherland-challenge/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Bird",
    embedded: false
  },
  {
    name: "Score",
    embedded: false
  }
];
