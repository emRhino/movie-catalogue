import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
    </header>
  );
}
