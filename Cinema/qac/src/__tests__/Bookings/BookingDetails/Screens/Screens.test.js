import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Screens from '../../../../Components/Bookings/BookingDetails/Screens/Screens';

test('Screen text is present', () => {
    render(<Screens />);
    const screenText = screen.getByText("Screens");
    expect(screenText).toBeInTheDocument();
});

test("It matches the snapshot", () => {
    const tree = renderer.create(<Screens />).toJSON();
    expect(tree).toMatchSnapshot();
})