import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Classification from '../../Components/Classification/Classification';

test('heading text is present', () => {
    render(<Classification/>);
    const textElement = screen.getByText("CLASSIFICATION");
    expect(textElement).toBeInTheDocument();
})