const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = baseUrl; 

async function getMethod() {
  const response = await request(url).get("/objects/12");

  expect(response.status).to.equal(200);
  console.log(response.body);
}

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Ahmad Farasgali",
      data: {
        Generation: "5th generation",
        Price: "75000",
        Capacity: "512 GB",
      },
    });
 
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Ahmad Farasgali");

  console.log(response.body);
}

async function putMethod() {
  const response = await request(url)
    .put("/objects/7") 
    .send({
      name: "macbook pro 17",
      data: {
        Generation: "5th generation",
        Price: "75000",
        Capacity: "512 GB",
        color: "silver"
      },
    });
  
  
  expect(response.status).to.equal(405);
  

  console.log(response.body);
}


module.exports = { getMethod, postMethod, putMethod };
