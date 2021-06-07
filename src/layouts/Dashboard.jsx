import { Container, Grid, GridColumn } from 'semantic-ui-react';
import Navi from './Navi';
import Filter from './Filter';
import JobAdvertList from '../pages/JobAdvertList';
import SearchFilter from './SearchFilter';
import Footer from './Footer';

export default function Dashboard() {
    return (
        <div>
            <Navi></Navi>
      <Container className="mt1em">
      <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                      <Filter></Filter>
                    </Grid.Column>
                    <GridColumn width={9} >
                    <JobAdvertList></JobAdvertList>
                    </GridColumn>
                    <Grid.Column width={3}floated="left">   
                      <SearchFilter></SearchFilter>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </Container>
      <Footer></Footer>
        </div>
    )
}
