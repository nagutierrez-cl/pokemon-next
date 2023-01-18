# Pokemon - NextJsApp

Project developed on NextJs using TypeScript in order to learn both technologies, especially NextJs Dynamic Routing with Static Site Generation (SSG), Incremental Static Regeneration (ISR) and render new paths on-demand.

It consists of a list of the first 151 pokemons, where the detail page of these (Dynamic routing) is prerendered at build time (SSG). 
The rest can be accessed by the search bar (id or name), and do a request to render a new pokemon if there's one. There's a revalidation for each page (ISR) each 7 days in case the API return another data for a rendered pokémon.

I used PokéAPI (https://pokeapi.co) as my API for data fetching.

Technologies used: \
TypeScript (v4.9.4), NextJs (v13.1.1), React (v18.2.0), \
Material-ui (v5.11.4), Axios (v1.2.2), ChartJs (v4.1.2)
## Demo

https://pokemon-nagutierrez-cl.vercel.app