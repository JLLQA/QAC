import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewReleases from '../../Components/NewReleases/NewReleases';
import renderer from 'react-test-renderer';




describe('Test for NewReleases page', () => {

    test('Check the NewRelease loading text is present', () => {
        render(<NewReleases />);
        const linkElement = screen.getByText("Loading...");
        expect(linkElement).toBeInTheDocument();
    });

    test("It matches the snapshot", () => {
        const tree = renderer.create(<NewReleases />).toJSON();
        expect(tree).toMatchSnapshot();
    });



})