import { useState } from 'react';
import MissionHeader from '../components/MissionHeader';
import MissionList from '../components/MissionList';
import Paginator from '../components/Paginator';
import { Mission } from '../types';

function MissionsContainer() {
    const [items, setItems] = useState<Mission[]>([]);

    return (
        <>
            <MissionHeader />
            <MissionList items={items} />
            <Paginator setItems={setItems} />
        </>
    );
}

export default MissionsContainer;
