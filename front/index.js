
const searchClient = algoliasearch(
    'UFKNG5HXLH',
    'c9e989229f41a417c58e8e0a4ab9ce6f'
);

let search = instantsearch({
    indexName: 'demo_mock_data',
    searchClient,
    routing: true,
});

search.addWidgets([
    instantsearch.widgets.configure({
        hitsPerPage: 20,
    })
]);

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search for contacts',
    })
]);

search.addWidgets([
    instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                item: document.getElementById('hit-template').innerHTML,
                empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
        },
    })
]);

search.start();