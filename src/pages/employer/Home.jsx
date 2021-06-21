import React, { useState, useEffect } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import EmployerService from '../../services/employerService';

export default function Home() {

  const userId = 34;

  const [employer, setEmployer] = useState({});

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByUserId(userId)
      .then((result) => setEmployer(result.data.data));
  }, []);

    return (
        <div>
            <Button floated="right" icon>PROFİLİ DÜZENLE <Icon name="edit"></Icon></Button>
            <Card centered style={{width:"30%"}}>
    <Image src={employer?.image?.imageUrl} wrapped size='small' style={{width:"100%" ,maxHeight:"500px"}}/>
    <Card.Content>
      <Card.Header>{employer.companyName}</Card.Header>
      <Card.Description>
        <b>Email :</b> <br />
        {employer.email}
      </Card.Description>
      <Card.Description className="mt1em">
        <b>Telefon No :</b> <br />
        {employer.phoneNumber}
      </Card.Description>
      <Card.Description>
      <b>Vergi No :</b> <br />
        {employer.taxNumber}
      </Card.Description>
    </Card.Content>
    <Card.Meta className="mt1em">
        <span className='date'>Katılma tarihi {employer.creationDate}</span>
      </Card.Meta>
    <Card.Content extra>
      <a>
        <Icon name='world' />
        {employer.webSite}
      </a>
    </Card.Content>
  </Card>
        </div>
    )
}
