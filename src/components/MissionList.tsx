import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { useAppSelector } from '../app/hooks';
import { Mission } from '../types';
import ErrorResult from './ErrorResult';

import MissionCard from './MissionCard';
import SkeletonList from './SkeletonList';

function MissionList({ items }: { items: Mission[] }) {
    const { loading } = useAppSelector(state => state.mission);

    return (
        <Container maxW='8xl'>
            <Heading
                textAlign='center'
                fontSize='4xl'
                py={10}
                fontWeight='bold'
            >
                All Missions 🚀
            </Heading>

            {!items.length && loading && <SkeletonList />}
            {!items.length && !loading && <ErrorResult />}

            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 3,
                }}
                gap='4'
            >
                {items.map(mission => (
                    <MissionCard key={mission.mission_name} mission={mission} />
                ))}
            </SimpleGrid>
        </Container>
    );
}

export default MissionList;
