import React from "react";
import { Container, Menu, Segment, Button, MenuItem, Image } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Segment>
        <Container>
          <Menu pointing secondary>
            <MenuItem> 
            <MenuItem link><b><span>HRMS.job</span></b></MenuItem>
            </MenuItem>
            <Menu.Item link>İş Ara</Menu.Item>
            <Menu.Item link>Güncel İş Haberleri</Menu.Item>
            <Menu.Item link>Meslekler</Menu.Item>
          <Menu.Item position="right">
              <Button primary basic>Sign up</Button>
            </Menu.Item>

            <Menu.Item >
              <Button>Log-in</Button>
            </Menu.Item>
            </Menu>
        </Container>
      </Segment>
    </div>
  );
}
