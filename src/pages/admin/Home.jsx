import React, { useState, useEffect } from "react";
import { Card, Icon, Image, Button, Input } from "semantic-ui-react";
import SystemEmployeeService from "../../services/systemEmployeeService";
import Update from "./Update";

export default function Home() {
  const userId = 61; // JWT eklendikten sonra bütün manuel taraflar değişecek :))

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    let systememployeeService = new SystemEmployeeService();
    systememployeeService
      .getByUserId(userId)
      .then((result) => setEmployee(result.data.data));
  }, []);

  return (
    <div>
      <Update
        triggerButtonnn={
          <Button floated="right" primary icon labelPosition="left">
            <Icon name="edit" />
            Düzenle
          </Button>
        }
      />
      <Card centered style={{ width: "30%" }}>
        {employee?.imageUrl ? (
          <Image bordered centered size="small" src={employee?.imageUrl} />
        ) : (
          <Image
            bordered
            centered
            size="small"
            src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"
          />
        )}
        <Card.Content>
          <Card.Header>
            {employee.firstName} {employee.lastName}
          </Card.Header>
          <Card.Description>
            <b>Email :</b> <br />
            {employee.email}
          </Card.Description>
          <Card.Description className="mt1em">
            <b>Telefon No :</b> <br />
            {employee.phoneNumber}
          </Card.Description>
        </Card.Content>
        <Card.Meta className="mt1em">
          <span className="date">Katılma tarihi {employee.dateOfStart}</span>
        </Card.Meta>
        <Card.Content extra></Card.Content>
      </Card>
    </div>
  );
}
