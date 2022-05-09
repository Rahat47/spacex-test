import { Box, Heading, Stack, Text } from '@chakra-ui/react';

function HeadingComp() {
    return (
        <Stack
            as={Box}
            textAlign='center'
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
        >
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight='110%'
            >
                Welcome to <br />
                <Text as='span' color='green.400'>
                    SpaceX Launch Program
                </Text>
            </Heading>
            <Text>
                From here you can view the latest launches and upcoming
                launches, as well as view the details of a specific launch.
            </Text>
        </Stack>
    );
}

export default HeadingComp;
