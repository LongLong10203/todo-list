import "./SearchBar.css"

function SearchBar({ onSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                onInput={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar