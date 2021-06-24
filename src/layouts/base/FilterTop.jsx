import React, { useEffect, useState } from "react";
import {
  Menu,
  Container,
  Dropdown,
  Button,
  Icon,
  Image,
  Form,
  Label,
} from "semantic-ui-react";
import CityService from "../../services/cityService";
import PositionService from "../../services/positionService";
import JobTypeService from "../../services/JobTypeService";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FilterTop() {
  const [cities, setCities] = useState([]);
  const [positions, setPositions] = useState([]);
  const [placeTypes, setPlaceTypes] = useState([]);
  const [timeTypes, setTimeTypes] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let positionService = new PositionService();
    let jobTypeService = new JobTypeService();

    cityService.getCities().then((result) => setCities(result.data.data));

    positionService
      .getPositions()
      .then((result) => setPositions(result.data.data));

    jobTypeService
      .getAllTypeOfPlace()
      .then((result) => setPlaceTypes(result.data.data));

    jobTypeService
      .getAllTypeOfTime()
      .then((result) => setTimeTypes(result.data.data));
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
  const placeTypeOption = placeTypes.map((place, index) => ({
    key: index,
    text: place.placeTypeName,
    value: place.placeTypeId,
  }));
  const timeTypeOption = timeTypes.map((time, index) => ({
    key: index,
    text: time.timeTypeName,
    value: time.timeTypeId,
  }));

  const schema = Yup.object({
    cityId: Yup.string().required("Şehir Seçiniz!"),
    positionId: Yup.string().required("Pozisyon Seçiniz!"),
    placeTypeId: Yup.string().required("Çalışma Ortamı Seçiniz!"),
    timeTypeId: Yup.string().required("Çalışma Şekli Seçiniz!"),
  });

  const formik = useFormik({
    initialValues: {
      cityId: "",
      positionId: "",
      placeTypeId: "",
      timeTypeId: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      window.location.href = `/jobs/${values.cityId}/${values.positionId}/${values.placeTypeId}/${values.timeTypeId}`;
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container>
        <Menu id="filterTopMenu">
          {/* <Menu.Item>
            <Image
              disabled
              size="small"
              centered
              src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"
            />
          </Menu.Item> */}
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Menu.Item active >
                <Dropdown
                  clearable
                  placeholder="Şehir"
                  selection
                  id="cityId"
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "cityId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.cityId}
                  options={cityOption}
                />
                {formik.touched.cityId && formik.errors.cityId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.cityId}
                  ></Label>
                )}
              </Menu.Item>

              <Menu.Item>
                <Dropdown
                  clearable
                  placeholder="Pozisyon"
                  selection
                  id="positionId"
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "positionId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.positionId}
                  options={positionOption}
                />
                {formik.touched.positionId && formik.errors.positionId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.positionId}
                  ></Label>
                )}
              </Menu.Item>
              <Menu.Item>
                <Dropdown
                  clearable
                  placeholder="Çalışma Ortamı"
                  selection
                  id="placeTypeId"
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "placeTypeId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.placeTypeId}
                  options={placeTypeOption}
                />
                {formik.touched.placeTypeId && formik.errors.placeTypeId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.placeTypeId}
                  ></Label>
                )}
              </Menu.Item>
              <Menu.Item>
                <Dropdown
                  clearable
                  placeholder="Çalışma Şekli"
                  selection
                  id="timeTypeId"
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "timeTypeId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.timeTypeId}
                  options={timeTypeOption}
                />
                {formik.touched.timeTypeId && formik.errors.timeTypeId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.timeTypeId}
                  ></Label>
                )}
              </Menu.Item>

              <Menu.Item>
                <Button
                  icon
                  labelPosition="right"
                  color="facebook"
                  type="submit"
                >
                  ARA <Icon name="search"></Icon>
                </Button>
              </Menu.Item>

              {/* <Menu.Item>
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
          </Menu.Item> */}
            </Form.Group>
          </Form>
        </Menu>
      </Container>
    </div>
  );
}
