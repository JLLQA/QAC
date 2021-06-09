import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Rating12 from '../../../../src/Components/Classification/Classifications/Rating12';

test('suitable for text is present', () => {
    render(<Rating12/>);
    const textElement = screen.getByText("12 – Suitable for 12 years and over");
    expect(textElement).toBeInTheDocument();
})