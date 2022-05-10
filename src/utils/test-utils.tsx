import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import missionReducer from '../features/mission/missionSlice';
import filterReducer from '../features/filter/filterSlice';

function render(
    ui: React.ReactElement,
    {
        preloadedState,
        store = configureStore({
            reducer: { mission: missionReducer, filter: filterReducer },
            preloadedState,
        }),
        ...renderOptions
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } = {} as any
) {
    function Wrapper({ children }: { children: React.ReactNode }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
