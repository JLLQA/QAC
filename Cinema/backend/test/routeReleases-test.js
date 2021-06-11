process.env.NODE_ENV = 'test';

const RELEASE = require("../models/newreleases")

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);


//Delete all movies in the db before the tests are run
before((done) => {
    RELEASE.deleteMany({}, (err) => { });
    done();
});

//Delete all movies in the db before the tests are run
after((done) => {
    RELEASE.deleteMany({}, (err) => { });
    done();
});

//New Releases request testing
describe('/routeReleases Testing for NewReleases....', () => {

    it('should verify that we have 0 movies in the DB', (done) => {
        chai
            .request(server)
            .get('/newreleases')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });

    it('should be able to create the 007 movie', (done) => {
        chai
            .request(server)
            .post('/create007')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('should be able to create the spacejam movie', (done) => {
        chai
            .request(server)
            .post('/createjam')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('should be able to create the candyman movie', (done) => {
        chai
            .request(server)
            .post('/createcandyman')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('should be able to create the spiderman movie', (done) => {
        chai
            .request(server)
            .post('/createspiderman')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('should verify that we have 4 movies in the DB', (done) => {
        chai
            .request(server)
            .get('/newReleases')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(4);
                done();
            });
    });

    //Test to get the ID for the candyman movie and deleteByID
    it('should verify that we have can deleteById', (done) => {
        chai
            .request(server)
            .get('/newReleases')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[2].title.should.equal("Candyman");
                let candyId = res.body[2]._id;

                chai
                    .request(server)
                    .delete('/delById/' + candyId)
                    .end((err, res) => {
                        res.should.have.status(200);
                        expect(candyId).to.equal(res.body._id);
                        done();
                    });
            });
    });

    it('should verify that we have 3 movies in the DB after the delete', (done) => {
        chai
            .request(server)
            .get('/newReleases')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3);
                done();
            });
    });

    it('should verify that we should get an error when attempting to delete a movie that does not exist', (done) => {
        chai
            .request(server)
            .get('/newReleases')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                let randomId = 40;

                chai.request(server)
                    .delete('/delById/' + randomId)
                    .end((err, res) => {
                        res.should.have.status(500);
                        done();
                    });
            });
    });

});



