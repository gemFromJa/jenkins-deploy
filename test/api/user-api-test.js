const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");
const { expect, assert } = chai;

chai.use(chaiHttp);

describe("User", () => {
    describe("GET /users", () => {
        it("should send back array users", (done) => {
            chai.request(app)
                .get("/users")
                .end((err, res) => {
                    if (err) document(err);

                    console.log(res.body);
                    expect(res.body).to.be.an("object");
                    assert.equal(res.body.success, true);
                    expect(res.body?.success).to.equal(true);
                    expect(res.body?.data).to.be.an("array");

                    done();
                });
        });
    });
});
