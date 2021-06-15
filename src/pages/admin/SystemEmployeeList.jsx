import React, { useState, useEffect } from "react";
import SystemEmployeeService from "../../services/systemEmployeeService";
import SystemEmployeeAdd from "./SystemEmployeeAdd";
import { Table, Button, Icon } from "semantic-ui-react";
import { success, error } from 'react-toast-notification';

export default function SystemEmployeeList() {
  const [systemEmployees, setSystemEmployees] = useState([]);

  useEffect(() => {
    let systemEmployeeService = new SystemEmployeeService();
    systemEmployeeService.getSystemEmployees().then((result) => setSystemEmployees(result.data.data));
  }, []);

  return (
    <div>
      <h1>SİSTEM ÇALIŞANLARI</h1>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kullanıcı Id</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>İşe Başlama Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Telefon numarası</Table.HeaderCell>
            <Table.HeaderCell><SystemEmployeeAdd
                triggerButtonn={
                  <Button
                  style={{width:'100%'}}
                  primary icon labelPosition="left">
                    <Icon name="add" />
                    Yeni Sistem Çalışanı Kaydı
                  </Button>
                }
              /></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {systemEmployees.map((employee) => (
            <Table.Row key={employee.userId}>
              <Table.Cell>{employee.userId}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastName}</Table.Cell>
              <Table.Cell>{employee.dateOfStart}</Table.Cell>
              <Table.Cell>{employee.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
