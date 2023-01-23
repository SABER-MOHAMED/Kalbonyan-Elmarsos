import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, type, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type={type}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
