
<template>
    <ais-index
            app-id="JRQNI5N6DC"
            api-key="5b7701e3b9982706450dc0dd59d07261"
            index-name="lobbies"
    >
        <ais-search-box></ais-search-box>
        <ais-stats></ais-stats>
        <ais-refinement-list attribute-name="name"></ais-refinement-list>
        <ais-results>
            <template scope="{ result }">
                <h2>
                    <ais-highlight :result="result" attribute-name="name"></ais-highlight>
                </h2>
            </template>
        </ais-results>

    </ais-index>
</template>


