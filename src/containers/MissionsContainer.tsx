import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import MissionHeader from '../components/MissionHeader';
import MissionList from '../components/MissionList';
import Paginator from '../components/Paginator';
import { Mission } from '../types';
import { setMissions } from '../features/mission/missionSlice';
import { setLoading } from '../features/filter/filterSlice';

function MissionsContainer() {
    const dispatch = useAppDispatch();
    const [items, setItems] = useState<Mission[]>([]);
    const [offset, setOffset] = useState<[number, number]>([0, 9]);
    const { searchValue, launchDate, launchSuccess, upcoming } = useAppSelector(
        state => state.filter
    );
    const { rawData } = useAppSelector(state => state.mission);

    const serchByRockerName = useCallback(
        (rockerName: string) => {
            if (rawData) {
                if (rockerName) {
                    const filteredData = rawData.filter(mission =>
                        mission.rocket.rocket_name
                            .toLowerCase()
                            .includes(rockerName.toLowerCase())
                    );

                    dispatch(setMissions(filteredData));
                    dispatch(setLoading(false));
                } else {
                    dispatch(setMissions(rawData));
                    dispatch(setLoading(false));
                }
            }
        },
        [dispatch, rawData]
    );

    useEffect(() => {
        serchByRockerName(searchValue);
    }, [searchValue, serchByRockerName]);

    return (
        <>
            <MissionHeader offset={offset} />
            <MissionList items={items} />
            <Paginator setItems={setItems} setOffset={setOffset} />
        </>
    );
}

export default MissionsContainer;
