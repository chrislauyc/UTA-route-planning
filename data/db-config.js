const environment = process.env.NODE_ENV || "development";
const knex = require("knex")(environment);
const configs = require("../knexfile.js");

module.exports = knex(configs[environment]);