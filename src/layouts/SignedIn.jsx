import React from "react";
import { Dropdown, Menu, Image, Button, Icon } from "semantic-ui-react";
import JobAdvertAdd from "../pages/JobAdvertAdd";

export default function Signedin({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced=""
          right
          src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623079064/rlcbpiy0y37s7ysdy1u5.jpg"
        />
        <Dropdown pointing="top left" text="Ahmet Tanrıkulu">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="ÇIKIŞ YAP" icon="out" />
            <Dropdown.Item>
              <JobAdvertAdd
                triggerButton={
                  <Button primary icon labelPosition="left">
                    <Icon name="add" />
                    İş İlanı Ekle
                  </Button>
                }
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
