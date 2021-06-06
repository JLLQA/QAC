import { useState} from 'react';

const Seating = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);

    const setAdultUp = (event) => {
        event.preventDefault();
        setCountA(countA => countA + 1);
    }

    const setAdultDown = (event) => {
        event.preventDefault();
        setCountA(countA => countA - 1);
    }

    const setChildUp = (event) => {
        event.preventDefault();
        setCountB(countB => countB + 1)
    }

    const setChildDown = (event) => {
        event.preventDefault();
        setCountB(countB => countB - 1)
    }

    const setComUp = (event) => {
        event.preventDefault();
        setCountC(countC => countC + 1)
    }

    const setComDown = (event) => {
        event.preventDefault();
        setCountC(countC => countC - 1)
    }

    return (
        <>
            <br />
            <label>Adult Seats: </label>
            <input placeholder={countA} disabled></input>
            <button onClick={setAdultUp}>
                ""+""
            </button>
            <button onClick={setAdultDown}>
                ""-""
            </button>
            <br />
            <label>Child Seats: </label>
            <input placeholder={countB} disabled></input>
            <button onClick={setChildUp}>
                ""+""
            </button>
            <button onClick={setChildDown}>
                ""-""
            </button>
            <br />
            <label>Consession Seats: </label>
            <input placeholder={countC} disabled></input>
            <button onClick={setComUp}>
                ""+""
            </button>
            <button onClick={setComDown}>
                ""-""
            </button>            
        </>
    );
}

export default Seating;