import { GrSearch } from "react-icons/gr";
import "./search.scss";
const Search = ({ placeholder, search, setSearch }) => {
  return (
    <form className="api-seach-form">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder={placeholder}
      ></input>
    </form>
  );
};
export default Search;
