import { sideMenuList } from "../../../mock/mockup";
import { Menu } from "antd";
import { GiftOutlined } from "@ant-design/icons";

const SideBar: React.FC = () => {
  return (
    <Menu className="flex-1 border-blue-700 border-4" mode="vertical">
      {sideMenuList.map((m, idx) => (
        <Menu.SubMenu
          key={`side-menu-${idx}`}
          title={
            <div className="flex items-center">
              <GiftOutlined />
              <p className="pl-3">{m.title}</p>
            </div>
          }
        >
          {m.subMenu.map((t, tidx) => (
            <Menu.SubMenu
              key={`sub-menu-${tidx}`}
              title={<span>{t.title}</span>}
            >
              {t.subMenu.map((l, lidx) => (
                <Menu.Item key={`item-menu-${lidx}`}>{l}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};

export default SideBar;
