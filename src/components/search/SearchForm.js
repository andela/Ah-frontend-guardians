import React from 'react';

export default function SearchForm({
  onSubmit,
  searchParam,
  onChange,


}) {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form
              onSubmit={onSubmit}
              className="form-horizontal mt-5"
              role="form"
              id="search"
            >
              <div className="row">
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    name="searchParam"
                    placeholder = "Search...."
                    value={searchParam}
                    onChange={onChange}
                    id = "formSearch"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    className="btn btn-default btn-block"
                    type="submit"
                    value="Search"
                  />
                </div>
              </div>
            </form>

   
          </div>
        </div>
      </div>
    </div>
  );
}
