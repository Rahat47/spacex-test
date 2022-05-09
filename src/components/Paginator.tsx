import { Center, chakra, CSSObject } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppSelector } from '../app/hooks';
import { Mission } from '../types';

interface PaginatorProps {
    setItems: React.Dispatch<React.SetStateAction<Mission[]>>;
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

function Paginator({ setItems }: PaginatorProps) {
    const { data } = useAppSelector(state => state.mission);
    const itemsPerPage = 9;

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        if (data) {
            const endOffset = itemOffset + itemsPerPage;
            setItems(data.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(data.length / itemsPerPage));
        }
    }, [data, itemOffset, itemsPerPage, setItems]);

    const handlePageClick = (event: { selected: number }) => {
        if (data) {
            const newOffset = (event.selected * itemsPerPage) % data.length;

            setItemOffset(newOffset);
        }
    };

    return (
        <Center my={4}>
            <ChakraPaginator
                breakLabel='...'
                nextLabel='Next'
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel='Previous'
                display='flex'
                alignItems='stretch'
                justifyContent='center'
                listStyleType='none'
                sx={styles}
            />
        </Center>
    );
}

export default Paginator;
