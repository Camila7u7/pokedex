import axios from 'axios';
import React from 'react'


export const SearchPokedex = async (
    typeSearchPokedex: string,
    pokemonSearch: string) => {
    const respuesta = await axios({
        method: "get",
        url:
          "https://pokeapi.co/api/v2/" +
          typeSearchPokedex +
          "/" +
          pokemonSearch +
          "",
      })
        .then(function (response: any) {
          return response;
        })
        .catch(function (error: any) {
          return error.response
          
        });

       return respuesta;
}
