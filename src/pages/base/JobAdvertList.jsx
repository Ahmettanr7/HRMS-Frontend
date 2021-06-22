import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardGroup, Image, Icon } from "semantic-ui-react";
import FavoriteService from "../../services/favoriteService";
import JobAdvertService from "../../services/jobAdvertService";
import { useToasts } from "react-toast-notifications";

export default function JobAdvertList() {
  const { addToast } = useToasts();

  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getActiveJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  let addToSave = (jobAdvertId) => {
    let favoriteService = new FavoriteService();
    const values ={
      userId:40,
      jobAdvertId:jobAdvertId
    }
    favoriteService.add(values).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  return (
    <div>
      <CardGroup centered>
        {jobAdverts.map((jobAdvert) => (
          <Card fluid floated="right" link key={jobAdvert.jobAdvertId}>
            <Card.Content>
              {jobAdvert.employer.image ? (
                <Image
                  bordered
                  floated="right"
                  size="tiny"
                  src={jobAdvert.employer.image.imageUrl}
                />
              ) : (
                <Image
                  bordered
                  floated="right"
                  size="tiny"
                  src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"
                />
              )}
              <Link to={`/jobs/${jobAdvert.jobAdvertId}`}>
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
              </Link>
            </Card.Content>
            <Card.Content extra>
              <div className="ui three buttons">
                <Button basic color="green">
                  Başvur
                  <Icon corner="top right" name="send"/>
                </Button>
                <Button 
                onClick={() => addToSave(jobAdvert.jobAdvertId)}
                basic color="red">
                  Kaydet
                  <Icon corner="top right" name="heart"/>
                </Button>
                <Link to={`/jobs/${jobAdvert.jobAdvertId}`}>
                  <Button basic color="blue">
                    İlan Detayı
                    <Icon corner="top right" name="eye"/>
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
