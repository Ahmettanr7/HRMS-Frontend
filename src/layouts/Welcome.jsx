import React from "react";
import {  Grid, GridColumn, Image } from 'semantic-ui-react';
import WelcomeEmployee from "./WelcomeEmployee";
import WelcomeEmployer from "./WelcomeEmployer";
import WelcomeLetsStart from "./WelcomeLetsStart";

export default function Welcome() {
  return (
    <div>
      <Image centered id='welcome-image' className='mt1bem' src='https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623244779/DENEME3_f0oxeu.png'>
      </Image>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} floated="left">
                <WelcomeEmployee></WelcomeEmployee>
            </Grid.Column>
            <GridColumn width={8} floated="right">
                <WelcomeEmployer></WelcomeEmployer>
            </GridColumn>
          </Grid.Row>
        </Grid>
        <WelcomeLetsStart></WelcomeLetsStart>
    </div>
  );
}
