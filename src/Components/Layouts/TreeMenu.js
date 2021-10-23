// it's the tree menu
import React, { useState, useEffect } from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';
import { base64encode } from 'nodejs-base64';

const TreeMenu = ({handleOk}) => {
  const { SubMenu } = Menu;
  const [treeItem, setTreeItem] = useState([]);

  useEffect(() => {
    fetch(`./tree-menu.json`)
    .then((res) => res.json())
    .then((data) => {
      setTreeItem(data);
    })
  }, []);

  return (
    <div className="tree-menu">
      <div className="container">
        <Menu mode="inline">
          {treeItem.map((list, index) => {
            return (
              <>
                {!list.hasOwnProperty('submenu') ? (
                  <Menu.Item key={index} onClick={handleOk}><Link to={`/contents/${base64encode(list.content_path)}`}>{list.label}</Link></Menu.Item>
                ):(
                  <SubMenu key={index += 1} title={list.label}>
                    {list.submenu.map((subItem, key)=>{
                      return (
                        <>
                          {!subItem.hasOwnProperty('submenu') ? (
                            <Menu.Item key={key += 2} onClick={handleOk}><Link to={`/contents/${base64encode(subItem.content_path)}`}>{subItem.label}</Link></Menu.Item>
                          ):(
                            <SubMenu key={key += 3} title={subItem.label}>
                              {subItem.submenu.map((itemSub, subKey)=>(
                                <Menu.Item key={subKey += 4} onClick={handleOk}><Link to={`/contents/${base64encode(itemSub.content_path)}`}>{itemSub.label}</Link></Menu.Item>
                              ))}
                            </SubMenu>
                          )}
                          
                        </>
                      );
                    })}
                  </SubMenu>
                )}
              </>
            );
          })}
        </Menu>
      </div>
    </div>
  )
}

export default TreeMenu

