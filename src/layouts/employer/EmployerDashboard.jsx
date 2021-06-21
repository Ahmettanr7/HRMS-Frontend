import React from "react";
import { Route } from "react-router";
import {  Grid, Segment } from 'semantic-ui-react';
import Home from "../../pages/employer/Home";
import JobAdvertListEmployer from '../../pages/employer/jobAdvertListEmployer';
import EmployerMenu from "./EmployerMenu";

export default function EmployerDashboard (){
  return (
    <div>
      <Grid>
        <Grid.Column width={3}>
        <Route exact path='/employer' component={EmployerMenu}/>
        <Route exact path='/employer/jobadvertlist' component={EmployerMenu}/>
        </Grid.Column>
        <Grid.Column style={{marginLeft:'2em'}} stretched width={12}>
          <Segment>
            <Route exact path='/employer' component={Home}/>
          <Route exact path='/employer/jobadvertlist' component={JobAdvertListEmployer}/>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
