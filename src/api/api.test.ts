import { configureStore } from '@reduxjs/toolkit';
import missionReducer from '../features/mission/missionSlice';
import fetchMissions from '.';
// import { Mission } from "../types";

beforeEach(() => {
    jest.clearAllMocks();
});
jest.setTimeout(10000);

describe('fetchMissions', () => {
    it('should create an async thunk', () => {
        const thunk = fetchMissions();
        expect(thunk).toBeInstanceOf(Function);
    });

    it('creates the action types', () => {
        const thunk = fetchMissions;
        expect(thunk.fulfilled.type).toBe('mission/fetchMissions/fulfilled');
        expect(thunk.rejected.type).toBe('mission/fetchMissions/rejected');
        expect(thunk.pending.type).toBe('mission/fetchMissions/pending');
    });

    it('exposes the typePrefix it was created with', () => {
        const thunk = fetchMissions;
        expect(thunk.typePrefix).toBe('mission/fetchMissions');
    });

    it('fetches the missions', () => {
        const store = configureStore({
            reducer: {
                mission: missionReducer,
            },
        });
        const thunk = fetchMissions();
        store.dispatch(thunk);
        expect(store.getState().mission.data).toBeNull();
    });

    it('fetches the missions and updates store value', async () => {
        const store = configureStore({
            reducer: {
                mission: missionReducer,
            },
        });
        const thunk = fetchMissions();
        await store.dispatch(thunk);
        expect(store.getState().mission.data).toBeDefined();
    });
});
