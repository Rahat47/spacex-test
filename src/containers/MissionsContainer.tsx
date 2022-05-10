import { useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import MissionHeader from '../components/MissionHeader';
import MissionList from '../components/MissionList';
import Paginator from '../components/Paginator';
import { Mission } from '../types';
import { setMissions } from '../features/mission/missionSlice';
import { LaunchDate, setLoading } from '../features/filter/filterSlice';

function MissionsContainer() {
    const dispatch = useAppDispatch();
    const [items, setItems] = useState<Mission[]>([]);
    const [offset, setOffset] = useState<[number, number]>([0, 9]);
    const { searchValue, launchDate, launchSuccess, upcoming } = useAppSelector(
        state => state.filter
    );
    const { rawData } = useAppSelector(state => state.mission);

    const serchByRockerName = useCallback(
        (mission: Mission) =>
            mission.rocket.rocket_name
                .toLowerCase()
                .includes(searchValue.toLowerCase()),
        [searchValue]
    );

    const filterByDate = useCallback(
        (mission: Mission) => {
            if (launchDate === LaunchDate['Last week']) {
                const missionlaunchDate = dayjs(mission.launch_date_utc);
                const today = dayjs();
                const lastWeek = today.subtract(7, 'day');
                return missionlaunchDate.isAfter(lastWeek);
            }
            if (launchDate === LaunchDate['Last month']) {
                const missionlaunchDate = dayjs(mission.launch_date_utc);
                const today = dayjs();
                const lastMonth = today.subtract(30, 'day');
                return missionlaunchDate.isAfter(lastMonth);
            }
            if (launchDate === LaunchDate['Last year']) {
                const missionlaunchDate = dayjs(mission.launch_date_utc);
                const today = dayjs();
                const lastYear = today.subtract(365, 'day');
                return missionlaunchDate.isAfter(lastYear);
            }
            return true;
        },
        [launchDate]
    );

    const filterBySuccess = useCallback(
        (mission: Mission) => {
            if (launchSuccess !== null && launchSuccess !== 'both') {
                if (launchSuccess === 'successful') {
                    return mission.launch_success;
                }
                if (launchSuccess === 'unsuccessful') {
                    return !mission.launch_success;
                }
            }
            return true;
        },
        [launchSuccess]
    );

    const filterByUpcoming = useCallback(
        (mission: Mission) => {
            if (upcoming) {
                return mission.upcoming;
            }
            return true;
        },
        [upcoming]
    );

    const filterData = useCallback(() => {
        if (rawData) {
            dispatch(setLoading(true));
            const filteredData = rawData.filter(
                mission =>
                    serchByRockerName(mission) &&
                    filterByDate(mission) &&
                    filterBySuccess(mission) &&
                    filterByUpcoming(mission)
            );

            dispatch(setMissions(filteredData));
            dispatch(setLoading(false));
        }
    }, [
        dispatch,
        filterByDate,
        filterBySuccess,
        filterByUpcoming,
        rawData,
        serchByRockerName,
    ]);

    useEffect(() => {
        filterData();
    }, [filterData]);

    return (
        <>
            <MissionHeader offset={offset} />
            <MissionList items={items} />
            <Paginator setItems={setItems} setOffset={setOffset} />
        </>
    );
}

export default MissionsContainer;
