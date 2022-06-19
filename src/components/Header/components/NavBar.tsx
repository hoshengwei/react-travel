type NavProps = {
  page: string;
};

const Nav: React.FC<NavProps> = ({ page }) => {
  return <button className="text-white text-base px-3">{page}</button>;
};

const NavBar: React.FC = () => {
  return (
    <div className="w-full h-9 px-14 bg-blue-600 flex items-center justify-evenly">
      <Nav page="旅遊首頁" />
      <Nav page="周末遊" />
      <Nav page="跟團遊" />
      <Nav page="自由行" />
      <Nav page="私家團" />
      <Nav page="郵輪" />
      <Nav page="酒店+景點" />
      <Nav page="當地玩樂" />
      <Nav page="主題遊" />
      <Nav page="訂製遊" />
      <Nav page="遊學" />
      <Nav page="簽證" />
      <Nav page="企業遊" />
      <Nav page="高端遊" />
      <Nav page="愛玩戶外" />
      <Nav page="保險" />
    </div>
  );
};

export default NavBar;
