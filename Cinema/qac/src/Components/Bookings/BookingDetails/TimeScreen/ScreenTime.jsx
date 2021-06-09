import { Container } from 'reactstrap';

const ScreenTime = ({ data, selectedTime, setNewTime, filmTime, filmDayNum }) => {

    console.log(filmDayNum);

    if (filmTime == 0 || filmDayNum == null ) {
        return (
            <Container>
                <select id="Booking" value={selectedTime} onChange={setNewTime}>
                    <option disabled value="">-- Select a Time and Screen --</option>
                </select>
                <br />
            </Container>
        )
    } else {
        return (
            <Container id="timeSelect">
                <select id="Booking" value={selectedTime} onChange={setNewTime}>
                    <option value="">-- Select a Time and Screen --</option>
                    {data[filmTime].showtimes[filmDayNum].times.map((many, i) => (
                        <option key={i}>{many.time} - {many.screen}</option>
                    ))}
                </select>
                <br />
            </Container>)
    };
};

export default ScreenTime;