import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Image, Icon, Segment, Label } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertDetail() {
  let { jobAdvertId } = useParams();

  const [jobAdvert, setJobAdvert] = useState({});

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getByJobAdvertId(jobAdvertId)
      .then((result) => setJobAdvert(result.data.data));
  }, []);
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Segment horizontal basic secondary textAlign="left">
              <Label basic attached="top">
                İLAN DETAYI
              </Label>
              <Segment horizontal>
                {jobAdvert?.employer?.image ? (
                  <Image
                    bordered
                    floated="right"
                    size="tiny"
                    src={jobAdvert?.employer?.image?.imageUrl}
                  />
                ) : (
                  <Image
                    bordered
                    floated="right"
                    size="tiny"
                    src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"
                  />
                )}
                <Card.Header textAlign="center">
                  {jobAdvert?.position?.positionName}
                </Card.Header>
                <Card.Meta textAlign="right">
                  {jobAdvert?.city?.cityName}
                  <Icon name="map marker alternate" />
                </Card.Meta>
                <Card.Content textAlign="left">
                  {jobAdvert?.employer?.companyName}
                </Card.Content>
                <Card.Meta textAlign="left">
                  <Icon name="handshake" /> Açık Sayısı : {jobAdvert?.quantity}
                </Card.Meta>
                <Card.Meta textAlign="left">
                  <Icon name="briefcase" />{" "}
                  {jobAdvert?.jobTypePlace?.placeTypeName}
                </Card.Meta>
                <Card.Meta textAlign="left">
                  <Icon name="time" />
                  {jobAdvert?.jobTypeTime?.timeTypeName}
                </Card.Meta>
                <Card.Meta textAlign="left"><b>Maaş Aralığı</b></Card.Meta>
                {jobAdvert.maxSalary ?
                 (<Card.Meta textAlign="left">
                  <Icon name="try" /> {jobAdvert?.minSalary} -
                  {jobAdvert?.maxSalary} 
                </Card.Meta>)
                : (<Card.Meta textAlign="left">Belirtilmemiş</Card.Meta>)}
                <Card.Meta className="mt1bem" textAlign="right">
                  Yayınlanma : {jobAdvert?.advertDate}
                </Card.Meta>
                <Card.Meta textAlign="right">
                  Son başvuru : {jobAdvert?.dueDate}
                </Card.Meta>
              </Segment>
              <Segment horizontal>
                <Label basic attached="top">
                  İŞVERENİN AÇIKLAMASI
                </Label>
                <Card.Description
                  dangerouslySetInnerHTML={{
                    __html: jobAdvert.description,
                  }}
                />
              </Segment>
              <Segment horizontal>
                <Label basic attached="top">
                  İLETİŞİM BİLGİLERİ
                </Label>
                <Card.Header className="mt1bem" textAlign="right">
                  {jobAdvert?.employer?.companyName}
                </Card.Header>
                <Card.Content className="mt1bem" textAlign="right">
                  <a href="mailto:{jobAdvert?.employer?.email}">
                    {jobAdvert?.employer?.email}{" "}
                  </a>
                  <Icon name="mail" />
                </Card.Content>
                <Card.Content className="mt1bem" textAlign="right">
                  <a href="tel:{jobAdvert?.employer?.phoneNumber}">
                    {jobAdvert?.employer?.phoneNumber}
                  </a>{" "}
                  <Icon name="phone" />
                </Card.Content>
                <Card.Content className="mt1bem" textAlign="right">
                  <a
                    href={jobAdvert?.employer?.webSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {jobAdvert?.employer?.webSite}
                  </a>{" "}
                  <Icon name="world" />
                </Card.Content>
              </Segment>
            </Segment>
          </Card.Content>

          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Başvur
              </Button>
              <Button basic color="red">
                Kaydet
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
