// the top header and it's main elements
// we will have a navigation button on the right side. after clicking there, a popup will be opened and a tree menu will be shown there.
import React, { useState } from 'react';
import {
  Modal, 
  Button, 
  PageHeader, 
  Switch
} from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import TreeMenu from './TreeMenu';

const Header = () => {
  const history = useHistory();
  let location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const darkMode = (checked) => {
    console.log(`switch to ${checked}`);
  }

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  
  return (
    <section className="header">
      <div className="container">
        {location.pathname === '/' ? (
          <PageHeader
          className="navbar"
          title={<Link to="/"><img width={40} src="/img/logo.png" alt="Logo" /></Link>}
          extra={[
            <Switch onChange={darkMode} />,
            <Button type="primary" onClick={showModal} key="1">সূচিপত্র</Button>
          ]}
        />
        ) : (
          <PageHeader
          className="navbar"
          onBack={() => history.push('/')}
          title={<Link to="/"><img width={40} src="/img/logo.png" alt="Logo" /></Link>}
          extra={[
            <Switch onChange={darkMode} />,
            <Button type="primary" onClick={showModal} key="1">সূচিপত্র</Button>
          ]}
        />
        )}
        <Modal
          className="navber-modal"
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel} 
          footer={null}
        >
          <TreeMenu handleOk={handleOk} />
        </Modal>
      </div>
    </section>
  )
}

export default Header