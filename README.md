Coverage: X%
# QA Cinemas

Group project tasked with creating full-stack Web application for a “QA Cinema” chain, implementing full MERN stack with use of Jest, Mocha and Chai for front-end and back-end testing respectively.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### List of required programs
* [Git Bash](https://git-scm.com/downloads)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Postman](https://www.postman.com/downloads/)
* [MongoDB](https://www.mongodb.com/download-center/community)
* [Node.js](https://nodejs.org/en/download/)

#### What to do if you don't have Git Bash
```
Step 1. Navigate to the link above and download the relevant option for your operating system.
Step 2. Once downloaded navigate to the files location on your local machine, double-click and press "Run".
Step 3. Once you are running the installer, after reading the license press "Next".
Step 4. Select the destination location and press "Next".
Step 5. Leave the selected components as they are and press "Next".
Step 6. Leave the default start menu folder as it is and press "Next".
Step 7. Change the default editor to your personal preference and press "Next".
Step 8. Leave the PATH environment as "Use Git from Git Bash only" and press "Next".
Step 9. Leave the backend as OpenSSL and press "Next".
Step 10. Leave the line ending conversations as default and press "Next".
Step 11. Leave the Terminal Emulator as default and press "Next".
Step 12. Leave the extra options as default and press "Next".
Step 13. Do not add experimental options and press "Install".
Step 14. Wait for the install to end and press "Finish".
```

#### What to do if you don't have Visual Studio Code
```
Step 1. Navigate to the link above --> "Download".
Step 2. Navigate to the download location and double-click to run the executeable.
Step 3. Accept the agreement and click "Next".
Step 4. Leave defaults and click "Next".
Step 5. Click install.
```

#### What to do if you don't have Postman
```
Step 1. Navigate to the link above --> "Download the app" and download the relevant option for your operating system.
Step 2. Navigate to the download location and double-click to run the executeable.
```

#### What to do if you don't have mongoDB
```
Step 1. Navigate to the link above --> "Download".
Step 2. 
```

#### What to do if you don't have Node.js
```
Step 1. Navigate to the link above --> "Download".
Step 2. 
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
Step 1. Clone the repository to your local machine.
Step 2. Launch VSCode
Step 3. Open folder --> Select folder the clone repository resides in
Step 4. Terminal --> New Terminal
	*NOTE* if a command prompt appears continue to Step 4a. else continue to Step 5.
Step 4a. Click the down arrow next to the + button in the lower right
Step 4b. Select Git Bash
Step 5. Enter the following commands, pressing the return key after each one:
	cd Cinema
	cd backend
	npm i
	cd ../
	cd qac
	npm i
```

## Running the tests

To run the backend automated unit and integration tests with Mocha and Chai

```
Step 1. Have the project open in VSCode
Step 2. Terminal --> New Terminal
	*NOTE* if a command prompt appears continue to Step 3a. else continue to Step 4.
Step 3a. Click the down arrow next to the + button in the lower right
Step 3b. Select Git Bash
Step 4. Enter the following command followed by the return key:
	cd Cinema
	cd backend
	npm run coverage
```

To run the frontend automated testing with Jest

```
Step 1. Have the project open in VSCode
Step 2. Terminal --> New Terminal
	*NOTE* if a command prompt appears continue to Step 3a. else continue to Step 4.
Step 3a. Click the down arrow next to the + button in the lower right
Step 3b. Select Git Bash
Step 4. Enter the following command followed by the return key:
	cd Cinema
	cd qac
	npm run test
```

### Mocha and Chai

Example of Mocha and Chai test

```html
describe('/server Testing the payment requests...', () => {

    it('should be able to send a payment to stripe', (done) => {

        const orderTotal = 1313;
        const paymentIntent = stripe.paymentIntents.create({
            amount: orderTotal,
            currency: "gbp"
        });
        chai
            .request(server)
            .post("/create-payment-intent")
            .send({ clientSecret: paymentIntent.client_secret})
            .end((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body);
                    res.should.have.status(200);
                }
            });
            done();
    });
});
```

### Jest

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

```
Step 1. Have the project open in VSCode
Step 2. Terminal --> New Terminal
	*NOTE* if a command prompt appears continue to Step 3a. else continue to Step 4.
Step 3a. Click the down arrow next to the + button in the lower right
Step 3b. Select Git Bash
Step 4. Enter the following command followed by the return key:
	npm start
Step 5. Open file explorer and navigate to the folder containing the cloned repository
Step 6. Double-click runme.bat
Step 7. In Git bash window that appeared enter the following commands, pressing the return key after each one:
	cd Cinema
	cd backend
	npm run start-dev
Step 8. Open a new Git bash window in the same folder as the runme.bat
Step 9. Enter the following commands, pressing the return key after each one:
	cd Cinema
	cd backend
	nodemon server.js
Step 10. Open postman
Step 11. File --> New Tab
Step 12. Click GET and change it to POST
Step 13. Where it says "Enter request URL" enter the following urls one at a time clicking the blue SEND button after each one:
	http://5000/setup/initialreleases1
	http://5000/setup/initialreleases2
	http://5000/setup/initialreleases3
	http://5000/setup/initialreleases4
	http://5000/createjam
	http://5000/create007
	http://5000/createspiderman
	http://5000/createcandyman
```

## Built With

* [MongoDB](https://www.mongodb.com/) - Document Database
* [Express](https://expressjs.com/) - Back-End Framework
* [React](https://reactjs.org/) - Front-End Library
* [Node](https://nodejs.org/) - JS Runtime Environment
* [Mocha](https://mochajs.org/) - Backend Testing
* [Chai](https://www.chaijs.com/) - Backend Testing
* [Jest](https://jestjs.io/) - Frontend Testing

## Versioning

* [Git](http://github.com/) was used for versioning.

## Authors

* **Jordan Lewis** - [JLLQA](https://github.com/JLLQA)
* **Mark Gasmido** - [markgasmidoQA](https://github.com/markgasmidoQA)
* **Philip Ugona** - [PUgonaQA](https://github.com/PUgonaQA)
* **Ryan Glennerster** - [RyanGlennersterQA](https://github.com/RyanGlennersterQA)
* **Mohamed Sajath Raffeek** - [sajathraffeekQA](https://github.com/sajathraffeekQA)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
