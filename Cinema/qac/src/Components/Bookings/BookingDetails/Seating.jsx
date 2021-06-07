import { useState } from 'react';

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

    return (
        <>
            <br />
            <label>Adult Seats: </label>
            <input placeholder={countA} disabled></input>
            <button onClick={setAdultDown}>
                ""-""
            </button>
            <button onClick={setAdultUp}>
                ""+""
            </button>
            <br />
            <label>Child Seats: </label>
            <input placeholder={countB} disabled></input>
            <button onClick={setChildDown}>
                ""-""
            </button>
            <button onClick={setChildUp}>
                ""+""
            </button>
            <br />
            <label>Consession Seats: </label>
            <input placeholder={countC} disabled></input>
            <button onClick={setComDown}>
                ""-""
            </button>
            <button onClick={setComUp}>
                ""+""
            </button>
        </>
    );
}

export default Seating;