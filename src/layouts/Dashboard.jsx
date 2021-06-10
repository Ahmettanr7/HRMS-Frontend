import { Container, Grid, GridColumn } from 'semantic-ui-react';
import Navi from './Navi';
import Filter from './Filter';
import JobAdvertList from '../pages/JobAdvertList';
import JobAdvertDetail from '../pages/JobAdvertDetail';
import SearchFilter from './SearchFilter';
import Footer from './Footer';
import BackgroundRight from './BackgroundRight';
import BackgroundLeft from './BackgroundLeft';
import { Route } from 'react-router';
import Welcome from './Welcome';

export default function Dashboard() {
    return (
        <div>
            <Navi></Navi>
            <Route exact path='/' component={Welcome}/>
      <Container className="mt1em">
      <Grid>
                <Grid.Row>
                    <Grid.Column width={4} floated='left' >
                    <Route exact path='/jobs' component={BackgroundLeft}/>
                    <Route exact path='/jobs' component={Filter}/>
                    <Route exact path='/jobs/:jobAdvertId' component={BackgroundLeft}/>
                    <Route exact path='/jobs/:jobAdvertId' component={Filter}/>
                    </Grid.Column>
                    <GridColumn width={8} floated='right' >
                    <Route exact path='/jobs' component={JobAdvertList}/>
                    <Route exact path='/jobs/:jobAdvertId' component={JobAdvertDetail}/>
                    </GridColumn>
                    <Grid.Column width={4} >
                    <Route exact path='/jobs' component={SearchFilter}/>
                    <Route exact path='/jobs' component={BackgroundRight}/>
                    <Route exact path='/jobs/:jobAdvertId' component={SearchFilter}/>
                    <Route exact path='/jobs/:jobAdvertId' component={BackgroundRight}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </Container>
      <Footer></Footer>
        </div>
    )
}
