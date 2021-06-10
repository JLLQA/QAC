import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import RatingU from '../../../../src/Components/Classification/Classifications/RatingU';

test('suitable for text is present', () => {
    render(<RatingU/>);
    const textElement = screen.getByText("U Universal - Suitable for all");
    expect(textElement).toBeInTheDocument();
})