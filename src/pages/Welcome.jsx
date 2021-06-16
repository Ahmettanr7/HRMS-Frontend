import React from "react";
import {  Grid, GridColumn, Image } from 'semantic-ui-react';
import WelcomeEmployee from "../layouts/WelcomeEmployee";
import WelcomeEmployer from "../layouts/WelcomeEmployer";
import WelcomeLetsStart from "../layouts/WelcomeLetsStart";

export default function Welcome() {
  return (
    <div>
      <Image centered id='welcome-image' className='mt1bem' src='https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623244779/DENEME3_f0oxeu.png'>
      </Image>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} floated="left">
                <WelcomeEmployee/>
            </Grid.Column>
            <GridColumn width={8} floated="right">
                <WelcomeEmployer/>
            </GridColumn>
          </Grid.Row>
        </Grid>
        <WelcomeLetsStart/>
    </div>
  );
}
