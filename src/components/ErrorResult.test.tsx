import { render, screen } from '../utils/test-utils';
import ErrorResult from './ErrorResult';

describe('ErrorResult', () => {
    it('renders correctly', () => {
        render(<ErrorResult />);
        expect(screen.getByText('No Results Found')).toBeInTheDocument();
    });
});
