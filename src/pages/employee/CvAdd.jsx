import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import EducationAdd from "../../layouts/employee/cv/EducationAdd";
import ExperienceAdd from "../../layouts/employee/cv/ExperienceAdd";
import AbilityAdd from "../../layouts/employee/cv/AbilityAdd";
import LanguageAdd from "../../layouts/employee/cv/LanguageAdd";
import SingleInfosAdd from "../../layouts/employee/cv/SingleInfosAdd";
import EmployeePriview from "../../layouts/employee/cv/EmployeePreview";
import EducationPriview from "../../layouts/employee/cv/EducationPriview";
import ExperiencePriview from "../../layouts/employee/cv/ExperiencePreview";
import AbilityPreview from "../../layouts/employee/cv/AbilityPriview";
import LanguagePreview from "../../layouts/employee/cv/LanguagePreview";
import SingleInfosPreview from "../../layouts/employee/cv/SingleInfosPreview";

export default function CvAdd() {

    
      
  return (
    <div>
      <Grid>
        <Grid.Column width="8">
            <EducationAdd/>
        
            <ExperienceAdd/>

            <AbilityAdd/>
          
            <LanguageAdd/>
          
            <SingleInfosAdd/>
        </Grid.Column>
        <Grid.Column width="8">
        <Segment color="blue">
            <EmployeePriview/>

            <EducationPriview/>

            <ExperiencePriview/>

            <AbilityPreview/>

            <LanguagePreview/>

            <SingleInfosPreview/>
        </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
