import { Container, Grid, GridColumn } from 'semantic-ui-react';
import Navi from './Navi';
import Filter from './Filter';
import JobAdvertDetail from '../../pages/JobAdvertDetail';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import Footer from './Footer';
import { Route } from 'react-router';
import Welcome from '../../pages/Welcome';
import SignUpEmployer from '../../pages/SignUpEmployer';
import JobAdvertList from '../../pages/JobAdvertList';
import FilterTop from './FilterTop';

export default function Dashboard() {
    return (
        <div>
            <Navi></Navi>
            <Route exact path='/jobs' component={FilterTop}/>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/login' component={SignIn}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/signupemployer' component={SignUpEmployer}/>
            
      <Container className="mt1em">
      <Grid>
                <Grid.Row>
                    <Grid.Column width={5} floated='left' >
                    <Route exact path='/jobs' component={Filter}/>
                    <Route exact path='/jobs/:jobAdvertId' component={Filter}/>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                    <GridColumn width={9} floated='right' >
                    <Route exact path='/jobs' component={JobAdvertList}/>
                    <Route exact path='/jobs/:jobAdvertId' component={JobAdvertDetail}/>
                    </GridColumn>
                    {/* <Grid.Column width={4} >
                    <Route exact path='/jobs' component={SearchFilter}/>
                    <Route exact path='/jobs/:jobAdvertId' component={SearchFilter}/>
                    </Grid.Column> */}
                </Grid.Row>
            </Grid>
      </Container>
      <Route exact path='/' component={Footer}/>
      <Route exact path='/jobs' component={Footer}/>
        </div>
    )
}
