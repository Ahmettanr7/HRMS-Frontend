import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button, Label, Input, Form } from "semantic-ui-react";
import { useToasts } from "react-toast-notifications";
import EmployerUpdateService from "../../services/employerUpdateService";
import EmployerService from "../../services/employerService";

export default function Update({ triggerButton }) {
  const [open, setOpen] = useState(false);

  const { addToast } = useToasts();

  const userId = 59; // JWT eklendikten sonra bütün manuel taraflar değişecek :))

  const [employer, setEmployer] = useState({});

  let employerService = new EmployerService();
  let employerUpdateService = new EmployerUpdateService();
   useEffect(() => {
    employerService
      .getByUserId(userId)
      .then((result) => setEmployer(result.data.data));
  }, []);

  const initialValues = {
    companyName: "",
    webSite: "",
    email: "",
    password: "",
    phoneNumber: "",
    imageUrl: "",
    userId: userId,
  };

  const schema = Yup.object({
    companyName: Yup.string().required("Doldurulması zorunlu alan"),
    webSite: Yup.string().required("Doldurulması zorunlu alan"),
    email: Yup.string().required("Doldurulması zorunlu alan"),
    password: Yup.string().required("Doldurulması zorunlu alan"),
    phoneNumber: Yup.string().required("Doldurulması zorunlu alan"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
        employerUpdateService.add(values).then((result) =>
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        })
      );
      setOpen(false);
    },
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={triggerButton}
      size="tiny"
      closeIcon
    >
      <Modal.Header>Bilgi Güncelleme</Modal.Header>
      <Modal.Content>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Description>
            <Form.Field>
              <Label basic content="Şirket Adı" prompt pointing="below" />
              <Input
                name="companyName"
                type="text"
                placeholder="Şirket Adı"
                defaultValue={employer.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.touched.companyName && formik.errors.companyName && (
                <Label
                  pointing
                  basic
                  color="red"
                  content={formik.errors.companyName}
                ></Label>
              )}
            </Form.Field>
            <Form.Field>
              <Label basic content="Web Site" prompt pointing="below" />
              <Input
                name="webSite"
                type="text"
                placeholder="Web Site"
                defaultValue={employer.webSite}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.touched.webSite && formik.errors.webSite && (
                <Label
                  pointing
                  basic
                  color="red"
                  content={formik.errors.webSite}
                ></Label>
              )}
            </Form.Field>
            <Form.Field>
              <Label basic content="Email" prompt pointing="below" />
              <Input
                name="email"
                type="text"
                placeholder="Email"
                defaultValue={employer.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.touched.email && formik.errors.email && (
                <Label
                  pointing
                  basic
                  color="red"
                  content={formik.errors.email}
                ></Label>
              )}
            </Form.Field>
            <Form.Field>
              <Label basic content="telefon Numarası" prompt pointing="below" />
              <Input
                name="phoneNumber"
                type="text"
                placeholder="TelefonNumarası"
                defaultValue={employer.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <Label
                  pointing
                  basic
                  color="red"
                  content={formik.errors.phoneNumber}
                ></Label>
              )}
            </Form.Field>
            <Form.Field>
              <Label basic content="Resim yolu" prompt pointing="below" />
              <Input
                name="imageUrl"
                type="text"
                placeholder="Resim Yolu"
                defaultValue={employer.imageUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
            </Form.Field>
            <Form.Field>
              <Label basic content="Şifre" prompt pointing="below" />
              <Input
                name="password"
                type="password"
                placeholder="Şifre"
                defaultValue={employer.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.touched.password && formik.errors.password && (
                <Label
                  pointing
                  basic
                  color="red"
                  content={formik.errors.password}
                ></Label>
              )}
            </Form.Field>
            <Button color="green" type="submit">
              Ekle
            </Button>
          </Modal.Description>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
