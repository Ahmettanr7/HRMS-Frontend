import React, { useEffect, useState } from "react";
import {
  Menu,
  Container,
  Dropdown,
  Button,
  Icon,
  Image,
} from "semantic-ui-react";
import CityService from "../../services/cityService";
import PositionService from "../../services/positionService";

export default function FilterTop() {
  const [cities, setCities] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let positionService = new PositionService();

    cityService.getCities().then((result) => setCities(result.data.data));

    positionService
      .getPositions()
      .then((result) => setPositions(result.data.data));
  }, []);
  const positionOption = positions.map((position, index) => ({
    key: index,
    text: position.positionName,
    value: position.positionId,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.cityId,
  }));

  return (
    <div>
      <Container>
        <Menu id="filterTopMenu">
          <Menu.Item>
            <Image
              disabled
              size="small"
              centered
              src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"
            />
          </Menu.Item>
          <Menu.Item active>
            <Dropdown
              clearable
              placeholder="Şehir"
              selection
              id="cityId"
              options={cityOption}
            />
          </Menu.Item>

          <Menu.Item>
            <Dropdown
              clearable
              placeholder="Pozisyon"
              selection
              id="positionId"
              options={positionOption}
            />
          </Menu.Item>
          <Menu.Item>
            <Button icon labelPosition="right" color="facebook">
              ARA <Icon name="search"></Icon>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>
              <div style={{ backgroundColor: "purple", padding:"0.5em" }}>
                <h3>EN BÜYÜK İLAN</h3>
                <span className="mt1em" style={{ color: "white" }}>
                  <b>HRMS.job</b> AİLESİNE JAVA GELİŞTİRİCİ ARIYORUZ <br />
                  <span className="mt1em">KENDİNE GÜVENİYORSAN</span>
                  <br />
                  <Button className="p1em" basic className="mt1em" color="yellow" content="BAŞVUR" />
                </span>
              </div>
            </Menu.Header>
          </Menu.Item>
        </Menu>
      </Container>
    </div>
  );
}
