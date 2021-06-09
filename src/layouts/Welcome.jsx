import React from "react";
import {  Grid, GridColumn, Image } from 'semantic-ui-react';
import Navi from "./Navi";
import Footer from "./Footer";
import Deneme1 from "./Deneme1";
import Deneme2 from "./Deneme2";
import Deneme3 from "./Deneme3";

export default function Welcome() {
  return (
    <div>
      <Navi></Navi>
      <Image centered id='welcome-image' className='mt1bem' src='https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623244779/DENEME3_f0oxeu.png'>
      </Image>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} floated="left">
                <Deneme1></Deneme1>
            </Grid.Column>
            <GridColumn width={8} floated="right">
                <Deneme2></Deneme2>
            </GridColumn>
          </Grid.Row>
        </Grid>
        <Deneme3></Deneme3>
      <Footer></Footer>
    </div>
  );
}
