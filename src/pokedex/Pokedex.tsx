import React from "react";

export const Pokedex = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3">PokeDex</h1>
          </div>
          <div>
            <form className="row g-3">
              <div className="col-auto">
                <label className="visually-hidden">Email</label>
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticEmail2"
                  value="email@example.com"
                />
              </div>
              <div className="col-auto">
                <label className="visually-hidden">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Password"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                  Confirm identity
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
