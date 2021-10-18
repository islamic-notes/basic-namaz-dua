// the top header and it's main elements
// we will have a navigation button on the right side. after clicking there, a popup will be opened and a tree menu will be shown there.
import React, { useState } from 'react';
import {Modal, Menu, Button, PageHeader, Switch} from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  const { SubMenu } = Menu;
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const darkMode = (checked) => {
    console.log(`switch to ${checked}`);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  
  return (
    <div className="header__section">
      <div className="container">
        <PageHeader
          className="navbar"
          title={<Link to="/"><img width={40} src="/img/logo.png" alt="Logo" /></Link>}
          tags={<Switch defaultChecked onChange={darkMode} />}
          extra={[
            <Button type="primary" onClick={showModal} key="1">সূচিপত্র</Button>
          ]}
        />
        <Modal
          className="navber__modal"
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel} 
          footer={null}
        >
          <div className="navber__treeMenu">
            <div className="container">
              <Menu className="treeMenu__ul" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
                <SubMenu key="sub1" title="Navigation One">
                  <Menu.Item className="tree__subMenu" key="1" onClick={handleOk}>
                    <Link to="/menu/page/645656598">Option 1</Link>
                  </Menu.Item>
                  <Menu.Item className="tree__subMenu" key="2" onClick={handleOk}>
                    <Link to="/menu/page/645656599">Option 2</Link>
                  </Menu.Item>
                  <Menu.Item className="tree__subMenu" key="3" onClick={handleOk}>
                    <Link to="/menu/page/645656600">Option 3</Link>
                  </Menu.Item>
                  <Menu.Item className="tree__subMenu" key="4" onClick={handleOk}>
                    <Link to="/menu/page/645656601">Option 4</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Navigation Two">
                  <Menu.Item className="tree__subMenu" key="5" onClick={handleOk}>
                    <Link to="/menu/page/645656602">Option 5</Link>
                  </Menu.Item>
                  <Menu.Item className="tree__subMenu" key="6" onClick={handleOk}>
                    <Link to="/menu/page/645656603">Option 6</Link>
                  </Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item className="tree__subMenu" key="7" onClick={handleOk}>
                      <Link to="/menu/page/645656604">Option 7</Link>
                    </Menu.Item>
                    <Menu.Item className="tree__subMenu" key="8" onClick={handleOk}>
                      <Link to="/menu/page/645656605">Option 8</Link>
                    </Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title="Navigation Three">
                  <Menu.Item className="tree__subMenu" key="9" onClick={handleOk}>
                    <Link to="/menu/page/645656606">Option 9</Link>
                  </Menu.Item>
                  <Menu.Item className="tree__subMenu" key="10" onClick={handleOk}>
                    <Link to="/menu/page/645656607">Option 10</Link>
                  </Menu.Item>
                  <Menu.Item className="tree__subMenu" key="11" onClick={handleOk}>
                    <Link to="/menu/page/645656608">Option 11</Link>
                  </Menu.Item>
                  <Menu.Item className="tree__subMenu" key="12" onClick={handleOk}>
                    <Link to="/menu/page/645656609">Option 12</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Header