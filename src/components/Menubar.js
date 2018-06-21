import React from 'react';
import { Menu, Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const Menubar = ({cartItems}) => {
  return (
    <div>
    <Menu secondary>
      <Link to="/">
        <Menu.Item name='browse'>
          <img alt="site-logo" src={logo} /> React Cart
        </Menu.Item>
      </Link>
        <Menu.Menu position='right'>
          <Link to="/cart">
            <Menu.Item name='signup'>
              <Button secondary>
                <i aria-hidden="true" className="icon cart plus"></i> Cart <Label>{cartItems.length}</Label>
              </Button>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
export default Menubar;
