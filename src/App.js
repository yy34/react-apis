import "./App.scss";
import { useState, useEffect } from "react";
import getApis from "./apis.json";
import Search from "./components/search/Search";
import Items from "./components/Item/Items";

function App() {
  const [search, setSearch] = useState("");
  const [apis, setApis] = useState(getApis);

  return (
    <div className="App">
      <h3>
        A collective list of free APIs for use in
        <br />
        software and web development.
      </h3>
      <Search
        search={search}
        setSearch={setSearch}
        placeholder="Find development, games, images APIs"
      />

      <div className="container">
        <h4>Featured APIs of this week</h4>
        <div className="api-list">
          {apis
            .filter((api) =>
              api.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((api) => (
              <Items key={api.id} data={api} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
