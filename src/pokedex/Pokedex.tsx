import React, { useState } from "react";
import { SearchPokedex } from "../utilities/services/SearchPokedex";

type pokemonInfo = {
  id: number;
  name: string;
  base_experience: number;
};

export const Pokedex = () => {
  const initialValue = {
    typeSearch: "pokemon",
    search: "",
  };

  const [input, setInput] = useState<{ typeSearch: string; search: string }>(
    initialValue
  );
  const [pokemonInfo, setPokemonInfo] = useState<null | pokemonInfo>(null);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tittle, setTittle] = useState("");

  const changeTittle = (tittle: string) => {
    if(tittle === "pokemon") {
      tittle = "Nombre"
    };
    if(tittle === "pokemon-species"){
      tittle = "Especie"
    };
    if(tittle === "type"){
      tittle = "Tipo"
    }
    setTittle(tittle);
  };

  const handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPokemonSearch = async (e: any) => {
    e.preventDefault();
    const { search, typeSearch } = e.target.elements;
    setIsLoading(true);
    const { data, status } = await SearchPokedex(
      typeSearch.value,
      search.value
    );
    if (status !== 200) {
      setError(data);
      setPokemonInfo(null);
      setIsLoading(false);
      return;
    }
    setPokemonInfo(data);
    setError(null);
    setIsLoading(false);
    changeTittle(typeSearch.value);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3">PokeDex</h1>
          </div>
          <div className="mt-3">
            <form
              className="row justify-content-center"
              onSubmit={handleSubmitPokemonSearch}
            >
              <div className="col-4 card py-4">
                <label className="">Busca tu pokemon</label>
                <select
                  name="typeSearch"
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleChange}
                  defaultValue={input.typeSearch}
                >
                  <option value="pokemon">Nombre</option>
                  <option value="pokemon-species">Especie</option>
                  <option value="type">Tipo</option>
                </select>
                <input
                  name="search"
                  type="text"
                  value={input.search}
                  onChange={handleChange}
                  className="form-control mt-4"
                  placeholder="Escribe aqui!"
                />
                <button
                  type="submit"
                  className="btn btn-primary my-4"
                  disabled={isLoading}
                >
                  Buscar
                </button>
              </div>
            </form>
            {error && (
              <div className="alert alert-danger my-4" role="alert">
                Error {error}, {input.search}.
              </div>
            )}
            {pokemonInfo && (
              <div className="row justify-content-center mt-4">
                <div className="col-4 card">
                  <h3>{tittle}</h3>
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
                        <th scope="row">{pokemonInfo.id}</th>
                        <td>{pokemonInfo.name}</td>
                        <td>{pokemonInfo.base_experience}</td>
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
