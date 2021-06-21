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

export default function SingleInfosAdd() {
  const { addToast } = useToasts();

  let cvService = new CurriculumVitaeService();

  const formik = useFormik({
    initialValues: {
      github: "",
      linkedin: "",
      coverLetter: "",
    },
    onSubmit: (values) => {
      values.userId = 40;
      cvService.addSingleInfo(values).then((result) =>
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        })
      );
    },
  });
  return (
    <div>
      <Segment>
        <Label
          basic
          content="Ek Bilgiler"
          color="blue"
          attached="top"
          pointing="below"
        />
        <Form onSubmit={formik.handleSubmit}>
          <Form.Field>
            <Label basic content="Github" prompt pointing="below" />
            <Input
              name="github"
              type="text"
              placeholder="github.com/? "
              value={formik.values.github}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Field>
          <Form.Field>
            <Label basic content="LinkedIn" prompt pointing="below" />
            <Input
              name="linkedin"
              type="text"
              placeholder="linkedin.com/?"
              value={formik.values.linkedin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Field>
          <Form.Field>
            <Label basic content="Ön Yazı" prompt pointing="below" />
            <TextArea
              name="coverLetter"
              maxLength="500"
              placeholder="Maksimum 500 karakter"
              value={formik.values.coverLetter}
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
