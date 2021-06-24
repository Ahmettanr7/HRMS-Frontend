import { Item, Segment, List, Label, Icon, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"
import { useToasts } from "react-toast-notifications";
import { Route } from "react-router-dom";

export default function LanguagePreview() {
  const { addToast } = useToasts();

  const userId = 56;

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let cvService = new CurriculumVitaeService();
    cvService
      .getLanguagesByUserId(userId)
      .then((result) => setLanguages(result.data.data));
  }, []);

  let remove = (id) => {
    let cvService = new CurriculumVitaeService();
    cvService.deleteLanguage(id).then((result) => {
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
                content="Yabancı Dil Bilgileri"
                color="blue"
                attached="top"
                pointing="below"
              />
              <List verticalAlign="middle">
                {languages.map((language) => (
                  <List.Item>
                    <List.Content key={language.languageId} className="mt1bem">
                      <List.Header>
                        <Icon size="small" name="circle" />
                        {language.language}
                      </List.Header>
                      <List.Description>
                        <Icon name="caret right" />
                        Seviye : {language.level_}
                      </List.Description>
                    </List.Content>
                    {
                      <Route exact path="/employee/cv">
                        <Button
                          onClick={() => remove(language.languageId)}
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
