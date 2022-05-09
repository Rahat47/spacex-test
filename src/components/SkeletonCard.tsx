import {
    Center,
    Flex,
    SkeletonCircle,
    SkeletonText,
    Stack,
} from '@chakra-ui/react';

function SkeletonCard() {
    return (
        <Center py={6} alignItems='stretch'>
            <Stack
                borderWidth='1px'
                borderRadius='lg'
                w={{ sm: '100%', md: '540px' }}
                direction={{ base: 'column', md: 'row' }}
                boxShadow='2xl'
                padding={4}
            >
                <Flex flex={1}>
                    <SkeletonCircle size='100px' rounded='full' />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection='column'
                    justifyContent='space-between'
                    alignItems='center'
                    p={1}
                    pt={2}
                >
                    <SkeletonText
                        width='full'
                        height={4}
                        noOfLines={4}
                        spacing='4'
                    />
                </Stack>
            </Stack>
        </Center>
    );
}

export default SkeletonCard;
