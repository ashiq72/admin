import { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingOutlined,
  SettingOutlined,
  LogoutOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { Text } = Typography;

const menuItems = [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: <Link to="/dashboard">Dashboard</Link>,
  },
  {
    key: "/dashboard/users",
    icon: <UserOutlined />,
    label: <Link to="/dashboard/users">Users</Link>,
  },
  {
    key: "/dashboard/products",
    icon: <ShoppingOutlined />,
    label: <Link to="/dashboard/products">Products</Link>,
  },
  {
    key: "/dashboard/settings",
    icon: <SettingOutlined />,
    label: <Link to="/dashboard/settings">Settings</Link>,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const styles = {
    sider: {
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      background: "#001529",
      boxShadow: "2px 0 8px 0 rgba(29,35,41,.05)",
      zIndex: 10,
    },
    logoContainer: {
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255, 255, 255, 0.05)",
      margin: "0 0 10px 0",
      transition: "all 0.2s",
    },
    logoText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: collapsed ? 0 : 10,
      display: collapsed ? "none" : "block",
      letterSpacing: "1px",
    },
    footer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <>
      <div style={{ width: collapsed ? 80 : 220, transition: "width 0.2s" }} />

      <Sider
        width={220}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        style={styles.sider}
        theme="dark"
      >
        {/* ===== Logo / Brand ===== */}
        <div style={styles.logoContainer}>
          <CodeSandboxOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          <div style={styles.logoText}>BASE360</div>
        </div>

        {/* ===== Main Menu ===== */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ borderRight: 0 }}
        />

        {/* ===== Bottom Actions (Optional but looks great) ===== */}
        <div style={styles.footer}>
          <Menu
            theme="dark"
            mode="inline"
            selectable={false}
            items={[
              {
                key: "logout",
                icon: <LogoutOutlined style={{ color: "#ff4d4f" }} />,
                label: <Text type="danger">Logout</Text>,
              },
            ]}
          />
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
