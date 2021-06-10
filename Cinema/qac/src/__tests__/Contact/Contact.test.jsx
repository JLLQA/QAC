import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Contact from '../../Components/Contact/Contact';

describe('test for contact page', () => {

    test('CONTACT heading text is present', () => {
        render(<Contact />);
        const linkElement = screen.getByText("CONTACT");
        expect(linkElement).toBeInTheDocument();
    });
});