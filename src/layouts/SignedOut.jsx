import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedinOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button primary circular inverted style={{marginLeft:"0.5em"}}>HESAP OLUŞTUR</Button>
            <Button primary circular inverted style={{marginLeft:"0.5em"}}>İŞVEREN HESABI OLUŞTUR</Button>
            <Button primary circular onClick={signIn} style={{marginLeft:"0.5em"}}>GİRİŞ YAP</Button>
           </Menu.Item>
        </div>
    )
}
