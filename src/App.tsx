import { Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import fetchMissions from './api';
import { useAppDispatch, useAppSelector } from './app/hooks';
import HeadingComp from './containers/Heading';
import MissionsContainer from './containers/MissionsContainer';

function App() {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(state => state.mission);

    useEffect(() => {
        if (!data) {
            dispatch(fetchMissions());
        }
    }, [dispatch, data]);

    return (
        <Container maxW='full'>
            <HeadingComp />
            <MissionsContainer />
        </Container>
    );
}

export default App;
