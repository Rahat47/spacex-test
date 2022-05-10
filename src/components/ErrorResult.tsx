import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function ErrorResult() {
    return (
        <Box
            textAlign='center'
            py={10}
            px={6}
            borderWidth='2px'
            borderRadius='lg'
            borderStyle='dotted'
            transition='all 0.2s ease-in-out'
            _hover={{
                bg: useColorModeValue('gray.100', 'gray.900'),
            }}
        >
            <Box display='inline-block'>
                <Flex
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    bg='red.500'
                    rounded='50px'
                    w='55px'
                    h='55px'
                    textAlign='center'
                >
                    <CloseIcon boxSize='20px' color='white' />
                </Flex>
            </Box>
            <Heading as='h2' size='xl' mt={6} mb={2}>
                No Results Found
            </Heading>
            <Text color='gray.500'>
                Try searching for something else or check back later.
            </Text>
        </Box>
    );
}

export default ErrorResult;
