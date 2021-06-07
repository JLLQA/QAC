import { useState } from 'react';
import { Container } from 'reactstrap';
import { Link } from "react-router-dom";
import { addDays } from 'date-fns';
import { useHistory } from 'react-router'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookingDetails = () => {

    const placeholder = [
        { id: 0, title: "testtitle", showtimes: ["Please select a film"] },
        {
            id: 1, title: "testtitle", showtimes: [
                "10:00 Screen 1",
                "12:00 Screen 1",
                "12:30 Screen 3",
                "14:00 Screen 1",
                "16:00 Screen 1",
                "16:30 Screen 3",
                "18:00 Screen 1",
                "20:00 Screen 1",
                "20:30 Screen 3",
                "22:00 Screen 1"]
        },
        {
            id: 2, title: "testtitle2", showtimes: [
                "10:15 Screen 2",
                "11:30 Screen 3",
                "12:15 Screen 2",
                "14:15 Screen 2",
                "15:30 Screen 3",
                "16:15 Screen 2",
                "18:15 Screen 2",
                "19:30 Screen 3",
                "20:15 Screen 2",
                "22:15 Screen 2"]
        }
    ];

    const [film, setMovie] = useState("");
    const [filmTime, setFilmTime] = useState(0);
    const [selectedTime, setTime] = useState("");
    const [newBookerName, setBookerName] = useState("");
    const [filmDate, setStartDate] = useState(null);
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);

    const setAdultUp = (event) => {
        event.preventDefault();
        setCountA(countA => countA + 1);
    }

    const setAdultDown = (event) => {
        event.preventDefault();
        if (countA == 0) {
            alert("You cannot have less than 0 seats");
        } else {
            setCountA(countA => countA - 1);

        }
    }

    const setChildUp = (event) => {
        event.preventDefault();
        setCountB(countB => countB + 1)
    }

    const setChildDown = (event) => {
        event.preventDefault();
        if (countB == 0) {
            alert("You cannot have less than 0 seats");
        } else {
            setCountB(countB => countB - 1)
        }
    }

    const setComUp = (event) => {
        event.preventDefault();
        setCountC(countC => countC + 1)
    }

    const setComDown = (event) => {
        event.preventDefault();
        if (countC == 0) {
            alert("You cannot have less than 0 seats");
        } else {
            setCountC(countC => countC - 1)
        }
    }

    const bookerName = ({ target }) => {
        setBookerName(target.value)
    }

    const setFilm = (event) => {
        event.preventDefault();
        setMovie(event.target.value);
        setFilmTime(event.target.value);
    }

    const setNewTime = (event) => {
        event.preventDefault();
        setTime(event.target.value);
    }

    const submitForm = (event) => {
        let mov;
        event.preventDefault();
        if (typeof (film) == "undefined") {
            alert('please pick a movie');
            return
        } else if (filmDate == null) {
            alert('please pick a date');
            return
        }
        else if (selectedTime == "") {
            alert('please pick a time and screen');
            return
        } else if (newBookerName == "") {
            alert('please enter the ticket bookers name');
            return
        } else {
            mov = film;
            console.log("movie id: " + mov);
            console.log("Film date: " + filmDate);
            console.log("Film time : " + selectedTime);
            console.log("Adult seats: " + countA);
            console.log("Child seats: " + countB);
            console.log("Consession seats: " + countC);
            console.log("Booker Name: "+ newBookerName);
        }

        history.push({
            pathname: "/payment"
        })
    }

    const history = useHistory();

    return (
        <div id="dropped-box" className="container-fluid">
            <Container>
                <h1>BOOKINGS</h1>
                <br />
                <Container >
                    <form align="center" onSubmit={submitForm}>
                        <Container id="filmSelect">
                            <select value={film} onChange={setFilm}>
                                <option disabled value="">-- Select a Film --</option>
                                <option value={placeholder[1].id}>{placeholder[1].title}</option>
                                <option value={placeholder[2].id}>{placeholder[2].title}</option>
                            </select>
                        </Container>
                        <br />
                        <DatePicker
                            selected={filmDate}
                            onChange={(date) => setStartDate(date)}
                            includeDates={[new Date(),
                            addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 3), addDays(new Date(), 4),
                            addDays(new Date(), 5), addDays(new Date(), 6), addDays(new Date(), 7), addDays(new Date(), 8),
                            addDays(new Date(), 9), addDays(new Date(), 10), addDays(new Date(), 11), addDays(new Date(), 12),
                            addDays(new Date(), 13)]}
                            placeholderText="Please select a date"
                        />
                        <br />
                        <br />
                        <Container id="timeSelect">
                            <select value={selectedTime} onChange={setNewTime}>
                                <option value="">-- Select a Time and Screen --</option>
                                {placeholder[filmTime].showtimes.map((many, i) => (
                                    <option key={i}>{placeholder[filmTime].showtimes[i]}</option>
                                ))}
                            </select>
                            <Link to={{ pathname: `/screens` }} target="_blank">
                                <button id="screenButton" type="button" >
                                    Please click for sceen info     </button>
                            </Link>
                        </Container>
                        <Container>
                            <br />
                            <label>Adult Seats: </label>
                            <input placeholder={countA} disabled></input>
                            <button id="neg" onClick={setAdultDown}>
                                -
                            </button>
                            <button id="pos" onClick={setAdultUp}>
                                +
                            </button>
                            <br />
                            <label>Child Seats: </label>
                            <input placeholder={countB} disabled></input>
                            <button id="neg" onClick={setChildDown}>
                                -
                            </button>
                            <button id="pos" onClick={setChildUp}>
                                +
                            </button>
                            <br />
                            <label>Consession Seats: </label>
                            <input placeholder={countC} disabled></input>
                            <button id="neg" onClick={setComDown}>
                                -
                            </button>
                            <button id="pos" onClick={setComUp}>
                                +
                            </button>
                        </Container>
                        <br />
                        <Container>
                            <input placeholder="Please enter your name here:" type="text" onChange={bookerName}></input>
                        </Container>
                        <br />
                        <Link to={{ pathname: `/payment` }} target="_blank">
                            <button type="submit" >Submit and Pay</button>
                        </Link>
                    </form>
                </Container>
            </Container>
        </div>
    );
};

export default BookingDetails;