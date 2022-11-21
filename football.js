import fetch from "node-fetch";

fetch("https://v3.football.api-sports.io/injuries?fixture=686314", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "a3f8a19e8407a4e1dfa6e8924c4dc866",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
