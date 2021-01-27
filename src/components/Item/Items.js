import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import "./items.scss";

const Items = ({ data: api }) => {
  return (
    <div className="api-item">
      <div className="item-icon">
        <img src={api.icon}></img>
      </div>
      <div className="item-detail">
        <h4>{api.name}</h4>
        <div className="item-category">{api.category}</div>
        <div className="desc">{api.description}</div>
      </div>
      <div className="item-hover">
        <button>
          <BsBookmark />
          Bookmark
        </button>
        <a href="#">
          API Docs <RiArrowRightSLine />
        </a>
      </div>
    </div>
  );
};

export default Items;
