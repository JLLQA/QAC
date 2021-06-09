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

    it('should verify that a new movie can be created and can findById', (done) => {
        let MOV = new MOVIE({
            "id": 1,
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

    //The update  test
    // it('should verify that an existing movie can be updated with a review', (done) => {

    //     let movReview = { "critic": "Critic1", "stars": 1, "review": "Did not like this movie unfortunately" };
    //     chai
    //         .request(server)
    //         .get('/movies')
    //         .end((err, res) => {
    //             let movId = res.body[0].id;
    //             console.log("The movie ID is: " + movId);
    //             res.should.have.status(200);
    //             res.body.should.be.a('array');

    //             // chai
    //             //     .request(server)
    //             //     .patch('/movies/review/:id')
    //             //     .send({ id: parseInt(movId)}, {$push: {reviews:movReview}})
    //             //     .end((err, res) => {
    //             //         console.log("THis ");
    //             //         console.log(res.body);
    //             //         res.should.have.status(404);

    //             //     });
    //             done();
    //         // });
    // });

    // The update fail test
    it('should verify that an a review can be added', (done) => {

        let movReview = { "critic": "Critic1", "stars": 1, "review": "Did not like this movie unfortunately" };
        chai
            .request(server)
            .get('/movies')
            .end((err, res) => {
                let movId = res.body[0].id;
                console.log("The movie ID is: " + movId);
                res.should.have.status(200);
                res.body.should.be.a('array');

                chai
                    .request(server)
                    .patch('/movies/review/:id')
                    .send({ id: parseInt(movId)}, {$push: {reviews:movReview}})
                    .end((err, res) => {
                        res.should.have.status(202);
                        done();

                    });
            });
    });

    //Find by id for non existabnt id
    it('should verify that you cannot find by a non existant id', (done) => {
        chai
        .request(server)
        .get('/movies/find/' + 5)
        .end((err, res) => {
            // res.should.have.status(200);
            // res.body.should.be.a('object');
            console.log(res.body);
            // res.body.title.should.equal("Demon Slayer");
            done();
        });

    });
});