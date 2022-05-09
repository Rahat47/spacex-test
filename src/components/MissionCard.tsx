import {
    Badge,
    Button,
    ButtonGroup,
    Center,
    Divider,
    Flex,
    Heading,
    IconButton,
    Image,
    List,
    ListIcon,
    ListItem,
    Stack,
    Tag,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { MdOutlinePlace } from 'react-icons/md';
import { VscLinkExternal, VscRocket } from 'react-icons/vsc';
import { FaWikipediaW, FaYoutube } from 'react-icons/fa';

import { Mission } from '../types';

interface MissionCardProps {
    mission: Mission;
}

function MissionCard({ mission }: MissionCardProps) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { links, launch_site, rocket } = mission;

    return (
        <Center py={6} alignItems='stretch'>
            <Stack
                borderWidth='1px'
                borderRadius='lg'
                w={{ sm: '100%', md: '540px' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow='2xl'
                padding={4}
            >
                <Flex flex={1} bg='blue.200'>
                    <Image
                        objectFit='contain'
                        boxSize='100%'
                        src={links.mission_patch}
                        alt={mission.mission_name}
                        rounded='lg'
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection='column'
                    justifyContent='space-between'
                    alignItems='center'
                    p={1}
                    pt={2}
                >
                    <Heading fontSize='2xl' fontFamily='body'>
                        <span>{mission.mission_name}</span>
                        <Badge ml={2} size='lg'>
                            #{mission.flight_number}
                        </Badge>
                    </Heading>
                    <Text fontWeight={600} color='gray.500' size='sm' mb={4}>
                        {dayjs(mission.launch_date_utc).format('MMMM DD, YYYY')}
                    </Text>
                    <Tag
                        size='sm'
                        colorScheme={mission.launch_success ? 'green' : 'red'}
                        variant='solid'
                    >
                        {mission.launch_success ? (
                            <span>Launch Success</span>
                        ) : (
                            <span>Launch Failed</span>
                        )}
                    </Tag>
                    <Text
                        textAlign='center'
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}
                    >
                        {mission.details && mission.details?.length > 150
                            ? `${mission.details?.slice(0, 200)}...`
                            : mission.details}
                    </Text>

                    <Divider />

                    <Stack>
                        <List spacing={3}>
                            <ListItem
                                justifyContent='center'
                                alignItems='center'
                                display='flex'
                            >
                                <ListIcon
                                    as={MdOutlinePlace}
                                    color='yellow.400'
                                />
                                <span>{launch_site.site_name}</span>
                            </ListItem>
                            <ListItem
                                justifyContent='center'
                                alignItems='center'
                                display='flex'
                            >
                                <ListIcon as={VscRocket} color='green.400' />
                                <span>{rocket.rocket_name}</span>
                            </ListItem>
                        </List>
                    </Stack>
                    <Divider />
                    <ButtonGroup size='sm' isAttached variant='outline'>
                        {links.article_link && (
                            <IconButton
                                aria-label='Article Link'
                                icon={<VscLinkExternal />}
                                as='a'
                                href={links.article_link}
                                target='_blank'
                                rel='noopener noreferrer'
                            />
                        )}

                        {links.wikipedia && (
                            <IconButton
                                aria-label='Wikipedia Link'
                                icon={<FaWikipediaW />}
                                as='a'
                                href={links.wikipedia}
                                target='_blank'
                                rel='noopener noreferrer'
                            />
                        )}
                        {links.video_link && (
                            <IconButton
                                aria-label='Youtube Link'
                                icon={<FaYoutube />}
                                as='a'
                                href={links.video_link}
                                target='_blank'
                                rel='noopener noreferrer'
                            />
                        )}
                    </ButtonGroup>
                    <Divider />
                    <Button type='button' variant='ghost'>
                        View Details
                    </Button>
                </Stack>
            </Stack>
        </Center>
    );
}

export default MissionCard;
