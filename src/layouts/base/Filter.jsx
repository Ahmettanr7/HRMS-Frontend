import React, { useState, useEffect } from "react";
import {
  Menu,
  Button,
  Form,
  Checkbox,
  Label,
  FormGroup,
  Search,
} from "semantic-ui-react";
import CityService from "../../services/cityService";
import EmployerService from "../../services/employerService";
import JobTypeService from "../../services/JobTypeService";
import PositionService from "../../services/positionService";

export default function Filter() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let positonsService = new PositionService();
    positonsService
      .getPositions()
      .then((result) => setPositions(result.data.data));
  }, []);

  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  const [jobTimes, setjobTimes] = useState([]);

  useEffect(() => {
    let jobTypeServce = new JobTypeService();
    jobTypeServce
      .getAllTypeOfTime()
      .then((result) => setjobTimes(result.data.data));
  }, []);

  const [jobPlaces, setjobPlaces] = useState([]);

  useEffect(() => {
    let jobTypeServce = new JobTypeService();
    jobTypeServce
      .getAllTypeOfPlace()
      .then((result) => setjobPlaces(result.data.data));
  }, []);

  return (
    <div>
      <Menu vertical fluid style={{ borderRadius: "10px" }}>
        <Menu.Item
          style={{ border: "2px solid #f2f2f2", borderRadius: "10px" }}
        >
          <Menu.Header>
            <Label basic pointing="below" color="blue">
              Şehir
            </Label>
          </Menu.Header>
            <Search
              category
              // noResultsMessage="Şehir bulunamadı"
              // noResultsDescription="Aradığınız kritere uygun şehir bulunamadı"
              minCharacters={10}
              placeholder="Şehir ara"
            />
          <Menu.Menu>
            <Form style={{ border: "1px solid #f5f5f5" }}>
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
                    style={{ marginLeft: "15px" }}
                    name="city"
                    label={city.cityName}
                    key={city.cityId}
                    value={city.cityId}
                  />
                ))}
              </Form.Field>
            </Form>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          style={{ border: "2px solid #f2f2f2", borderRadius: "10px" }}
        >
          <Menu.Header>
            <Label basic pointing="below" color="blue">
              Pozisyon
            </Label>
            <Search
              category
              // noResultsMessage="Pozisyon bulunamadı"
              // noResultsDescription="Aradığınız kritere uygun şehir bulunamadı"
              minCharacters={10}
              placeholder="Pozisyon ara"
            />
          </Menu.Header>
          <Menu.Menu>
            <Form style={{ border: "1px solid #f5f5f5" }}>
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
                    style={{ marginLeft: "15px" }}
                    name="position"
                    label={position.positionName}
                    key={position.positionId}
                    value={position.positionId}
                  />
                ))}
              </Form.Field>
            </Form>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          style={{ border: "2px solid #f2f2f2", borderRadius: "10px" }}
        >
          <Menu.Header>
            <Label basic pointing="below" color="blue">
              Şirket
            </Label>
            <Search
              category
              // noResultsMessage="Şirket bulunamadı"
              // noResultsDescription="Aradığınız kritere uygun şirket bulunamadı"
              minCharacters={10}
              placeholder="Şirket ara"
            />
          </Menu.Header>
          <Menu.Menu>
            <Form style={{ border: "1px solid #f5f5f5" }}>
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
                    style={{ marginLeft: "15px" }}
                    name="employer"
                    label={employer.companyName}
                    key={employer.userId}
                    value={employer.userId}
                  />
                ))}
              </Form.Field>
            </Form>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          style={{ border: "2px solid #f2f2f2", borderRadius: "10px" }}
        >
          <Menu.Header>
            <Label basic pointing="below" color="blue">
              Çalışma Zamanı
            </Label>
          </Menu.Header>
          <Menu.Menu>
            <Form style={{ border: "1px solid #f5f5f5" }}>
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
                    style={{ marginLeft: "15px" }}
                    name="jobTime"
                    label={jobTime.timeTypeName}
                    key={jobTime.timeTypeId}
                    value={jobTime.timeTypeId}
                  />
                ))}
              </Form.Field>
            </Form>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          style={{ border: "2px solid #f2f2f2", borderRadius: "10px" }}
        >
          <Menu.Header>
            <Label basic pointing="below" color="blue">
              Çalışma Şekli
            </Label>
          </Menu.Header>
          <Menu.Menu>
            <Form style={{ border: "1px solid #f5f5f5" }}>
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
                    style={{ marginLeft: "15px" }}
                    name="jobPlace"
                    label={jobPlace.placeTypeName}
                    key={jobPlace.placeTypeId}
                    value={jobPlace.placeTypeId}
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
