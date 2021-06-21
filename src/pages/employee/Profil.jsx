import React, { useState, useEffect } from "react";
import {  Icon, Button, Segment } from "semantic-ui-react";
import EmployeeService from "../../services/employeeService";
import EmployeePriview from "../../layouts/employee/cv/EmployeePreview";
import EducationPriview from "../../layouts/employee/cv/EducationPriview";
import ExperiencePriview from "../../layouts/employee/cv/ExperiencePreview";
import AbilityPreview from "../../layouts/employee/cv/AbilityPriview";
import LanguagePreview from "../../layouts/employee/cv/LanguagePreview";
import SingleInfosPreview from "../../layouts/employee/cv/SingleInfosPreview";

export default function Home() {
  const userId = 40;

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getByUserId(userId)
      .then((result) => setEmployee(result.data.data));
  }, []);

  return (
    <div>
      <Button floated="right" icon>
        PROFİLİ DÜZENLE <Icon name="edit"></Icon>
      </Button>
      {/* <Card style={{width:"30%"}}>
    <Image src={employee?.image?.imageUrl} wrapped size='small' style={{width:"100%" ,maxHeight:"500px"}}/>
    <Card.Content>
      <Card.Header>{employee.firstName} {employee.lastName}</Card.Header>
      <Card.Description>
        <b>Email :</b> <br />
        {employee.email}
      </Card.Description>
      <Card.Description className="mt1em">
        <b>Telefon No :</b> <br />
        {employee.phoneNumber}
      </Card.Description>
      <Card.Description>
      <b>Tc Kimlik No :</b> <br />
        {employee.nationalityId}
      </Card.Description>
    </Card.Content>
    <Card.Meta className="mt1em">
        <span className='date'>Doğum tarihi {employee.birthDate}</span>
      </Card.Meta>
    <Card.Meta className="mt1em">
        <span className='date'>Katılma tarihi {employee.creationDate}</span>
      </Card.Meta>
  </Card> */}
      <Segment color="blue">
        <EmployeePriview />

        <EducationPriview />

        <ExperiencePriview />

        <AbilityPreview />

        <LanguagePreview />

        <SingleInfosPreview />
      </Segment>
    </div>
  );
}
