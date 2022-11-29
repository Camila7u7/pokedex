import React, { useState } from "react";
import axios from "axios";

type pokemonInfo = {
  id: number;
  name: string;
  base_experience: number;
};

export const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState<null | pokemonInfo>(null);
  const [error, setError] = useState<null | string>(null);

  const handleChangePokemon = (e: any) => {
    setPokemonName(e.target.value);
  };

  const handleSubmitPokemon = () => {
    console.log(pokemonName);
    axios({
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonName + "",
    })
      .then(function (response: any) {
        console.log(response);
        setPokemonInfo(response.data);
        setError(null);
      })
      .catch(function (error: any) {
        setPokemonInfo(null);
        setError(error.response.data);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3">PokeDex</h1>
          </div>
          <div className="mt-3">
            <form className="row justify-content-center">
              <div className="col-4 card py-4">
                <label className="">Busca tu pokemon</label>
                <input
                  type="text"
                  value={pokemonName}
                  onChange={handleChangePokemon}
                  className="form-control mt-4"
                  placeholder="Escribe aqui!"
                />
                <button
                  type="button"
                  className="btn btn-primary my-4"
                  onClick={handleSubmitPokemon}
                >
                  Buscar
                </button>
              </div>
            </form>
            {error && (
              <div className="alert alert-danger my-4" role="alert">
                Error {error}, {pokemonName}.
              </div>
            )}
            {pokemonInfo && (
              <div className="row justify-content-center mt-4">
                <div className="col-4 card">
                  <table className="table mt-3  ">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Experiencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">{pokemonInfo ? pokemonInfo.id : ""}</th>
                        <td>{pokemonInfo ? pokemonInfo.name : ""}</td>
                        <td>
                          {pokemonInfo ? pokemonInfo.base_experience : ""}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
