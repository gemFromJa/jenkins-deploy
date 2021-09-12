const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Root directory", () => {
    describe("Get greeting /", () => {
        it('should return { success: true, data: "hello" }', (done) => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    if (err) done(err);
                    expect(res).to.be.an("object");
                    expect(res).to.have.status(200);
                    expect(res.body.success).to.equal(true);
                    expect(res.body.data).to.equal("hello");
                    done();
                });
        });

        it("should fail without required fields", (done) => {
            chai.request(app)
                .post("/1/")
                .end((err, res) => {
                    if (err) done(err);

                    expect(res.body).to.be.an("object");
                    expect(res.body.success).to.equal(false);
                    expect(res).to.have.status(405);

                    done();
                });
        });
    });
});
