import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button, Label, Input, Form } from "semantic-ui-react";
import SystemEmployeeSerivce from "../../services/systemEmployeeService";
import { useToasts } from "react-toast-notifications";

export default function Update({ triggerButtonnn }) {
  const [open, setOpen] = useState(false);

  const { addToast } = useToasts();

  const userId = 61; // JWT eklendikten sonra bütün manuel taraflar değişecek :))

  const [employee, setEmployee] = useState({});

  let systemEmployeeService = new SystemEmployeeSerivce();

  useEffect(() => {
    //let systememployeeService = new SystemEmployeeService();
    systemEmployeeService
      .getByUserId(userId)
      .then((result) => setEmployee(result.data.data));
  }, []);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    imageUrl: "",
    userId: userId,
  };

  const schema = Yup.object({
    firstName: Yup.string().required("Doldurulması zorunlu alan"),
    lastName: Yup.string().required("Doldurulması zorunlu alan"),
    email: Yup.string().required("Doldurulması zorunlu alan"),
    password: Yup.string().required("Doldurulması zorunlu alan"),
    phoneNumber: Yup.string().required("Doldurulması zorunlu alan"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      systemEmployeeService.update(values).then((result) =>
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
      trigger={triggerButtonnn}
      size="tiny"
      closeIcon
    >
      <Modal.Header>Bilgi Güncelleme</Modal.Header>
      <Modal.Content>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Description>
            <Form.Field>
              <Label basic content="Ad" prompt pointing="below" />
              <Input
                name="firstName"
                type="text"
                placeholder="Ad"
                defaultValue={employee.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.touched.firstName && formik.errors.firstName && (
                <Label
                  pointing
                  basic
                  color="red"
                  content={formik.errors.firstName}
                ></Label>
              )}
            </Form.Field>
            <Form.Field>
              <Label basic content="Soyad" prompt pointing="below" />
              <Input
                name="lastName"
                type="text"
                placeholder="Soyad"
                defaultValue={employee.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
              {formik.touched.lastName && formik.errors.lastName && (
                <Label
                  pointing
                  basic
                  color="red"
                  content={formik.errors.lastName}
                ></Label>
              )}
            </Form.Field>
            <Form.Field>
              <Label basic content="Email" prompt pointing="below" />
              <Input
                name="email"
                type="text"
                placeholder="Email"
                value={employee.email}
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
                value={employee.phoneNumber}
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
                defaultValue={employee.imageUrl}
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
                defaultValue={employee.password}
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
