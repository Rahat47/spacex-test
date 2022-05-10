import {
    Center,
    chakra,
    CSSObject,
    Skeleton,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppSelector } from '../app/hooks';
import { Mission } from '../types';

interface PaginatorProps {
    setItems: React.Dispatch<React.SetStateAction<Mission[]>>;
    setOffset: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const ChakraPaginator = chakra(ReactPaginate);

const styles: CSSObject = {
    li: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',

        a: {
            fontSize: '0.875rem',
            color: 'white',
            bg: 'gray.900',
            py: '12px',
            px: '24px',
            m: '6px',
            rounded: 'md',
            width: '100%',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                bg: 'gray.800',
            },
        },
    },

    '.selected': {
        a: {
            backgroundColor: '#00a3ff',
        },
    },

    '.disabled': {
        a: {
            backgroundColor: 'gray.400',
            cursor: 'not-allowed',
            '&:hover': {
                backgroundColor: 'gray.400',
            },
        },
    },
};

function Paginator({ setItems, setOffset }: PaginatorProps) {
    const { data } = useAppSelector(state => state.mission);
    const itemsPerPage = 9;

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        if (data) {
            const endOffset = itemOffset + itemsPerPage;
            setItems(data.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(data.length / itemsPerPage));
            setOffset([itemOffset, endOffset]);
        }
    }, [data, itemOffset, itemsPerPage, setItems, setOffset]);

    const handlePageClick = (event: { selected: number }) => {
        if (data) {
            const newOffset = (event.selected * itemsPerPage) % data.length;

            setItemOffset(newOffset);
        }
    };

    const pageRange = useBreakpointValue({
        base: 1,
        md: 3,
        lg: 4,
    });

    const flexDir = useBreakpointValue({ base: 'column', md: 'row' });

    return (
        <Center my={4}>
            {data ? (
                <ChakraPaginator
                    breakLabel='...'
                    nextLabel='Next'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={pageRange}
                    pageCount={pageCount}
                    previousLabel='Previous'
                    display='flex'
                    alignItems='stretch'
                    justifyContent='center'
                    listStyleType='none'
                    sx={styles}
                    flexDir={flexDir as 'row' | 'column'}
                />
            ) : (
                <Skeleton width='100%' height='40px' />
            )}
        </Center>
    );
}

export default Paginator;
