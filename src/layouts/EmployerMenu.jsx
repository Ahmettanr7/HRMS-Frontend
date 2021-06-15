import React from "react";
import { Dropdown, Icon, Menu, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


export default function EmployerMenu() {
  return (
    <div>
      <Menu vertical size='huge'>
        <Menu.Header><Header block inverted sub>YONETIM</Header></Menu.Header>
        <Menu.Item link as={NavLink} to="/employer">
        <Icon name="home" />
          Home
          <Menu.Menu>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item link as={NavLink} to="/employer/jobadvertlist">
          <Icon name="list" />
          ILANLARIM
        </Menu.Item>

        <Menu.Item>
          <Icon name="list" />
         2
        </Menu.Item>

        <Menu.Item link>
          <Icon name="list" />
          3
        </Menu.Item>

        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      {/* <Menu pointing vertical size="massive">
        <Menu.Item link labelPosition="left"  as={NavLink} to="/employer/jobadvertlist">
          ILANLARIM
        </Menu.Item>

        <Menu.Item link name="spam">
          2
        </Menu.Item>

        <Menu.Item link name="updates">
          3
        </Menu.Item>
        <Menu.Item link name="updates">
          4
        </Menu.Item>
      </Menu> */}
    </div>
  );
}
