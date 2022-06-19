import logo from "../../../assets/logo.svg";
import { Input } from "antd";

const MainBar: React.FC = () => {
  return (
    <div className="flex items-center h-15 px-28">
      <div className="w-[72px] h-[72px] flex items-center">
        <img className="animate-spin-slow " src={logo} alt="react_logo" />
      </div>
      <h1 className="text-2xl font-bold text-sky-500">React 旅遊網</h1>
      <Input.Search
        className="ml-[40px] max-w-[400px]"
        placeholder="請輸入旅遊目的地、主題、或關鍵字"
      ></Input.Search>
    </div>
  );
};

export default MainBar;
