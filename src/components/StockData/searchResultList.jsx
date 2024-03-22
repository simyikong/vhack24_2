import { useEffect, useState, useRef } from 'react';

const SearchResultList = ({suggestionList, seeStockDetail, selectStock}) => {
    const [list, setList] = useState(suggestionList);
    const node = useRef();

    useEffect(() => {
        setList(suggestionList);
    }, [suggestionList])

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setList(null);
    };

    const checkStockDetail = (symbol) => {
        setList(null);
        seeStockDetail(symbol);
        selectStock(symbol);
    }

    return (
        <div ref={node} className='stock-list-container'>
            <ul
                className='stock-list'
            >
                {
                    list && list.map(item =>
                        <li
                            key={item['1. symbol']}
                            className='stock-list-item bg-white rounded-md p-2 shadow-md cursor-pointer hover:bg-gray-100'
                            onClick={() => checkStockDetail(item['1. symbol'])}
                        >
                            {item['1. symbol']}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default SearchResultList;