import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Rating15 from '../../../../src/Components/Classification/Classifications/Rating15';

test('suitable for 15 Rated Film', () => {
    render(<Rating15/>);
    const textElement = screen.getByText("15 – Suitable only for 15 years and over");
    expect(textElement).toBeInTheDocument();
})