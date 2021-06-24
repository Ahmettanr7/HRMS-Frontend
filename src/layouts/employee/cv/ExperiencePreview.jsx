import { Item, Segment, List, Label, Icon,Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"
import { useToasts } from "react-toast-notifications";
import { Route } from "react-router-dom";

export default function ExperiencePriview() {

  const { addToast } = useToasts();

  const userId = 56;

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    let cvService = new CurriculumVitaeService();
    cvService
      .getExperiencesByUserId(userId)
      .then((result) => setExperiences(result.data.data));
  }, []);

  let remove = (id) => {
    let cvService = new CurriculumVitaeService();
    cvService.deleteExperience(id).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  return (
    <div>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Label
              basic
              content="Tecrübe Bilgileri"
              color="blue"
              attached="top"
              pointing="below"
            />
              <List verticalAlign="middle">
              {experiences.map((experience) => (
                <List.Item>
                  <List.Content key={experience.experienceId} className="mt1bem">
                      {experience.workingStatus_b == true && (
                        <Label basic ribbon pointing="below" color='orange'>
                        Devam Ediyor
                      </Label>
                      )}
                    <List.Header><Icon size='small' name="circle"/>{experience.companyName}</List.Header>
                    <List.Description><Icon name="caret right"/>{experience.position}</List.Description>
                    <List.Description>Giriş : {experience.dateOfStart}</List.Description>
                    {experience.quitDate&&<List.Description>
                        Çıkış : {experience.quitDate}
                      </List.Description>}
                  </List.Content>
                  {<Route exact path="/employee/cv"><Button
                        onClick={() => remove(experience.experienceId)}
                        negative
                        icon
                      >
                        <Icon name="remove circle"/>
                      </Button></Route>}
                </List.Item>
                ))}
              </List>
            </Item.Content>
          </Item>
        </Item.Group>
         
      </Segment>
    </div>
  );
}
