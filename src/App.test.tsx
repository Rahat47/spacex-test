import { unmountComponentAtNode } from 'react-dom';
import App from './App';
import { render, screen, act } from './utils/test-utils';

let container: HTMLElement | null = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    if (container) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

test('App renders without crashing', () => {
    render(<App />, container);
    expect(container).toBeInTheDocument();
});

it('renders the heading', () => {
    act(() => {
        render(<App />, container);
    });
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
        'Welcome to SpaceX Launch Program'
    );
});
