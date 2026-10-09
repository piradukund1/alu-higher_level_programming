#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  if (response.statusCode === 200) {
    const data = JSON.parse(body);
    const films = Array.isArray(data) ? data : data.results;

    const count = films.filter((film) =>
      film.characters.some((character) => character.includes('/people/18'))
    ).length;

    console.log(count);
  }
});
