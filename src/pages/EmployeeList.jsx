import React, { useState, useEffect } from "react";
import EmployeeService from "../services/employeeService";
import { Table } from "semantic-ui-react";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeService = new EmployeeService();
    employeService.getEmployees().then((result) => setEmployees(result.data.data));
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <Table celled selectable>
        <Table.Header inverted>
          <Table.Row>
            <Table.HeaderCell>Kullanıcı Id</Table.HeaderCell>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>TC Kimlik No</Table.HeaderCell>
            <Table.HeaderCell>Doğum günü</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Telefon numarası</Table.HeaderCell>
            <Table.HeaderCell>Kayıt olma tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.userId}>
              <Table.Cell>{employee.userId}</Table.Cell>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastName}</Table.Cell>
              <Table.Cell>{employee.nationalityId}</Table.Cell>
              <Table.Cell>{employee.birthDate}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
              <Table.Cell>{employee.phoneNumber}</Table.Cell>
              <Table.Cell>{employee.creationDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
