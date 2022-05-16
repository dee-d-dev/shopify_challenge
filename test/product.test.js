process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);
const server = require("../app");

describe("/test collection", () => {
  //test the GET route

  describe("GET /api/v1/item", () => {
    it("should GET all items", () => {
      chai
        .request(server)
        .get("/api/v1/items")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
        });
    });

    it("should NOT GET all items", () => {
      chai
        .request(server)
        .get("/api/v1/item")
        .end((err, res) => {
          res.should.have.status(404);
        });
    });
  });

 

  
});
