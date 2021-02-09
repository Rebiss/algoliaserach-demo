import React from 'react'
import './algolia.css'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch-dom';

const searchClient = algoliasearch('UFKNG5HXLH', 'c9e989229f41a417c58e8e0a4ab9ce6f');
const index = 'demo_mock_data'
export const Algolia = () => {
    return (
        <InstantSearch searchClient={searchClient} indexName={index}>
            <SearchBox />
            <Hits />
        </InstantSearch>
    )
}