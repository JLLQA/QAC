import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import RatingPG from '../../../../src/Components/Classification/Classifications/RatingPG';

test('suitable for text is present', () => {
    render(<RatingPG/>);
    const textElement = screen.getByText("PG Parental Guidance");
    expect(textElement).toBeInTheDocument();
})