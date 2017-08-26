<template>
             <ais-index
               app-id="latency"
               api-key="3d9875e51fbd20c7754e65422f7ce5e1"
               index-name="bestbuy"
             >

               <ais-input placeholder="Find products..." autofocus></ais-input>
<ais-refinement-list attribute-name="brand"></ais-refinement-list>
            <ais-results>
              <template scope="{ result }">
                <h2>
                  <a :href="result.url">
                    {{ result.title }}
                  </a>
                </h2>
                <p>{{ result.description }}</p>
              </template>
            </ais-results>

             </ais-index>
           </template>