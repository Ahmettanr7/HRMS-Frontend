import React from 'react'
import { Segment, Form, Label, Input, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"

export default function AbilityAdd() {

  const { addToast } = useToasts();

  let cvService = new CurriculumVitaeService();

  const formik = useFormik({
    initialValues: {
      abilityName: ""
    },
    onSubmit: (values) => {
      values.userId = 56;
      cvService.addAbility(values).then((result) =>
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
              content="Yetenek Bilgisi"
              color="blue"
              attached="top"
              pointing="below"
            />
            <Form onSubmit={formik.handleSubmit}>
              <Form.Field>
                <Label basic content="Yetenek" prompt pointing="below" />
                <Input
                  name="abilityName"
                  type="text"
                  placeholder="Java"
                  value={formik.values.abilityName}
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
    )
}
