import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Notfound from '../../Components/NotFound/NotFound';
import renderer from 'react-test-renderer';

describe('Test for 404 page', () => {
test('Check the 404 heading is present', () => {
    render(<Notfound />);
    const linkElement = screen.getByText("~~404~~");
    expect(linkElement).toBeInTheDocument();
});

test('Check the body text to be present', () => {
    render(<Notfound />);
    const linkElement = screen.getByText("You silly goose");
    expect(linkElement).toBeInTheDocument();
});

test("It matches the snapshot", () => {
    const tree = renderer.create(<Notfound />).toJSON();
    expect(tree).toMatchSnapshot();
});
})