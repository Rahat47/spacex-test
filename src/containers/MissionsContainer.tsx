import { useState } from 'react';
import MissionHeader from '../components/MissionHeader';
import MissionList from '../components/MissionList';
import Paginator from '../components/Paginator';
import { Mission } from '../types';

function MissionsContainer() {
    const [items, setItems] = useState<Mission[]>([]);
    const [offset, setOffset] = useState<[number, number]>([0, 9]);

    return (
        <>
            <MissionHeader offset={offset} />
            <MissionList items={items} />
            <Paginator setItems={setItems} setOffset={setOffset} />
        </>
    );
}

export default MissionsContainer;
