import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Container, Menu, Segment, MenuItem,Button,Icon } from "semantic-ui-react";
import Signedin from "./SignedIn";
import SignedinOut from "./SignedOut";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const history = useHistory()

  function handlerSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handlerSignIn() {
    setIsAuthenticated(true)
    
  }

  return (
    <div>
      <Segment id='navi'>
        <Container>
          <Menu pointing secondary>
            <MenuItem> 
            <MenuItem link active as={NavLink} to='/'><b><span>HRMS.job</span></b></MenuItem>
            </MenuItem>
          <Menu.Item link as={NavLink} to='/jobs'>İş Ara</Menu.Item>
            <Menu.Item link>Güncel İş Haberleri</Menu.Item>
            <Menu.Item link>Meslekler</Menu.Item>
            <Menu.Menu position="right">
            {isAuthenticated?<Signedin signOut={handlerSignOut}/>:<SignedinOut signIn={handlerSignIn}/>}
            </Menu.Menu>
            </Menu>
        </Container>
      </Segment>
    </div>
  );
}
