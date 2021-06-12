import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService';

export default function JobAdvertDetail() {
    let { jobAdvertId } = useParams();

    const [jobAdvert, setJobAdvert] = useState({});

  useEffect(()=>{
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getByJobAdvertId(jobAdvertId).then(result=>setJobAdvert(result.data.data))
  },[])
    return (
        <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              bordered
              floated="right"
              size="tiny"
              src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623079064/rlcbpiy0y37s7ysdy1u5.jpg"
            />
            <Card.Header textAlign="center">{jobAdvert?.position?.positionName}</Card.Header>
              <Card.Meta textAlign="right">{jobAdvert?.city?.cityName}</Card.Meta>
              <Card.Content textAlign="left">{jobAdvert?.employer?.companyName}</Card.Content>
              <Card.Meta textAlign="left"><i className='handshake icon'></i> Minimum Alım : {jobAdvert?.quantity}</Card.Meta>
              <Card.Meta textAlign="left"><i className='money icon'></i> Maaş Aralığı</Card.Meta>
              <Card.Meta textAlign="left">{jobAdvert?.minSalary}TL - {jobAdvert?.maxSalary}TL</Card.Meta>
              <Card.Meta textAlign="left"><i className='briefcase icon'></i> {jobAdvert.jobTypePlace?.placeTypeName}</Card.Meta>
              <Card.Meta textAlign="left"> <i className='time icon'></i> {jobAdvert.jobTypeTime?.timeTypeName}</Card.Meta>
              <Card.Meta className='mt1bem' textAlign="right">Yayınlanma : {jobAdvert?.advertDate}</Card.Meta>
              <Card.Meta textAlign="right">Son başvuru : {jobAdvert?.dueDate}</Card.Meta>
              <Card.Header textAlign="center">Açıklama</Card.Header>
            
            <Card.Description className='mt1bem'>{jobAdvert?.description}</Card.Description>
            
            <Card.Header className='mt1bem'  style={{textDecoration:'underline'}}>İletişim Bilgileri</Card.Header>
            <Card.Header className='mt1bem' textAlign='right' >{jobAdvert?.employer?.companyName}</Card.Header>
            <Card.Content className='mt1bem' textAlign='right'><a href="mailto:{jobAdvert?.employer?.email}">{jobAdvert?.employer?.email}<i className="mail icon"></i></a></Card.Content>
            <Card.Content className='mt1bem' textAlign='right'><a href="tel:{jobAdvert?.employer?.phoneNumber}">{jobAdvert?.employer?.phoneNumber}<i className="phone icon"></i></a></Card.Content>
            <Card.Content className='mt1bem' textAlign='right'><a  href={jobAdvert?.employer?.webSite}>{jobAdvert?.employer?.webSite}</a></Card.Content>
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
    )
}
