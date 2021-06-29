import React, { useState, useEffect } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import EmployerUpdateService from "../../services/employerUpdateService";
import { useToasts } from "react-toast-notifications";

export default function EmployerUpdates() {

    const { addToast } = useToasts();
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    let employerUpdateService = new EmployerUpdateService();
    employerUpdateService
      .getAllPendingUpdates()
      .then((result) => setUpdates(result.data.data));
  }, []);

  let confirm = (id) => {
    let employerUpdateService = new EmployerUpdateService();
    employerUpdateService.confirm(id).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  return (
    <div>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İlan ID</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Web Site</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Resim Yolu</Table.HeaderCell>
            <Table.HeaderCell>Güncelleme Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Durumu</Table.HeaderCell>
            <Table.HeaderCell>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {updates.map((update, key) => (
            <Table.Row key={key}>
              <Table.Cell>{update.updateId}</Table.Cell>
              <Table.Cell>{update.companyName}</Table.Cell>
              <Table.Cell>{update.webSite}</Table.Cell>
              <Table.Cell>{update.email}</Table.Cell>
              <Table.Cell>{update.phoneNumber}</Table.Cell>
              <Table.Cell><a href={update.imageUrl}>Resim Yolu</a></Table.Cell>
              <Table.Cell>{update.updateDate}</Table.Cell>
              <Table.Cell>
                {update.approvalStatus ? (
                  <Button
                    style={{ width: "80%" }}
                    color="green"
                    active
                    icon
                    labelPosition="left"
                  >
                    <Icon name="info" />
                    {update.updateStatus}
                  </Button>
                ) : (
                  <Button
                    style={{ width: "80%" }}
                    color="yellow"
                    active
                    icon
                    labelPosition="left"
                  >
                    <Icon name="info" />
                    {update.updateStatus}
                  </Button>
                )}
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => confirm(update.updateId)}
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" /> ONAYLA
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
