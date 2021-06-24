import React, { useState, useEffect } from "react";
import {
  Button,
  Dropdown,
  Input,
  Modal,
  Form,
} from "semantic-ui-react";
import JobTypeService from "../../services/JobTypeService";
import JobAdvertService from "../../services/jobAdvertService";
import CityService from "../../services/cityService";
import PositionService from "../../services/positionService";
import { useToasts } from "react-toast-notifications";
import { info } from "react-toast-notification";
import { useFormik } from "formik";
import * as Yup from "yup";
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';

export default function JobAdvertAdd({ triggerButton }) {
  const { addToast } = useToasts();
  let jobAdvertService = new JobAdvertService();
  const JobAdvertAddSchema = Yup.object().shape({
    dueDate: Yup.date()
      .nullable()
      .required("Son başvuru tarihi doldurulması zorunlu"),
    description: Yup.string().required("Açıklama zorunlu"),
    positionId: Yup.string().required("Pozisyon seçimi zorunlu"),
    timeTypeId: Yup.string().required("Çalışma şekli seçimi zorunlu"),
    placeTypeId: Yup.string().required("Çalışma ortamı seçimi zorunlu"),
    quantity: Yup.number()
      .required("Açık Sayısı Zorunludur")
      .min(0, "0 dan Küçük Olamaz"),
    cityId: Yup.string().required("Şehir seçimi zorunlu"),
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
      values.userId = 60;
      jobAdvertService.add(values).then((result) =>
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        })
      );
       setOpen(false)
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

  const handleRichTextEditorInput = (value) => {
    formik.setFieldValue("description", value)
  }

  formik.errors.cityId &&
  formik.touched.cityId &&
  info(formik.errors.cityId);

  formik.errors.description &&
    formik.touched.description &&
    info(formik.errors.description);

  formik.errors.dueDate &&
    formik.touched.dueDate &&
    info(formik.errors.dueDate);

  formik.errors.placeTypeId &&
    formik.touched.placeTypeId &&
    info(formik.errors.placeTypeId);

  formik.errors.positionId &&
    formik.touched.positionId &&
    info(formik.errors.positionId);

  formik.errors.quantity &&
    formik.touched.quantity &&
    info(formik.errors.quantity);

  formik.errors.timeTypeId &&
    formik.touched.timeTypeId &&
    info(formik.errors.timeTypeId);


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
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "positionId")
                  }
                  onBlur={formik.onBlur}
                  id="positionId"
                  value={formik.values.positionId}
                  options={positionOption}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Şehir?"
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "cityId")
                  }
                  onBlur={formik.onBlur}
                  id="cityId"
                  value={formik.values.cityId}
                  options={cityOption}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Ortamı ?"
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "placeTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="placeTypeId"
                  value={formik.values.placeTypeId}
                  options={jobPlaceOption}
                />
              </Form.Field>
              <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Şekli ?"
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "timeTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="timeTypeId"
                  value={formik.values.timeTypeId}
                  options={jobTimeOption}
                />
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
                ></Input>
                <Input
                  style={{ width: "50%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Input>
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
                <Input
                  style={{ width: "50%" }}
                  type="date"
                  label="Son başvuru tarihi"
                  labelPosition="left corner"
                  error={Boolean(formik.errors.dueDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "dueDate")
                  }
                  value={formik.values.DueDate}
                  onBlur={formik.handleBlur}
                  name="dueDate"
                  placeholder="Son başvuru tarihi"
                />
              </Form.Group>
              <Form.Field>
          <RichTextEditor
            name="description"
            textValue={handleRichTextEditorInput}
            onBlur={formik.handleBlur}
          />
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
