import React from 'react'
import { Container, Grid, GridColumn, GridRow, Image, Button } from 'semantic-ui-react';

export default function Deneme2() {
    return (
        <div>
            <Container>
            <h1 class="ui header mt1bem">İŞVEREN</h1>
                <Grid>
                    <GridRow>
                        <GridColumn floated='left'  width={6}>
                        <Button className='button-size' primary inverted circular><i class="hand point down outline icon"></i><h3 class="ui header">iŞVEREN HESABINI OLUŞTUR</h3></Button>
                        <Button className='button-size' primary inverted circular><i class="hand point down outline icon"></i><h3 class="ui header">FİRMA BİLGİLERİNİ GİR</h3></Button>
                        <Button className='button-size' primary inverted circular><i class="hand point down outline icon"></i><h3 class="ui header">ARADIĞIN POZİSYONU YAYINLA</h3></Button>
                        </GridColumn>
                        <GridColumn floated='right'  width={9}>
                            <Image className='img-size' src='https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623236079/sanal-mulakat-vector2_fp7mla.png'></Image>
                        </GridColumn>
                    </GridRow>
                </Grid>         
            </Container>
        </div>
    )
}
