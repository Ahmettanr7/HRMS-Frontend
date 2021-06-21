import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Image, Icon } from "semantic-ui-react";

export default function Signedin({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623079064/rlcbpiy0y37s7ysdy1u5.jpg"
        />
        <Dropdown pointing="top left" text="Ahmet Tanrıkulu">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" as={NavLink} to='/employee'/>
            <Dropdown.Item onClick={signOut} text="ÇIKIŞ YAP"icon="x"></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
