import reducer, { setMissions } from './missionSlice';

test('should return the initial state', () => {
    expect(reducer(undefined, setMissions([]))).toEqual({
        data: [],
        loading: false,
        error: null,
        rawData: null,
    });
});
