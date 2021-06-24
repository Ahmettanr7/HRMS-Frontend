import React from "react";
import { Segment, Form, Label, Input, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"

export default function EducationAdd() {
  const { addToast } = useToasts();

  let cvService = new CurriculumVitaeService();

  const formik = useFormik({
    initialValues: {
      universityName: "",
      department: "",
      startingDate: "",
      graduationDate: "",
    },
    onSubmit: (values) => {
      values.userId=56;
      cvService.addEducation(values).then((result) =>
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
          content="Eğitim Bilgisi"
          color="blue"
          attached="top"
          pointing="below"
        />
        <Form onSubmit={formik.handleSubmit}>
          <Form.Field>
            <Label basic content="Kurum" prompt pointing="below" />
            <Input
              name="universityName"
              type="text"
              placeholder="Selçuk Üniversitesi"
              value={formik.values.universityName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></Input>
          </Form.Field>
          <Form.Field>
            <Label basic content="Bölüm" prompt pointing="below" />
            <Input
              name="department"
              type="text"
              placeholder="Yönetim Bilişim Sistemleri"
              value={formik.values.department}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></Input>
          </Form.Field>
          <Form.Field>
            <Label
              basic
              content="Başlama-Bitirme Tarihi"
              prompt
              pointing="below"
            />
            <Form.Group>
              <Input
                name="startingDate"
                type="date"
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "startingDate")
                }
                value={formik.values.startingDate}
                onBlur={formik.handleBlur}
              ></Input>
              <Input
                name="graduationDate"
                type="date"
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "graduationDate")
                }
                value={formik.values.graduationDate}
                onBlur={formik.handleBlur}
              ></Input>
            </Form.Group>
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
