import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchMissions from '../../api';
import { RootState } from '../../app/store';
import { Mission } from '../../types';

const initialState: {
    loading: boolean;
    error: string | null;
    data: Mission[] | null;
    rawData: Mission[] | null;
} = {
    loading: false,
    error: null,
    data: null,
    rawData: null,
};

export const missionSlice = createSlice({
    name: 'mission',
    initialState,
    reducers: {
        setMissions: (state, action: PayloadAction<Mission[]>) => {
            state.data = action.payload;
        },
    },

    extraReducers: builder => {
        builder.addCase(fetchMissions.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.rawData = action.payload;
            state.error = null;
        });

        builder.addCase(fetchMissions.rejected, state => {
            state.loading = false;
            state.error = 'Failed to fetch missions';
        });

        builder.addCase(fetchMissions.pending, state => {
            state.loading = true;
        });
    },
});

export const { setMissions } = missionSlice.actions;
export const selectMissions = (state: RootState) => state.mission.data;

export default missionSlice.reducer;
