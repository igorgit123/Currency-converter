const { model } = require("mongoose");

require("dotenv").config();

const apiKey = process.env.API_KEY;

async function fetchCurr() {
  const url = `http://data.fixer.io/api/latest?access_key=${apiKey}`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  fetchCurr,
};
