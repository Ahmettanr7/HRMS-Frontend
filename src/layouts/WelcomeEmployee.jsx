import React from 'react'
import { Container, Grid, GridColumn, GridRow, Image, Button } from 'semantic-ui-react';

export default function WelcomeEmployee() {
    return (
        <div>
            <Container>
            <h1 className="ui header mt1bem">İŞ ARAYAN</h1>
                <Grid>
                    <GridRow>
                        <GridColumn  width={9}>
                            <Image className='img-size' src='https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623236079/Online-Interview-Inlea-2_ywioaj.png'></Image>
                        </GridColumn>
                        <GridColumn floated='left'  width={6}>
                        <Button className='button-size' primary inverted circular><i className="hand point down outline icon"></i><h3 className="ui header">HESABINI OLUŞTUR</h3></Button>
                        <Button className='button-size' primary inverted circular><i className="hand point down outline icon"></i><h3 className="ui header">ZENGİN CV'Nİ OLUŞTUR</h3></Button>
                        <Button className='button-size' primary inverted circular><i className="hand point down outline icon"></i><h3 className="ui header">İŞ FIRSATLARINI KOVALA</h3></Button>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container>   
        </div>
    )
}
