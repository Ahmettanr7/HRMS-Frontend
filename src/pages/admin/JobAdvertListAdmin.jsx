import React, { useState, useEffect } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertListAdmin() {

    let jobAdvertService = new JobAdvertService();
    const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    jobAdvertService.getAll().then((result) => setJobAdverts(result.data.data));
  }, []);

  let confirm = (jobAdvertId) => {
    jobAdvertService.confirmAdvert(jobAdvertId).then(result => {
      console.log(result.data);;
    })
  };

  let remove = (jobAdvertId) => {
    jobAdvertService.closeAdvertAdmin(jobAdvertId).then(result => {
      console.log(result.data);;
    })
  };

    return (
        <div>
            <Table striped>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>İlan ID</Table.HeaderCell>
        <Table.HeaderCell>Şirket</Table.HeaderCell>
        <Table.HeaderCell>Şehir</Table.HeaderCell>
        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
        <Table.HeaderCell>Alım Miktarı</Table.HeaderCell>
        <Table.HeaderCell>Çalışma Ortamı</Table.HeaderCell>
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
          <Table.Cell>{jobAdvert.jobAdvertId}</Table.Cell>
        <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
        <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
        <Table.Cell>{jobAdvert.position.positionName}</Table.Cell>
        <Table.Cell>{jobAdvert.quantity}</Table.Cell>
        <Table.Cell>{jobAdvert.jobTypePlace.placeTypeName}</Table.Cell>
        <Table.Cell>{jobAdvert.jobTypeTime.timeTypeName}</Table.Cell>
        <Table.Cell>{jobAdvert.advertDate}</Table.Cell>
        <Table.Cell>{jobAdvert.dueDate}</Table.Cell>
        <Table.Cell>
            {jobAdvert.activityStatus?
            <Button style={{width:'80%'}} color='green' active icon labelPosition="left"><Icon name='info'/>{jobAdvert.adStatusDescription}</Button>:
            <Button style={{width:'80%'}} color='yellow' active icon labelPosition="left"><Icon name='info'/>{jobAdvert.adStatusDescription}</Button>}
            </Table.Cell>
        <Table.Cell><Button  onClick={() => confirm(jobAdvert.jobAdvertId)} color='green' icon labelPosition="left"><Icon color='white' name='checkmark' size='large'/> YAYINLA</Button></Table.Cell>
        <Table.Cell><Button  onClick={() => remove(jobAdvert.jobAdvertId)} color='red' icon labelPosition="left"><Icon color='white' name='remove circle' size='large' /> KALDIR</Button></Table.Cell>
      </Table.Row>
      ))}
    </Table.Body>
  </Table>
        </div>
    )
}
