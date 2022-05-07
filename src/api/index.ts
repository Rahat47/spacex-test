import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Mission } from '../types';

export const fetchMissions = createAsyncThunk(
    'mission/fetchMissions',
    async () => {
        const response = await axios.get<Mission[]>(
            'https://api.spacexdata.com/v3/launches'
        );
        return response.data;
    }
);
