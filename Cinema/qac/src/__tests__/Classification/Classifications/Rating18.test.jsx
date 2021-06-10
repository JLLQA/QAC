import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Rating18 from '../../../../src/Components/Classification/Classifications/Rating18';

test('suitable for 15 Rated Film', () => {
    render(<Rating18/>);
    const textElement = screen.getByText("18 – Suitable only for adults");
    expect(textElement).toBeInTheDocument();
})