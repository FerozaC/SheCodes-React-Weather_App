export default function SearchForm({ onSearch }) {
    function handleSubmit(e) {
      e.preventDefault();
      const input = e.target.elements.city.value.trim();
      if (input) {
        onSearch(input);
      }
    }
  
    return (
      <form className="search-form" id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="city"
          placeholder="Search for a city..."
          className="search-form-input"
          required
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
    );
  }
  