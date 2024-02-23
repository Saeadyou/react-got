function SearchBar() {
  return (
    <form className="flex w-full justify-center">
      <input
        type="text"
        placeholder="Search for names..."
        className="transi m-4 w-[55%] rounded-lg border-0 p-4 text-blue-950 outline-none transition-[width] duration-500 focus:w-[80%]"
      />
    </form>
  );
}

export default SearchBar;
