import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function Signedin({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced=''right src='https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623079064/rlcbpiy0y37s7ysdy1u5.jpg'/>
                <Dropdown pointing='top left' text='Ahmet Tanrıkulu'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Bilgilerim' icon='info' />
                    <Dropdown.Item onClick={signOut} text='ÇIKIŞ YAP' icon='out' />
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
