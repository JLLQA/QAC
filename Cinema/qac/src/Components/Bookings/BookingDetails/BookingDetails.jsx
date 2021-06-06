import { Container } from 'reactstrap';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import Seating from './Seating';
import { Link } from "react-router-dom"

import "react-datepicker/dist/react-datepicker.css";

const BookingDetails = () => {

    const placeholder = [
        { id: 0, title: "testtitle", showtimes: ["10:00", "12:00"] },
        { id: 1, title: "testtitle2", showtimes: ["11:00", "13:00"] }
    ];

    const [value, setState] = useState("");
    const [newBookerName, setBookerName] = useState("");
    const [filmDate, setStartDate] = useState(null);

    const bookerName = ({ target }) => {
        setBookerName(target.value)
    }

    const setFilm = (event) => {
        event.preventDefault();
        setState({ value: event.target.value });
    }

    const submitForm = (event) => {
        let movID;
        let mov;
        event.preventDefault();
        if (typeof (value.value) == "undefined") {
            alert('please pick a movie');
        } else {
            mov = value.value;
            console.log("movie id: " + mov);
            movID = Number(mov);
            console.log("Film time 1: " + placeholder[movID].showtimes[0]);
            console.log("Film time 2: " + placeholder[movID].showtimes[1]);
            console.log("Adult seats: ");
            console.log("Child seats: ");
            console.log("Consession seats: ");
            console.log(newBookerName);
            console.log(filmDate);
        }
    }

    return (
        <div id="dropped-box" className="container-fluid">
            <Container>
                <h1>Bookings</h1>
                <br />
                <Container >
                    <form align="center" onSubmit={submitForm}>
                        <select value={value} onChange={setFilm}>
                            <option disabled value="">-- Select a Film --</option>
                            <option value={placeholder[0].id}>{placeholder[0].title}</option>
                            <option value={placeholder[1].id}>{placeholder[1].title}</option>
                        </select>
                        <br />
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
                        <input placeholder="Please select a time and screen:" type="text"></input>
                        <Link to={{ pathname: `/screens` }} target="_blank">
                            <button id="screenButton" type="button" >
                                Please click for sceen info     </button>
                        </Link>
                        <br />
                        <Seating />
                        <br />
                        <br />
                        <input placeholder="Please enter your name here:" type="text" onChange={bookerName}></input>
                        <br />
                        <br />
                        <button type="submit" >Submit and Pay</button>
                    </form>
                </Container>
            </Container>
        </div>
    );
};

export default BookingDetails;