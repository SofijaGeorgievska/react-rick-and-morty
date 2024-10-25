import "./SearchBar.scss"
import PropTypes from "prop-types"

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value)
  }

  return (
    <div className="search-container" style={{display: "flex", marginLeft: "20px"}}>
      <div className="search" style={{alignItems: "baseline"}}>
        <img src="../assets/images/search-icon.svg" />
         <input
          type="text"
          placeholder="Search characters"
          style={{margin: "0 10px"}}
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func,
}

export default SearchBar