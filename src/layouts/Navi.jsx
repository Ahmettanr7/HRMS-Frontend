import React from "react";
import { Container, Menu, Segment, Button, MenuItem } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Segment id='navi'>
        <Container>
          <Menu pointing secondary>
            <MenuItem> 
            <MenuItem link active><b><span>HRMS.job</span></b></MenuItem>
            </MenuItem>
          <Menu.Item link>İş Ara</Menu.Item>
            <Menu.Item link>Güncel İş Haberleri</Menu.Item>
            <Menu.Item link>Meslekler</Menu.Item>
            <Menu.Item position="right">
              <Button primary inverted circular>HESAP OLUŞTUR</Button>
            </Menu.Item>
            <Menu.Item>
              <Button primary inverted circular>İŞVEREN HESABI OLUŞTUR</Button>
            </Menu.Item>

            <Menu.Item >
              <Button primary circular>Giriş yap</Button>
            </Menu.Item>
            </Menu>
        </Container>
      </Segment>
    </div>
  );
}
