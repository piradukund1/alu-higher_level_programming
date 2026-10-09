#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    const count = films.filter((film) =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    ).length;
    console.log(count);
  }
});
