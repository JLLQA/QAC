import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

test('It matches snapshot', () => {
    const tree = renderer.create
    expect(tree).toMatchSnapshot();
})