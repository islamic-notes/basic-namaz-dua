// it's the tree menu
import React from 'react'
import {Menu} from 'antd';
import { Link } from 'react-router-dom';

const addPages = [
  {
    className: 'treeMenu__li',
    title: 'Navigation One',
    key: 'sub1',
    items: [
      {
        className: 'tree__subMenu',
        key: '1',
        path: '/menu/page/645656598',
        name: 'Option 1'
      },
      {
        className: 'tree__subMenu',
        key: '2',
        path: '/menu/page/645656599',
        name: 'Option 2'
      },
      {
        className: 'tree__subMenu',
        key: '3',
        path: '/menu/page/645656600',
        name: 'Option 3'
      },
      {
        className: 'tree__subMenu',
        key: '4',
        path: '/menu/page/645656601',
        name: 'Option 4'
      }
    ]
  },
  {
    className: 'treeMenu__li',
    title: 'Navigation Two',
    key: 'sub2',
    items: [
      {
        className: 'tree__subMenu',
        key: '5',
        path: '/menu/page/645656602',
        name: 'Option 5'
      },
      {
        className: 'tree__subMenu',
        key: '6',
        path: '/menu/page/645656603',
        name: 'Option 6'
      },
      {
        className: 'tree__subMenu',
        key: '7',
        path: '/menu/page/645656604',
        name: 'Option 7'
      },
      {
        className: 'tree__subMenu',
        key: '8',
        path: '/menu/page/645656605',
        name: 'Option 8'
      }
    ]
  },
  {
    className: 'treeMenu__li',
    title: 'Navigation Three',
    key: 'sub4',
    items: [
      {
        className: 'tree__subMenu',
        key: '9',
        path: '/menu/page/645656606',
        name: 'Option 9'
      },
      {
        className: 'tree__subMenu',
        key: '10',
        path: '/menu/page/645656607',
        name: 'Option 10'
      },
      {
        className: 'tree__subMenu',
        key: '11',
        path: '/menu/page/645656608',
        name: 'Option 11'
      },
      {
        className: 'tree__subMenu',
        key: '12',
        path: '/menu/page/645656609',
        name: 'Option 12'
      }
    ]
  }
];

const TreeMenu = ({handle}) => {
  const { SubMenu } = Menu;
  return (
    <>
    {addPages.map((pages) => (
      <SubMenu className={pages.className} key={pages.key} title={pages.title}>
        {console.log(pages)}
        {pages.items.map((item) => (
          <Menu.Item className={item.className} onClick={handle} key={item.key}>
            <Link to={item.path}>
              {item.name}
            </Link>
          </Menu.Item>
        ))}
      </SubMenu>
    ))}
    </>
  )
}

export default TreeMenu

