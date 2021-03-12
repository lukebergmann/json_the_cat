const request = require('request');

const breed = process.argv[2];


request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, function(error, response, body) {
  if (error) {
   console.log("Error: Undefined cat breed or URL typo");
  }
  const data = JSON.parse(body);
  console.log(data);
  console.log(data[0]["description"]);

});













// Using template literal to incorperate breed to URL
// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
//   const data = JSON.parse(body);
//   console.log(data);

//   console.log(data[0]["description"]);

// });




