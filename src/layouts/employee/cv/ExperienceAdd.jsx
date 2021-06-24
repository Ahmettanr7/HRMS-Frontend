import React from "react";
import {
  Segment,
  Form,
  Label,
  Input,
  Button,
  TextArea,
} from "semantic-ui-react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"

export default function ExperienceAdd() {
  const { addToast } = useToasts();

  let cvService = new CurriculumVitaeService();

  const formik = useFormik({
    initialValues: {
      companyName: "",
      position: "",
      dateOfStart: "",
      quitDate: "",
      reasonForLeaving: "",
    },
    onSubmit: (values) => {
      values.userId = 56;
      cvService.addExperience(values).then((result) =>
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        })
      );
    },
  });
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Segment>
        <Label
          basic
          content="Tecrübe Bilgisi"
          color="blue"
          attached="top"
          pointing="below"
        />
        <Form onSubmit={formik.handleSubmit}>
          <Form.Field>
            <Label basic content="Şirket" prompt pointing="below" />
            <Input
              name="companyName"
              type="text"
              placeholder="Tannet Soft"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></Input>
          </Form.Field>
          <Form.Field>
            <Label basic content="Pozisyon" prompt pointing="below" />
            <Input
              name="position"
              type="text"
              placeholder="Yazılım Geliştirici"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></Input>
          </Form.Field>
          <Form.Field>
            <Label
              basic
              content="Başlama-Ayrılma Tarihi"
              prompt
              pointing="below"
            />
            <Form.Group>
              <Input
                name="dateOfStart"
                type="date"
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "dateOfStart")
                }
                value={formik.values.dateOfStart}
                onBlur={formik.handleBlur}
              ></Input>
              <Input
                name="quitDate"
                type="date"
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "quitDate")
                }
                value={formik.values.quitDate}
                onBlur={formik.handleBlur}
              ></Input>
            </Form.Group>
          </Form.Field>
          <Form.Field>
            <TextArea
              name="reasonForLeaving"
              maxLength="250"
              placeholder="Maksimum 250 karakter"
              value={formik.values.reasonForLeaving}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Field>
          <Form.Field style={{ visibility: "hidden" }}>
            <Input name="userId" type="number" />
          </Form.Field>
          <Button
            content="Ekle"
            labelPosition="right"
            icon="add"
            primary
            type="submit"
          />
        </Form>
      </Segment>
    </div>
  );
}
