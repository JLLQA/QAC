import { Container } from 'reactstrap';

const ScreenTime = ({ data, selectedTime, setNewTime, filmTime, filmDayNum }) => {

    if (filmTime === 0 || filmDayNum === null) {
        return (
            <Container>
                <select id="Booking" value={selectedTime} onChange={(e) => setNewTime}>
                    <option disabled value="">-- Select a Time and Screen --</option>
                </select>
                <br />
            </Container>
        )
    } else {
        return (
            <Container id="timeSelect">
                <select id="Booking" value={selectedTime} onChange={(e) => setNewTime(e)}>
                    <option disabled value="">-- Select a Time and Screen --</option>
                    {data[filmTime].showtimes[filmDayNum].times.map((many, i) => (
                        <option key={i} value={many.time + " & " + many.screen}>{many.time} - {many.screen}</option>
                    ))}
                </select>
                <br />
            </Container>)
    };
};

export default ScreenTime;