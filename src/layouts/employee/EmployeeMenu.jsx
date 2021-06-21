import React from 'react'
import { Dropdown, Icon, Menu, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function EmployeeMenu() {
    return (
        <div>
      <Menu className="managementMenu" vertical size='huge'>
        <Menu.Header><Header block inverted sub>PROFİL YÖNETİMİ</Header></Menu.Header>
        <Menu.Item link as={NavLink} to="/employee">
        <Icon name="home" />
          Profil
          <Menu.Menu>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item link>
          <Icon name="heart" />
          Kaydedilenler
        </Menu.Item>
        <Menu.Item link as={NavLink} to="/employee/cv">
          <Icon name="edit" />
          Cv Düzenle
        </Menu.Item>
        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Profili Düzenle" />
            <Dropdown.Item icon="globe" text="Dil Seçimi" />
            <Dropdown.Item icon="settings" text="Hesap Ayarları" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
    )
}
