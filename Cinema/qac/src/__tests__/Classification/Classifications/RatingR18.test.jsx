import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import RatingR18 from '../../../../src/Components/Classification/Classifications/RatingR18';

test('suitable for text is present', () => {
    render(<RatingR18/>);
    const textElement = screen.getByText("R18 - Adult works for licensed premises only");
    expect(textElement).toBeInTheDocument();
})