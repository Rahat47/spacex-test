import {
    FormControl,
    FormLabel,
    HStack,
    Select,
    Switch,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
    LaunchDate,
    setLaunchDate,
    setLaunchSuccess,
    setUpcoming,
} from '../features/filter/filterSlice';

function Filters() {
    const dispatch = useAppDispatch();
    const { launchDate, upcoming } = useAppSelector(state => state.filter);

    return (
        <HStack spacing={8}>
            <FormControl>
                <FormLabel htmlFor='launchDate'>Launch Date</FormLabel>
                <Select
                    id='launchDate'
                    placeholder='Launch Date'
                    value={launchDate}
                    onChange={e => {
                        dispatch(setLaunchDate(Number(e.target.value)));
                    }}
                >
                    <option value={LaunchDate['Last week']}>Last Week</option>
                    <option value={LaunchDate['Last month']}>Last Month</option>
                    <option value={LaunchDate['Last year']}>Last Year</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='launchStatus'>Launch Status</FormLabel>
                <Select
                    id='launchStatus'
                    placeholder='Launch Status'
                    onChange={e => {
                        dispatch(setLaunchSuccess(e.target.value));
                    }}
                >
                    <option value='both'>Both</option>
                    <option value='successful'>Successful</option>
                    <option value='unsuccessful'>Unsuccessful</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='upcoming' mb='0'>
                    Upcoming Launches
                </FormLabel>
                <Switch
                    id='upcoming'
                    isChecked={upcoming}
                    onChange={e => dispatch(setUpcoming(e.target.checked))}
                />
            </FormControl>
        </HStack>
    );
}

export default Filters;
