import React from 'react'
import { Container, Grid, GridColumn, GridRow, Image, Button } from 'semantic-ui-react';

export default function WelcomeEmployee() {
    return (
        <div>
            <Container>
            <h1 class="ui header mt1bem">İŞ ARAYAN</h1>
                <Grid>
                    <GridRow>
                        <GridColumn  width={9}>
                            <Image className='img-size' src='https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623236079/Online-Interview-Inlea-2_ywioaj.png'></Image>
                        </GridColumn>
                        <GridColumn floated='left'  width={6}>
                        <Button className='button-size' primary inverted circular><i class="hand point down outline icon"></i><h3 class="ui header">HESABINI OLUŞTUR</h3></Button>
                        <Button className='button-size' primary inverted circular><i class="hand point down outline icon"></i><h3 class="ui header">ZENGİN CV'Nİ OLUŞTUR</h3></Button>
                        <Button className='button-size' primary inverted circular><i class="hand point down outline icon"></i><h3 class="ui header">İŞ FIRSATLARINI KOVALA</h3></Button>
                        </GridColumn>
                    </GridRow>
                    
                </Grid>
                
            </Container>
            
            
        </div>
    )
}
