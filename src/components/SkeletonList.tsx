import { SimpleGrid } from '@chakra-ui/react';
import SkeletonCard from './SkeletonCard';

function SkeletonList() {
    return (
        <SimpleGrid
            columns={{
                base: 1,
                md: 2,
                xl: 3,
            }}
            gap='4'
        >
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </SimpleGrid>
    );
}

export default SkeletonList;
