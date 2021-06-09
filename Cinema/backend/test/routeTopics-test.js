process.env.NODE_ENV = 'test';

const TOPIC = require("../models/Topics");

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const chaiHttp = require('chai-http');
const server = require('../index');
const { findByIdAndUpdate } = require("../models/Topics");

chai.use(chaiHttp);

//Delete all movies in the db before the tests are run
before((done) => {
    TOPIC.deleteMany({}, (err) => { });
    done();
});

//Delete all movies in the db before the tests are run
after((done) => {
    TOPIC.deleteMany({}, (err) => { });
    done();
});

describe('/routeReleases Testing for Topics....', () => {

    it('should verify that we have 0 topics in the DB', (done) => {
        chai
            .request(server)
            .get('/topics')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });


    //Test to create and find by id and title
    it('should verify that we can create a topic and getByTitle', (done) => {

        let movTopic = new TOPIC({
            username: "Name1",
            body: "This movie is interesting. You should watch",
            title: "007 Movie",
        });
        chai
            .request(server)
            .post('/movies/topics/create')
            .send(movTopic)
            .end((err, res) => {
                let movTitle = res.body.title;
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.title.should.equal("007 Movie");
                res.body.username.should.equal("Name1");

                chai
                    .request(server)
                    .get('/topics/' + movTitle)
                    .end((err, res) => {
                        res.should.have.status(200);
                        expect(res.body.body).to.contain("This movie is interesting")
                        done();
                    });
            });
    });

    // Can update an existing movie with a comment
    it('should verify that an existing movie can be updated with a review', (done) => {

        let movTop = {"username":"Ice", "body": "This is test review"};
        chai
            .request(server)
            .get('/topics')
            .end((err, res) => {
                let movTitle = res.body[0].title;
                res.should.have.status(200);
                res.body.should.be.a('array');

                chai
                    .request(server)
                    .patch('/movies/topics/comment/:title')
                    .send({ title: movTitle}, {$push: {comments : movTop}} )
                    .end((err, res) => {
                        res.should.have.status(202);
                        done();
                    });
                });
    });


});