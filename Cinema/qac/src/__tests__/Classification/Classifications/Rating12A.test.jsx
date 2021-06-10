import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Rating12A from '../../../../src/Components/Classification/Classifications/Rating12A';

test('suitable for 12A Rated Film', () => {
    render(<Rating12A/>);
    const textElement = screen.getByText("12A – Suitable for 12 years and over");
    expect(textElement).toBeInTheDocument();
})