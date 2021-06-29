import React, { useState, useEffect } from "react";
import { Card, Icon, Image, Button, Input } from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import Update from "./update";

export default function Home() {
  const userId = 59;

  const [employer, setEmployer] = useState({});

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByUserId(userId)
      .then((result) => setEmployer(result.data.data));
  }, []);

  return (
    <div>
      <Update
        triggerButton={
          <Button floated="right" primary icon labelPosition="left">
            <Icon name="edit" />
            Düzenle
          </Button>
        }
      />
      <Card centered style={{ width: "30%" }}>
        {employer?.imageUrl ? (
          <Image bordered centered size="small" src={employer?.imageUrl} />
        ) : (
          <Image
            bordered
            centered
            size="small"
            src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"
          />
        )}
        <Card.Content>
          <Card.Header>{employer.companyName}</Card.Header>
          <Card.Description>
            <b>Email :</b> <br />
            {employer.email}
          </Card.Description>
          <Card.Description className="mt1em">
            <b>Telefon No :</b> <br />
            {employer.phoneNumber}
          </Card.Description>
          <Card.Description>
            <b>Vergi No :</b> <br />
            {employer.taxNumber}
          </Card.Description>
        </Card.Content>
        <Card.Meta className="mt1em">
          <span className="date">Katılma tarihi {employer.creationDate}</span>
        </Card.Meta>
        <Card.Content extra>
          <a>
            <Icon name="world" />
            {employer.webSite}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}
