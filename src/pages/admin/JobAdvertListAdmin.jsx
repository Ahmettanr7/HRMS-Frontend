import React, { useState, useEffect } from "react";
import { Table, Button, Icon, Confirm } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import { useToasts } from "react-toast-notifications";

export default function JobAdvertListAdmin() {

  
  const { addToast } = useToasts();
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getAll().then((result) => setJobAdverts(result.data.data));
  }, []);

  let confirm = (jobAdvertId) => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.confirmAdvert(jobAdvertId).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  let remove = (jobAdvertId) => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.closeAdvertAdmin(jobAdvertId).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  return (
    <div>
      <Table striped celled selectable style={{ marginLeft: "-1em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İlan ID</Table.HeaderCell>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Alım Miktarı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru</Table.HeaderCell>
            <Table.HeaderCell>İlan Durum Açıklaması</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert, key) => (
            <Table.Row key={key}>
              <Table.Cell positive>{jobAdvert.jobAdvertId}</Table.Cell>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvert.position.positionName}</Table.Cell>
              <Table.Cell>{jobAdvert.quantity}</Table.Cell>
              <Table.Cell>
                {jobAdvert.jobTypePlace.placeTypeName} -{" "}
                {jobAdvert.jobTypeTime.timeTypeName}
              </Table.Cell>
              <Table.Cell>{jobAdvert.advertDate}</Table.Cell>
              <Table.Cell>{jobAdvert.dueDate}</Table.Cell>
              <Table.Cell>
                {jobAdvert.activityStatus ? (
                  <Button
                    style={{ width: "100%" }}
                    color="green"
                    active
                    icon
                    labelPosition="left"
                  >
                    <Icon name="info" />
                    {jobAdvert.adStatusDescription}
                  </Button>
                ) : (
                  <Button
                    style={{ width: "100%" }}
                    color="yellow"
                    active
                    icon
                    labelPosition="left"
                  >
                    <Icon name="info" />
                    {jobAdvert.adStatusDescription}
                  </Button>
                )}
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => confirm(jobAdvert.jobAdvertId)}
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" /> YAYINLA
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => remove(jobAdvert.jobAdvertId)}
                  
                  color="red"
                  icon
                  labelPosition="left"
                >
                  <Icon name="remove circle" size="large" /> KALDIR
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
