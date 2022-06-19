import TopBar from "./components/TopBar";
import MainBar from "./components/MainBar";
import NavBar from "./components/NavBar";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <TopBar />
      <MainBar />
      <NavBar />
    </header>
  );
};

export default Header;
