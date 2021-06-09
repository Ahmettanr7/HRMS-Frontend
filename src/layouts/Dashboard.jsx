import { Container, Grid, GridColumn } from 'semantic-ui-react';
import Navi from './Navi';
import Filter from './Filter';
import JobAdvertList from '../pages/JobAdvertList';
import SearchFilter from './SearchFilter';
import Footer from './Footer';
import BackgroundRight from './BackgroundRight';
import BackgroundLeft from './BackgroundLeft';

export default function Dashboard() {
    return (
        <div>
            <Navi></Navi>
            
      <Container className="mt1em">
      <Grid>
                <Grid.Row>
                    <Grid.Column width={4} floated='left' >
                    <BackgroundLeft></BackgroundLeft>
                    <Filter></Filter>
                    </Grid.Column>
                    <GridColumn width={8} floated='right' >
                    <JobAdvertList></JobAdvertList>
                    </GridColumn>
                    <Grid.Column width={4} >
                    <SearchFilter></SearchFilter>   
                    <BackgroundRight></BackgroundRight>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </Container>
      <Footer></Footer>
        </div>
    )
}
