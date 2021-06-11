import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Bookings from '../../Components/Bookings/Bookings';
import axios from 'axios';

test('bookings text is present', async () => {
    render(<Bookings />);
    await axios({
        method: "Get",
        url: "http://localhost:5000/movies",
        headers: { "Access-Control-Allow-Origin": "*" }
    });
    const bookingText = screen.getByText("BOOKINGS");
    expect(bookingText).toBeInTheDocument();
});

test('bookings loading text is present', () => {
    render(<Bookings />);
    const linkElement = screen.getByText("Loading...");
    expect(linkElement).toBeInTheDocument();
});

test("It matches the snapshot", () => {
    const tree = renderer.create(<Bookings />).toJSON();
    expect(tree).toMatchSnapshot();
})