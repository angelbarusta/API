const fetch = require("node-fetch");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type character {
    name: String
    url: String
  }
  type char {
    base_experience: Int
    height: Int
    id: ID
    location_area_encounters: String
    name: String
    order: Int
    weight: Int
  }

  type Query {
    characters: [character]
  }
`;

const resolvers = {
  Query: {
    characters: () => fetchCharacters(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

const URL_RICK_MORTY = `https://rickandmortyapi.com/api/character/`;
const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/`;

const charcater2 = {
  abilities: [],
  base_experience: 64,
  forms: [],
  game_indices: [],
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
  moves: [],
  name: "bulbasaur",
  order: 1,
  species: {},
  sprites: {},
  stats: [],
  types: [],
  weight: 69,
};

const fetchCharacters = () => {
  // More info about the fetch function? https://github.com/bitinn/node-fetch#json
  return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((json) => json.results)
    .catch((err) => console.error(err));
};
