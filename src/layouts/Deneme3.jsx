import React from 'react'
import { Container, Grid, GridColumn, GridRow, Image, Button } from 'semantic-ui-react';

export default function Deneme3() {
    return (
        <div>
            <Container>
                <Grid>
                    <GridRow>
                        <GridColumn floated='left' width={3}>
                        <Button className='button-end-size' inverted circular color='green'><i class="handshake icon"></i><h3 class="ui header">HAYALİNDEKİ <br /> İŞE <br /> KAVUŞ</h3></Button>                         
                        <Button className='button-end-size' positive circular><i class="handshake icon"></i><h3 class="ui header">HADİ TIKLA BAŞLAYALIM !</h3></Button>
                        </GridColumn>
                        <GridColumn floated='left'  width={10}>
                        <Image id='imamge-end'  src='https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623236081/Online-Interview-Inlea_dszrkf.png'></Image>

                        </GridColumn>
                        <GridColumn floated='left' width={3}>
                        <Button className='button-end-size' inverted circular color='green'><i class="handshake icon"></i><h3 class="ui header">MARKA DEĞERİNİ YÜKSELTECEK KİŞİLERE KAVUŞ</h3></Button>
                        <Button className='button-end-size' positive circular><i class="handshake icon"></i><h3 class="ui header">HADİ TIKLA BAŞLAYALIM !</h3></Button>
                        </GridColumn>
                    </GridRow>
                </Grid>         
            </Container>
        </div>
    )
}
