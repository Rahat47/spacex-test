import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '../../app/hooks';

export enum LaunchDate {
    'Last week' = 1,
    'Last month' = 2,
    'Last year' = 3,
}

interface FilterSclice {
    searchValue: string;
    launchDate: LaunchDate;
    launchSuccess: string | null;
    upcoming: boolean;
    loading: boolean;
}

const initialState: FilterSclice = {
    searchValue: '',
    launchDate: 0,
    launchSuccess: null,
    upcoming: false,
    loading: false,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setLaunchDate: (state, action: PayloadAction<LaunchDate>) => {
            state.launchDate = action.payload;
        },
        setLaunchSuccess: (state, action: PayloadAction<string>) => {
            state.launchSuccess = action.payload;
        },
        setUpcoming: (state, action: PayloadAction<boolean>) => {
            state.upcoming = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const {
    setSearchValue,
    setLaunchDate,
    setLaunchSuccess,
    setUpcoming,
    setLoading,
} = filterSlice.actions;

export const useFilter = () => useAppSelector(state => state.filter);

export default filterSlice.reducer;
