import React from 'react'
import { Route } from "react-router";
import {  Grid, Segment } from 'semantic-ui-react';
import CvAdd from '../../pages/employee/CvAdd'
import Profil from '../../pages/employee/Profil'
import SavedAdverts from '../../pages/employee/SavedAdverts';
import EmployeeMenu from './EmployeeMenu'

export default function EmployeeDashboard() {
    return (
        <div>
        <Grid>
          <Grid.Column width={3}>
          <Route exact path='/employee' component={EmployeeMenu}/>
          <Route exact path='/employee/saved' component={EmployeeMenu}/>
          <Route exact path='/employee/cv' component={EmployeeMenu}/>
          </Grid.Column>
          <Grid.Column style={{marginLeft:'2em'}} stretched width={12}>
            <Segment>
              <Route exact path='/employee' component={Profil}/>
              <Route exact path='/employee/saved' component={SavedAdverts}/>
            <Route exact path='/employee/cv' component={CvAdd}/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
}
