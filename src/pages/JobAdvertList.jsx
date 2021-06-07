import React, { useState, useEffect } from "react";
import { Button, Card, CardGroup, Image } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getActiveJobAdvertsDto()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  return (
    <div>
      <CardGroup>
        {jobAdverts.map((jobAdvert) => (
          <Card
            className="jobAdvertCard"
            floated="right"
            link
            key={jobAdvert.jobAdvertId}>
            <Card.Content>
              <Image
                floated="left"
                size="mini"
                src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1622667029/sample.jpg"
              />
              <Card.Header textAlign="center">{jobAdvert.positionName}</Card.Header>
              <Card.Meta textAlign="right">{jobAdvert.cityName}</Card.Meta>
              <Card.Content textAlign="left">{jobAdvert.companyName}</Card.Content>
              <Card.Meta textAlign="left">Minimum Alım : {jobAdvert.quantity}</Card.Meta>
              <Card.Meta textAlign="right">Yayınlanma : {jobAdvert.advertDate}</Card.Meta>
              <Card.Meta textAlign="right">Son başvuru : {jobAdvert.dueDate}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div className="ui three buttons" >
                <Button basic color="green">
                  Başvur
                </Button>
                <Button basic color="red">
                  Kaydet
                </Button>
                <Button basic color="blue">
                  İlan Detayı
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
