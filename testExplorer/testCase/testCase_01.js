const request = require("supertest"); 
const { expect } = require("chai"); 
const baseUrl = require("../globalVariable/baseUrl");


const url = `${baseUrl}`; 
describe("Testing API restful", function () {
 
  it("Test GET", async function () {
    const response = await request(url).get("/objects/12");
    
    expect(response.status).to.equal(200);
  });
});
