import React from "react";
import { Dropdown, Icon, Menu, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function AdminMenu() {
  return (
    <div >
      <Menu  className="managementMenu" vertical size='huge'>
        <Menu.Header><Header block inverted sub>YONETIM</Header></Menu.Header>
        <Menu.Item link as={NavLink} to="/admin">
        <Icon name="home" />
          Home
          <Menu.Menu>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item link as={NavLink} to="/admin/jobadvertlist">
          <Icon name="list" />
          ILANLAR
        </Menu.Item>

        <Menu.Item link as={NavLink} to="/admin/employerlist">
          <Icon name="list" />
          IS VERENLER
        </Menu.Item>

        <Menu.Item link as={NavLink} to="/admin/employeelist">
          <Icon name="list" />
          IS ARAYANLAR
        </Menu.Item>

        <Menu.Item link as={NavLink} to="/admin/systememployeelist">
          <Icon name="list" />
          SISTEM CALISANLARI
        </Menu.Item>

        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
}
