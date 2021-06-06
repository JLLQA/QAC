import { useState } from 'react';
import { Container } from 'reactstrap';

const BookingDetails = () => {

    const placeholder = [
        { id: 0, title: "testtitle", showtimes: ["10:00", "12:00"] },
        { id: 1, title: "testtitle2", showtimes: ["11:00", "13:00"] }
    ];

    const [value, setState] = useState("");

    const favFilm = (event) => {
        setState({ value: event.target.value });
    }

    const submitForm = (event) => {
        let movID;
        let mov;
        event.preventDefault();
        mov = value.value;
        console.log("movie id: " + mov);
        movID = Number(mov);
        console.log("Film time 1: " + placeholder[movID].showtimes[0]);
        console.log("Film time 2: " + placeholder[movID].showtimes[1]);
    }

    return (
        <div id="dropped-box" className="container-fluid">
            <Container>
                <h1>Bookings</h1>
                <Container>
                    <form onSubmit={submitForm}>
                        <select value={value} onChange={favFilm}>
                            <option disabled value="">-- Select a Film --</option>
                            <option value={placeholder[0].id}>{placeholder[0].title}</option>
                            <option value={placeholder[1].id}>{placeholder[1].title}</option>
                        </select>
                        {/* <select value={value} onChange={filmTime}>
                            <option disabled value="">-- Select a Time --</option>
                            <option value={placeholder[movID].showtimes[0]}>{placeholder[movID].showtimes[0]}</option>
                            <option value={placeholder[movID].showtimes[1]}>{placeholder[movID].showtimes[0]}</option>
                        </select> */}
                        <input type="submit" value="Submit" />
                    </form>
                </Container>
            </Container>
        </div>
    );
};

export default BookingDetails;