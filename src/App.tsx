import { useEffect } from 'react';
import { fetchMissions } from './api';
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
    const dispatch = useAppDispatch();
    const { data, error, loading } = useAppSelector(state => state.mission);

    useEffect(() => {
        dispatch(fetchMissions());
    }, [dispatch]);

    return (
        <div className='App'>
            <h1>
                Hello World <br />
                {loading && <span>Loading...</span>}
                {error && <span>Error! {error} </span>}
                {data && <span>{data.length}</span>}
            </h1>
        </div>
    );
}

export default App;
