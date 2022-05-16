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

  //test the POST route
  describe("POST /api/v1/item", () => {
    it("should POST an item", () => {
      const item = {
        name: "test item",
        units: 10,
        cost: 700,
      };
      chai
        .request(server)
        .post("/api/v1/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("units");
          res.body.should.have.property("cost");
        });
    });

    it("should NOT POST an item", () => {
      const item = {
        name: "test item",
        units: 10,
        cost: 700,
      };
      chai
        .request(server)
        .post("/api/v1/items")
        .send(item)
        .end((err, res) => {
          res.should.have.status(404);
        });
    });
  });

  //test the PUT route
  describe("PUT /api/v1/item/:id", () => {
    it("should PUT an item", () => {
      const item = {
        name: "test item",
        units: 10,
        cost: 700,
      };
      chai
        .request(server)
        .put("/api/v1/item/:id")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("units");
          res.body.should.have.property("cost");
        });
    });
  });

  //test the DELETE route
  describe("DELETE /api/v1/item/:id", () => {
    it("should DELETE an item", () => {
      chai
        .request(server)
        .delete("/api/v1/item/:id")
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
});
