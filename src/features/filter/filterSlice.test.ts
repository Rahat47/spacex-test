import reducer, {
    setSearchValue,
    setLaunchDate,
    setLaunchSuccess,
    setUpcoming,
    setLoading,
    LaunchDate,
    // useFilter,
} from './filterSlice';

test('should return the initial state', () => {
    expect(reducer(undefined, setLoading(false))).toEqual({
        searchValue: '',
        launchDate: 0,
        launchSuccess: null,
        upcoming: false,
        loading: false,
    });
});

test('should set the search value', () => {
    expect(reducer(undefined, setSearchValue('test'))).toEqual({
        searchValue: 'test',
        launchDate: 0,
        launchSuccess: null,
        upcoming: false,
        loading: false,
    });
});

test('should set the launch date', () => {
    expect(reducer(undefined, setLaunchDate(LaunchDate['Last week']))).toEqual({
        searchValue: '',
        launchDate: LaunchDate['Last week'],
        launchSuccess: null,
        upcoming: false,
        loading: false,
    });
});

test('should set the Launch Success to Successful', () => {
    expect(reducer(undefined, setLaunchSuccess('successful'))).toEqual({
        searchValue: '',
        launchDate: 0,
        launchSuccess: 'successful',
        upcoming: false,
        loading: false,
    });
});

test('should set the upcoming to true', () => {
    expect(reducer(undefined, setUpcoming(true))).toEqual({
        searchValue: '',
        launchDate: 0,
        launchSuccess: null,
        upcoming: true,
        loading: false,
    });
});

// test('function should return the filter state', () => {
//     const state = {
//         searchValue: '',
//         launchDate: 0,
//         launchSuccess: null,
//         upcoming: false,
//         loading: false,
//     };
//     expect(useFilter()).toEqual(state);
// });
