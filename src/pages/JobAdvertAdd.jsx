import React, { useState, useEffect } from "react";
import {
  Button,
  Dropdown,
  Input,
  Modal,
  TextArea,
  Form,
} from "semantic-ui-react";
import JobTypeService from "../services/JobTypeService";
import JobAdvertService from "../services/jobAdvertService";
import CityService from "../services/cityService";
import PositionService from "../services/positionService";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function JobAdvertAdd({ triggerButton }) {
  let jobAdvertService = new JobAdvertService();
  const JobAdvertAddSchema = Yup.object().shape({
    dueDate: Yup.date().nullable().required("Bu alanın doldurulması zorunlu"),
    description: Yup.string().required("Bu alanın doldurulması zorunlu"),
    positionId: Yup.string().required("Bu alanın doldurulması zorunlu"),
    timeTypeId: Yup.string().required("Bu alanın doldurulması zorunlu"),
    placeTypeId: Yup.string().required("Bu alanın doldurulması zorunlu"),
    quantity: Yup.number()
      .required("Pozisyon Sayısı Zorunludur")
      .min(0, "0 dan Küçük Olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunlu"),
  });

  const formik = useFormik({
    initialValues: {
      jobAdvertId: "",
      description: "",
      positionId: "",
      timeTypeId: "",
      placeTypeId: "",
      quantity: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      dueDate: "",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.userId = 37;
      jobAdvertService
        .add(values)
        .then((result) => console.log(result.data.message));
    },
  });

  const [open, setOpen] = useState(false);
  const [jobTimes, setJobTimes] = useState([]);
  const [jobPlaces, setjobPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let jobTypeService = new JobTypeService();
    let cityService = new CityService();
    let positionService = new PositionService();

    jobTypeService
      .getAllTypeOfTime()
      .then((result) => setJobTimes(result.data.data));

    jobTypeService
      .getAllTypeOfPlace()
      .then((result) => setjobPlaces(result.data.data));

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
  const jobTimeOption = jobTimes.map((jobTime, index) => ({
    key: index,
    text: jobTime.timeTypeName,
    value: jobTime.timeTypeId,
  }));
  const jobPlaceOption = jobPlaces.map((jobPlace, index) => ({
    key: index,
    text: jobPlace.placeTypeName,
    value: jobPlace.placeTypeId,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={triggerButton}
        size="tiny"
        closeIcon
      >
        <Modal.Header>İŞ İLANI</Modal.Header>
        <Modal.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Modal.Description>
              <Form.Field style={{ marginBottom: "1rem" }}>
                <Dropdown
                  clearable
                  item
                  placeholder="Arayışınız Hangi Pozisyonda ?"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "positionId")
                  }
                  onBlur={formik.onBlur}
                  id="positionId"
                  value={formik.values.positionId}
                  options={positionOption}
                />

                {formik.errors.positionId && formik.touched.positionId && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.positionId}
                  </p>
                )}
              </Form.Field>
              <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Şehir?"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "cityId")
                  }
                  onBlur={formik.onBlur}
                  id="cityId"
                  value={formik.values.cityId}
                  options={cityOption}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.cityId}
                  </p>
                )}
              </Form.Field>
              <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Ortamı ?"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "placeTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="placeTypeId"
                  value={formik.values.placeTypeId}
                  options={jobPlaceOption}
                />
                {formik.errors.placeTypeId && formik.touched.placeTypeId && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.placeTypeId}
                  </p>
                )}
              </Form.Field>
              <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Şekli ?"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "timeTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="timeTypeId"
                  value={formik.values.timeTypeId}
                  options={jobTimeOption}
                />
                {formik.errors.timeTypeId && formik.touched.timeTypeId && (
                  <p style={{ fontSize: "small", color: "red" }}>{formik.errors.timeTypeId}</p>
                )}
              </Form.Field>
              <Form.Group>
                <Input
                  style={{ width: "50%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                <Input
                  style={{ width: "50%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
              </Form.Group>
              <Form.Group>
                <Input
                  style={{ width: "50%" }}
                  id="quantity"
                  name="quantity"
                  error={Boolean(formik.errors.quantity)}
                  onChange={formik.handleChange}
                  value={formik.values.quantity}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Miktarınız ?"
                />
                {formik.errors.quantity && formik.touched.quantity && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.quantity}
                  </p>
                )}
                <Input
                  style={{ width: "50%" }}
                  type="date"
                  error={Boolean(formik.errors.dueDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "dueDate")
                  }
                  value={formik.values.DueDate}
                  onBlur={formik.handleBlur}
                  name="dueDate"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.dueDate && formik.touched.dueDate && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.dueDate}
                  </p>
                )}
              </Form.Group>

              <Form.Field>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.description}
                  </p>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
            </Modal.Description>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
