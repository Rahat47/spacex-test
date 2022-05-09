import {
    Box,
    Button,
    Divider,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useColorMode,
    useColorModeValue as mode,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Filters from './Filters';
import { setSearchValue } from '../features/filter/filterSlice';

function MissionHeader({ offset }: { offset: [number, number] }) {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(state => state.mission);
    const { searchValue } = useAppSelector(state => state.filter);
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box p='8' bg={mode('twitter.400', 'gray.700')} rounded='md'>
            <Box maxW='7xl' mx='auto'>
                <Stack
                    spacing='5'
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}
                    justify='space-between'
                    align={{
                        base: 'flex-start',
                        md: 'center',
                    }}
                >
                    <Stack>
                        <Heading size='lg'>Missions</Heading>
                        <Text
                            color={mode('gray.600', 'gray.400')}
                            fontSize='sm'
                        >
                            {`${offset[0] + 1}-${offset[1]}`} of {data?.length}{' '}
                            Missions
                        </Text>
                    </Stack>

                    <HStack
                        justify='flex-end'
                        flex='1'
                        w={{
                            base: 'full',
                            md: 'auto',
                        }}
                        spacing={{
                            base: '2',
                            md: '4',
                        }}
                    >
                        <InputGroup
                            maxW={{
                                md: '80',
                            }}
                            w='full'
                        >
                            <InputRightElement>
                                <FiSearch />
                            </InputRightElement>
                            <Input
                                placeholder='Search by Rocket Name'
                                _placeholder={{
                                    color: mode('gray.600', 'gray.400'),
                                }}
                                value={searchValue}
                                onChange={e =>
                                    dispatch(setSearchValue(e.target.value))
                                }
                            />
                        </InputGroup>

                        <Button
                            aria-label='Toggle Color Mode'
                            onClick={toggleColorMode}
                            _focus={{ boxShadow: 'none' }}
                            w='fit-content'
                        >
                            {colorMode === 'light' ? (
                                <BsMoonStarsFill />
                            ) : (
                                <BsSun />
                            )}
                        </Button>
                    </HStack>
                </Stack>
            </Box>
            <Divider my={4} />
            <Box mt={4}>
                <Heading my={4} size='lg' textAlign='center'>
                    Filter Missions by:
                </Heading>
                <Filters />
            </Box>
        </Box>
    );
}

export default MissionHeader;
