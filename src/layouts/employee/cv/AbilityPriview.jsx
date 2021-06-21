import { Item, Segment, List, Label, Icon, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"
import { useToasts } from "react-toast-notifications";
import { Route } from "react-router-dom";

export default function AbilityPreview() {
  const { addToast } = useToasts();

  const userId = 40;

  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    let cvService = new CurriculumVitaeService();
    cvService
      .getAbilitiesByUserId(userId)
      .then((result) => setAbilities(result.data.data));
  }, []);

  let remove = (id) => {
    let cvService = new CurriculumVitaeService();
    cvService.deleteAbility(id).then((result) => {
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
                content="Yetenek Bilgileri"
                color="blue"
                attached="top"
                pointing="below"
              />
              <List verticalAlign="middle">
                {abilities.map((ability) => (
                  <List.Item>
                    <List.Content key={ability.abilityId} className="mt1bem">
                      <List.Header>
                        <Icon size="small" name="circle" />
                        {ability.abilityName}
                      </List.Header>
                    </List.Content>
                    {
                      <Route exact path="/employee/cv">
                        <Button
                          onClick={() => remove(ability.abilityId)}
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
