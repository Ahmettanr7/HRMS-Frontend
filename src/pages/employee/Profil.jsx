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
  const userId = 56;

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
