process.env.NODE_ENV = 'test';

const MOVIE = require("../models/movie")

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

//Delete all movies in the db before the tests are run
before((done) => {
    MOVIE.deleteMany({}, (err) => { });
    done();
});

//Delete all movies in the db before the tests are run
after((done) => {
    MOVIE.deleteMany({}, (err) => { });
    done();
});

describe('/route Testing for Listings....', () => {

    it('should verify that we have 0 movies in the DB', (done) => {
        chai
            .request(server)
            .get('/movies')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });

    it('should be able to create the Demon Slayer Movie', (done) => {
        chai
            .request(server)
            .post('/setup/initialreleases1')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.id.should.equal(0);
                res.body.genre.should.equal("Quest");
                done();
            });
    });

    it('should be able to create the Cruella', (done) => {
        chai
            .request(server)
            .post('/setup/initialreleases2')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.id.should.equal(1);
                res.body.year.should.equal(2021);
                done();
            });
    });

    it('should be able to create the A Quiet Place 2', (done) => {
        chai
            .request(server)
            .post('/setup/initialreleases3')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.id.should.equal(2);
                res.body.director.should.contain("John");
                done();
            });
    });

    it('should be able to create the Peter Rabbit 2: The Runaway', (done) => {
        chai
            .request(server)
            .post('/setup/initialreleases4')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
                res.body.id.should.equal(3);
                res.body.genre.should.contain("Comedy");
                done();
            });
    });

    it('should verify that a new movie can be created and can findById', (done) => {
        let MOV = new MOVIE({
            "id": 5,
            "title": "Demon Slayer",
            "director": "Gotouge",
            "genre": "Quest",
            "year": 2021,
            "actors": [{ "name": "Tanjiro" }, { "name": "Inosuke" }, { "name": "Zenitsu" }],
            "poster": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbYpI4mYx8iImEc1TVNqY5iJFREmo7-sGK7PdtBztb2qtS0Pzb",
            "synopsis": "A boy raised by boars who wears a boar's head and another boy who reveals his true power when he sleeps.",
            "reviews": [{ "critic": "mark", "stars": "5" }, { "critic": "hater", "stars": "1" }]
        });
        chai
            .request(server)
            .post('/movies/create')
            .send(MOV)
            .end((err, res) => {
                let movTitle = res.body.title;
                let movId = res.body.id;
                console.log("the movie id:" + movId + " and the title: " + movTitle)
                res.should.have.status(200);
                expect(movTitle).to.equal("Demon Slayer");

                chai
                    .request(server)
                    .get('/movies/find/' + movId)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.title.should.equal("Demon Slayer");
                        done();
                    });
            });
    });

    // The update fail test
    it('should verify that the update movie can fail', (done) => {

        let movReview = { "critic": "Critic1", "stars": 1, "review": "Did not like this movie unfortunately" };
        chai
            .request(server)
            .get('/movies')
            .end((err, res) => {
                let movId = res.body[0].id;
                res.should.have.status(200);
                res.body.should.be.a('array');

                chai
                    .request(server)
                    .patch('/movies/review/:id')
                    .send({ id: parseInt(movId)}, {$push: {reviews:movReview}})
                    .end((err, res) => {
                        res.should.have.status(404);
                        done();

                    });
            });
    });
    
});