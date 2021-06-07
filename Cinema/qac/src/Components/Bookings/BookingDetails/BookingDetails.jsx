import { useState } from 'react';
import { Container } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import { addDays } from 'date-fns';
import DatePicker from "react-datepicker";
import Seating from './Seating';


import "react-datepicker/dist/react-datepicker.css";

const BookingDetails = () => {

    const placeholder = [
        { id: 0, title: "testtitle", showtimes: ["Please select a film", "Please select a film", "Please select a film", "Please select a film", "Please select a film", "Please select a film", "Please select a film", "Please select a film", "Please select a film", "Please select a film"] },
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
        { id: 2, title: "testtitle2", showtimes: [
            "10:15 Screen 2",
            "11:30 Screen 3",
            "12:15 Screen 2",
            "14:15 Screen 2",
            "15:30 Screen 3",
            "16:15 Screen 2",
            "18:15 Screen 2",
            "19:30 Screen 3",
            "20:15 Screen 2",
            "22:15 Screen 2"] }
    ];

    const [film, setMovie] = useState("");
    const [filmTime, setFilmTime] = useState(0);
    const [selectedTime, setTime] = useState(0);
    const [newBookerName, setBookerName] = useState("");
    const [filmDate, setStartDate] = useState(null);

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
        } else if (newBookerName == "") {
            alert('please enter the ticket bookers name');
            return
        } else {
            mov = film;
            console.log("movie id: " + mov);
            console.log("Film date: " + filmDate);
            console.log("Film time : " + selectedTime);
            console.log("Adult seats: ");
            console.log("Child seats: ");
            console.log("Consession seats: ");
            console.log(newBookerName);
        }

        // history.push('/payment')
    }

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
                                <option value={placeholder[filmTime].showtimes[0]}>{placeholder[filmTime].showtimes[0]}</option>
                                <option value={placeholder[filmTime].showtimes[1]}>{placeholder[filmTime].showtimes[1]}</option>
                                <option value={placeholder[filmTime].showtimes[2]}>{placeholder[filmTime].showtimes[2]}</option>
                                <option value={placeholder[filmTime].showtimes[3]}>{placeholder[filmTime].showtimes[3]}</option>
                                <option value={placeholder[filmTime].showtimes[4]}>{placeholder[filmTime].showtimes[4]}</option>
                                <option value={placeholder[filmTime].showtimes[5]}>{placeholder[filmTime].showtimes[5]}</option>
                                <option value={placeholder[filmTime].showtimes[6]}>{placeholder[filmTime].showtimes[6]}</option>
                                <option value={placeholder[filmTime].showtimes[7]}>{placeholder[filmTime].showtimes[7]}</option>
                                <option value={placeholder[filmTime].showtimes[8]}>{placeholder[filmTime].showtimes[8]}</option>
                                <option value={placeholder[filmTime].showtimes[9]}>{placeholder[filmTime].showtimes[9]}</option>
                            </select>
                            <Link to={{ pathname: `/screens` }} target="_blank">
                                <button id="screenButton" type="button" >
                                    Please click for sceen info     </button>
                            </Link>
                        </Container>
                        <Seating />
                        <br />
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