import React, { useState, useEffect } from "react";
import {  Menu, Button, Form, Checkbox } from "semantic-ui-react";
import CityService from "../services/cityService";
import EmployerService from "../services/employerService";
import JobTypeService from "../services/JobTypeService";
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
    value: city.cityId,
  }));

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let positonsService = new PositionService();
    positonsService
      .getPositions()
      .then((result) => setPositions(result.data.data));
  }, []);

  const positionOption = positions.map((position) => ({
    key: position.positionId,
    text: position.positionName,
    value: position.positionId,
  }));

  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  const employersOption = employers.map((employer) => ({
    key: employer.userId,
    text: employer.companyName,
    value: employer.userId,
  }));

  const [jobTimes, setjobTimes] = useState([]);

  useEffect(() => {
    let jobTypeServce = new JobTypeService();
    jobTypeServce
      .getAllTypeOfTime()
      .then((result) => setjobTimes(result.data.data));
  }, []);

  const jobTimeOption = jobTimes.map((jobTime) => ({
    key: jobTime.typeId,
    text: jobTime.typeName,
    value: jobTime.typeId,
  }));

  const [jobPlaces, setjobPlaces] = useState([]);

  useEffect(() => {
    let jobTypeServce = new JobTypeService();
    jobTypeServce
      .getAllTypeOfPlace()
      .then((result) => setjobPlaces(result.data.data));
  }, []);

  const jobPlaceOption = jobPlaces.map((jobPlace) => ({
    key: jobPlace.typeId,
    text: jobPlace.typeName,
    value: jobPlace.typeId,
  }));

  return (
    <div>
      

      <Menu  vertical fluid style={{borderRadius:'10px'}}>
        <Menu.Item style={{border:'2px solid #f2f2f2',borderRadius:'10px'}}>
          <Menu.Header>Şehir</Menu.Header>
          <Menu.Menu> 
          <Form style={{border:'1px solid #f5f5f5'}}>
        <Form.Field
          style={{
            height: 250,
            overflowY: "scroll",
            overflowX: "hidden",
            display: "grid",
            margin: "auto",
          }}
        >
          {cities.map((city) => (
            <Checkbox
              style={{marginLeft:'15px'}}
              name="checkboxRadioGroup"
              label={city.cityName}
              key={city.cityId}
              value={city.cityId}
            />
          ))}
        </Form.Field>
      </Form>
      </Menu.Menu>
        </Menu.Item>

        <Menu.Item style={{border:'2px solid #f2f2f2',borderRadius:'10px'}}>
          <Menu.Header>Pozisyon</Menu.Header>
          <Menu.Menu> 
          <Form style={{border:'1px solid #f5f5f5'}}>
        <Form.Field
          style={{
            height: 200,
            overflowY: "scroll",
            overflowX: "hidden",
            display: "grid",
            margin: "auto",
          }}
        >
          {positions.map((position) => (
            <Checkbox
              style={{marginLeft:'15px'}}
              name="checkboxRadioGroup"
              label={position.positionName}
              key={position.positionId}
              value={position.positionId}
            />
          ))}
        </Form.Field>
      </Form>
      </Menu.Menu>
        </Menu.Item>

        <Menu.Item style={{border:'2px solid #f2f2f2',borderRadius:'10px'}}>
          <Menu.Header>Şirket</Menu.Header>
          <Menu.Menu> 
          <Form style={{border:'1px solid #f5f5f5'}}>
        <Form.Field
          style={{
            height: 250,
            overflowY: "scroll",
            overflowX: "hidden",
            display: "grid",
            margin: "auto",
          }}
        >
          {employers.map((employer) => (
            <Checkbox
              style={{marginLeft:'15px'}}
              name="checkboxRadioGroup"
              label={employer.companyName}
              key={employer.userId}
              value={employer.userId}
            />
          ))}
        </Form.Field>
      </Form>
      </Menu.Menu>
        </Menu.Item>

        <Menu.Item style={{border:'2px solid #f2f2f2',borderRadius:'10px'}}>
          <Menu.Header>Çalışma Zamanı</Menu.Header>
          <Menu.Menu> 
          <Form style={{border:'1px solid #f5f5f5'}}>
        <Form.Field
          style={{
            height: 50,
            overflowY: "auto",
            overflowX: "hidden",
            display: "grid",
            margin: "auto",
          }}
        >
          {jobTimes.map((jobTime) => (
            <Checkbox
              style={{marginLeft:'15px'}}
              name="checkboxRadioGroup"
              label={jobTime.typeName}
              key={jobTime.typeId}
              value={jobTime.typeId}
            />
          ))}
        </Form.Field>
      </Form>
      </Menu.Menu>
        </Menu.Item>

        <Menu.Item style={{border:'2px solid #f2f2f2',borderRadius:'10px'}}>
          <Menu.Header>Çalışma Şekli</Menu.Header>
          <Menu.Menu> 
          <Form style={{border:'1px solid #f5f5f5'}}>
        <Form.Field
          style={{
            height: 150,
            overflowY: "auto",
            overflowX: "hidden",
            display: "grid",
            margin: "auto",
          }}
        >
          {jobPlaces.map((jobPlace) => (
            <Checkbox
              style={{marginLeft:'15px'}}
              name="checkboxRadioGroup"
              label={jobPlace.typeName}
              key={jobPlace.typeId}
              value={jobPlace.typeId}
            />
          ))}
        </Form.Field>
      </Form>
      </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Button basic>
            Filtrele <i aria-hidden="true" className="search icon"></i>
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}
