import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedinOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button primary circular basic active  as={NavLink} to='/signup' style={{marginLeft:"0.5em"}}>HESAP OLUŞTUR</Button>
            <Button primary circular basic active as={NavLink} to='/signupemployer' style={{marginLeft:"0.5em"}}>İŞVEREN HESABI OLUŞTUR</Button>
            <Button primary circular onClick={signIn} as={NavLink} to='/login' style={{marginLeft:"0.5em"}}>GİRİŞ YAP</Button>
           </Menu.Item>
        </div>
    )
}
