import { Item, Segment, List, Label, Icon, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"
import { useToasts } from "react-toast-notifications";
import { Route } from "react-router-dom";

export default function EducationPriview() {
  const { addToast } = useToasts();
  const userId = 40;

  const [educations, setEducations] = useState([]);

  useEffect(() => {
    let cvService = new CurriculumVitaeService();
    cvService
      .getEducationsByUserId(userId)
      .then((result) => setEducations(result.data.data));
  }, []);

  let remove = (educationId) => {
    let cvService = new CurriculumVitaeService();
    cvService.deleteEducation(educationId).then((result) => {
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
                content="Eğitim Bilgileri"
                color="blue"
                attached="top"
                pointing="below"
              />
              <List verticalAlign="middle">
                {educations.map((education) => (
                  <List.Item>
                    <List.Content key={education.id} className="mt1bem">
                      {education.graduationStatus == true && (
                        <List.Icon circular name="graduation cap"></List.Icon>
                      )}
                      {education.graduationStatus == false && (
                        <Label basic ribbon pointing="below" color="orange">
                          Devam Ediyor
                        </Label>
                      )}
                      <List.Header>
                        <Icon size="small" name="circle" />
                        {education.universityName}
                      </List.Header>
                      <List.Description>
                        <Icon name="caret right" />
                        {education.department}
                      </List.Description>
                      <List.Description>
                        Kayıt : {education.startingDate}
                      </List.Description>
                      {education.graduationDate && (
                        <List.Description>
                          Mezun : {education.graduationDate}
                        </List.Description>
                      )}
                    </List.Content>
                    {
                      <Route exact path="/employee/cv">
                        <Button
                          onClick={() => remove(education.educationId)}
                          negative
                          icon
                        >
                          <Icon name="remove circle" />
                        </Button>
                      </Route>
                    }
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
