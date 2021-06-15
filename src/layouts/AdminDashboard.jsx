import React from "react";
import { Grid,  GridColumn,  Segment } from "semantic-ui-react";
import { Route } from "react-router";
import JobAdvertListAdmin from "../pages/admin/JobAdvertListAdmin";
import EmployeeList from "../pages/admin/EmployeeList";
import AdminMenu from "../layouts/AdminMenu";
import EmployerList from "../pages/admin/EmployerList";
import SystemEmployeeList from "../pages/admin/SystemEmployeeList";

export default function AdminDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Column width={3}>
          <Route exact path='/admin' component={AdminMenu}/>
          <Route exact path='/admin/jobadvertlist' component={AdminMenu}/>
          <Route exact path='/admin/employeelist' component={AdminMenu}/>
          <Route exact path='/admin/employerlist' component={AdminMenu}/>
          <Route exact path='/admin/systememployeelist' component={AdminMenu}/>
        </Grid.Column>
        <Grid.Column style={{marginLeft:'2em'}} stretched width={12}>
          <Segment>
            <Route exact path="/admin/jobadvertlist" component={JobAdvertListAdmin} />
            <Route exact path="/admin/employeelist/" component={EmployeeList} />
            <Route exact path="/admin/employerlist/" component={EmployerList} />
            <Route exact path="/admin/systememployeelist/" component={SystemEmployeeList} />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
