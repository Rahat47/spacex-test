import {
    Box,
    Button,
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
import { useAppSelector } from '../app/hooks';

function MissionHeader() {
    const { data } = useAppSelector(state => state.mission);
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box p='8' bg='whatsapp.200' rounded='md'>
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
                            1-12 of {data?.length} Missions
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
                            colorScheme='whatsapp'
                        >
                            <InputRightElement color='gray.400'>
                                <FiSearch />
                            </InputRightElement>
                            <Input
                                bg={mode('white', 'gray.800')}
                                placeholder='Search for a mission'
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
        </Box>
    );
}

export default MissionHeader;
