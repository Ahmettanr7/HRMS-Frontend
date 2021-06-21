import React from "react";
import { Segment, Form, Label, Input, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import CurriculumVitaeService from "../../../services/curriculumVitaeService"

export default function LanguageAdd() {
  const { addToast } = useToasts();

  const levelOptions = [
    { key: 1, text: "1 Başlangıç", value: 1 },
    { key: 2, text: "2 Başlangıç-Orta", value: 2 },
    { key: 3, text: "3 Orta", value: 3 },
    { key: 4, text: "4 Orta-Üstü", value: 4 },
    { key: 5, text: "5 İleri", value: 5 },
  ];

  let cvService = new CurriculumVitaeService();

  const formik = useFormik({
    initialValues: {
      language: "",
      level_: "",
    },
    onSubmit: (values) => {
      values.userId = 40;
      cvService.addLanguage(values).then((result) =>
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
          content="Dil Bilgisi"
          color="blue"
          attached="top"
          pointing="below"
        />
        <Form name="langForm" onSubmit={formik.handleSubmit}>
          <Form.Field>
            <Label basic content="Dil" prompt pointing="below" />
            <Input
              name="language"
              type="text"
              placeholder="İngilizce"
              value={formik.values.language}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Field>
          <Form.Field>
            <Label basic content="Seviye" prompt pointing="below" />
            <Form.Dropdown
              clearable
              options={levelOptions}
              selection
              placeholder="Seviye"
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "level_")
              }
              onBlur={formik.onBlur}
              id="level_"
              value={formik.values.level_}
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
