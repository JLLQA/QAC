import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Payment from '../../../../Components/Bookings/BookingDetails/Payment/Payment';

// test('payment text is present', async () => {
//     render(
//         <Router>
//             <Payment />
//         </Router>
//     );
//     const paymentText = screen.getByText("PAYMENT");
//     expect(paymentText).toBeInTheDocument();
// });


test("It matches the snapshot", () => {
    const tree = renderer.create(<Payment />).toJSON();
    expect(tree).toMatchSnapshot();
})