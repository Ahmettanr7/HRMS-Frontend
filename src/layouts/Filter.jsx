import React, { useState, useEffect } from "react";
import { Dropdown, Menu, Button,Form, Input, FormGroup } from 'semantic-ui-react'
import CityService from '../services/cityService';
import EmployerService from "../services/employerService";
import PositionService from "../services/positionService";

export default function Filter() {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then((result) => setCities(result.data.data));
      }, []);

    const cityOption = cities.map((city) => ({
        key: city.cityId,
        text: city.cityName,
        value:city.cityId,
    }))

    const [positions, setPositions] = useState([]);

  useEffect(() => {
    let positonsService = new PositionService();
    positonsService.getPositions().then((result) => setPositions(result.data.data));
  }, []);
  
 const positionOption = positions.map((position) => ({
    key: position.positionId,
    text: position.positionName,
    value:position.positionId,
}))

const [employers, setEmployers] = useState([]);

useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployers().then((result) => setEmployers(result.data.data));
  }, []);

    const employersOption = employers.map((employer) => ({
        key: employer.userId,
        text: employer.companyName,
        value:employer.userId,
    }))
    

    return (
        <div>
      <Menu className="w100 p1em" vertical centered>
        <Menu.Item>
          <Menu.Header>Şehir</Menu.Header>
          
          <Menu.Menu>
          <Dropdown className="w100" placeholder='Şehir seç' search selection options={cityOption} />
          </Menu.Menu>
          
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Pozisyon</Menu.Header>
          <Menu.Menu>
          <Dropdown className="w100" placeholder='Pozisyon seç' search selection options={positionOption} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Şirket</Menu.Header>
          <Menu.Menu>
          <Dropdown className="w100" placeholder='Şirket seç' search selection options={employersOption} />
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
           <Button basic>Filtrele <i aria-hidden="true" className="search icon"></i></Button>
        </Menu.Item>
    </Menu>
        </div>
    )
}
