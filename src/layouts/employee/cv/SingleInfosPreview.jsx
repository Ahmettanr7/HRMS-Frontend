import { Item, Segment, List, Label, Icon, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"
import { useToasts } from "react-toast-notifications";
import { Route } from "react-router-dom";

export default function SingleInfosPreview() {

  const { addToast } = useToasts();
  const userId = 56;

  const [singleInfo, setSingleInfo] = useState({});

  useEffect(() => {
    let cvService = new CurriculumVitaeService();
    cvService
      .getSingleInfoByUserId(userId)
      .then((result) => setSingleInfo(result.data.data));
  }, []);

  let remove = (id) => {
    let cvService = new CurriculumVitaeService();
    cvService.deleteSingleInfo(id).then((result) => {
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
                content="Ek Bilgiler"
                color="blue"
                attached="top"
                pointing="below"
              />
              <List verticalAlign="middle">
                <List.Item>
                  <List.Content
                    key={singleInfo?.singleInfosId}
                    className="mt1bem"
                  >
                    {singleInfo?.github&&<List.Header>
                      <Icon name="github"/> <br />
                      <Icon size="small" name="circle" />
                      <a href={singleInfo?.github} target="_blank">
                        {singleInfo?.github}
                      </a>
                    </List.Header>}
                    {singleInfo?.linkedin&&<List.Header>
                      <Icon name="linkedin"/><br />
                      <Icon size="small" name="circle" />
                      <a href={singleInfo?.linkedin} target="_blank">
                        {singleInfo?.linkedin}
                      </a>
                    </List.Header>}
                    {singleInfo?.coverLetter&&<List.Description className="mt1bem">
                      <b>ÖN YAZI</b> <br />
                      <Icon size="small" name="circle" />
                      {singleInfo?.coverLetter}
                    </List.Description>}
                  </List.Content>
                  {singleInfo?.coverLetter&&<Route exact path="/employee/cv"><Button
                  onClick={() => remove(singleInfo.singleInfosId)}
                  negative
                  icon
                >
                  <Icon name="remove circle"/>
                </Button></Route>}
                </List.Item>
              </List>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </div>
  );
}
