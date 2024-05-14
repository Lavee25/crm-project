

import React, { useState, useCallback } from 'react';
//import Inbox from './Inbox';
import SearchAppBar from '../components/SideNavbar';
import CustomerPage from './CustomerPage';

const ParentComponent = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = useCallback((searchQuery) => {
        setSearchValue(searchQuery);
    }, []);

    return (
        <>
            <SearchAppBar onSearchKeyPress={handleSearch} />
            {/* <Inbox searchValue={searchValue} onSearch={handleSearch} /> */}
            <CustomerPage searchValue={searchValue} />
        </>
    );
}


export default ParentComponent