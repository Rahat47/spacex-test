import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { useAppSelector } from '../app/hooks';
import MissionCard from './MissionCard';

function MissionList() {
    const { data } = useAppSelector(state => state.mission);

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

            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 3,
                }}
                gap='4'
            >
                {data?.slice(0, 10).map(mission => (
                    <MissionCard key={mission.mission_name} mission={mission} />
                ))}
            </SimpleGrid>
        </Container>
    );
}

export default MissionList;
