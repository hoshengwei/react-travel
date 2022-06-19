import { Dropdown, Menu, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const menu = (
  <Menu
    // onClick={handleMenuClick}
    items={[
      {
        label: "中文",
        key: "1",
      },
      {
        label: "English",
        key: "2",
      },
    ]}
  />
);

const TopBar: React.FC = () => {
  return (
    <div
      id="top-bar"
      className="bg-gray-200 h-9 w-full px-28 flex justify-between"
    >
      {/* 左側 */}
      <div className="flex items-center">
        <p className="text-base">讓旅行更幸福</p>
        <Dropdown.Button
          className="text-base mx-4 bg-white rounded-md"
          overlay={menu}
          placement="bottom"
          icon={<GlobalOutlined />}
        >
          語言
        </Dropdown.Button>
      </div>
      {/* 右側 */}
      <div className="flex items-center">
        <Button className="text-base bg-white py-0 my-0">註冊</Button>
        <Button className="text-base bg-white py-0 my-0">登陸</Button>
      </div>
    </div>
  );
};

export default TopBar;
