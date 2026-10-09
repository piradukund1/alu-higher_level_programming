#!/usr/bin/node
exports.esrever = function (list) {
  return list.reduce((reversed, element) => [element, ...reversed], []);
};
