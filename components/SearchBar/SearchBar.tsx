export default function SearchBar() {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit">Szukaj</button>
      </form>
    </div>
  );
}
