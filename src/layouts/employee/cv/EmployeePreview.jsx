import { Item, Segment } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import EmployeeService from "../../../services/employeeService";

export default function EmployeePreview() {
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
      <Segment>
        <Item.Group>
            <Item>
              <Item.Image size="tiny"  src={employee.imageUrl} />
              <Item.Content >
                <Item.Header>
                  {employee.firstName} {employee.lastName}
                </Item.Header>
                <Item.Meta>
                  <b>Doğum Tarihi : </b>
                  {employee.birthDate}
                </Item.Meta>
                <Item.Meta>
                  <b>Email : </b>
                  {employee.email}
                </Item.Meta>
                <Item.Meta>
                  <b>Telefon : </b>
                  {employee.phoneNumber}
                </Item.Meta>
              </Item.Content>
            </Item>
        </Item.Group>
        </Segment>
      </div>
  );
}
