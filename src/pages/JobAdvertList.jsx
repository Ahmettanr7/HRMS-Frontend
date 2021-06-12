import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, CardGroup, Image } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getActiveJobAdverts().then((result) => setJobAdverts(result.data.data));
  }, []);

  return (
    <div >
      <CardGroup centered>
        {jobAdverts.map((jobAdvert) => (
          <Card
            fluid
            floated="right"
            link
            key={jobAdvert.jobAdvertId}>
            <Card.Content>
                      <Image
                floated="left"
                size="mini"
                src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1622667029/sample.jpg"
              />
              <Link to={`/jobs/${jobAdvert.jobAdvertId}`}>
              <Card.Header textAlign="center">{jobAdvert.position.positionName}</Card.Header>
              <Card.Meta textAlign="right">{jobAdvert.city.cityName}</Card.Meta>
              <Card.Content textAlign="left">{jobAdvert.employer.companyName}</Card.Content>
              <Card.Meta textAlign="left">Minimum Alım : {jobAdvert.quantity}</Card.Meta>
              <Card.Meta textAlign="right"><i className='bell icon'></i> {jobAdvert.advertDate}</Card.Meta>
              <Card.Meta textAlign="right">Son Başvuru Tarihi</Card.Meta>
              <Card.Meta textAlign="right"><i className='bell slash icon'></i>  {jobAdvert.dueDate}</Card.Meta>
              <Card.Meta textAlign="left"><i className='briefcase icon'></i> {jobAdvert.jobTypePlace.placeTypeName}</Card.Meta>
              <Card.Meta textAlign="left"> <i className='time icon'></i> {jobAdvert.jobTypeTime.timeTypeName}</Card.Meta>
              </Link>
            </Card.Content>
            <Card.Content extra>
              <div className="ui three buttons" >
                <Button basic color="green">
                  Başvur
                </Button>
                <Button basic color="red">
                  Kaydet
                </Button>
                <Link to={`/jobs/${jobAdvert.jobAdvertId}`}>
                <Button basic color="blue">
                  İlan Detayı
                </Button>
                </Link>
              </div>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
