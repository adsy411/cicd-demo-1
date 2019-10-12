"use strict";

module.exports.listTodos = async event => {
  const todos = ["Taday We Have Session", "Demo", "Ollah....."];
  return {
    statusCode: 200,
    body: JSON.stringify({ todos }, null, 2)
  };
};
