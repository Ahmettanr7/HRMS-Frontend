import React, { useState } from "react";
import { Button, Input, Modal, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { success, error } from "react-toast-notification";
import SystemEmployeeSerivce from "../../services/systemEmployeeService";

export default function SystemEmployeeAdd({ triggerButtonn }) {

  const [open, setOpen] = useState(false);

  let systemEmployeeService = new SystemEmployeeSerivce();

  const systemEmployeeSchema = Yup.object().shape({
    email: Yup.string()
      .email("Hatalı Email biçimi")
      .required("Bu alanın doldurulması zorunlu"),
    password: Yup.string()
      .nullable()
      .required("Bu alanın doldurulması zorunlu"),
    firstName: Yup.string()
      .nullable()
      .required("Bu alanın doldurulması zorunlu"),
    lastName: Yup.string()
      .nullable()
      .required("Bu alanın doldurulması zorunlu"),
    phoneNumber: Yup.number().required("Bu alanın doldurulması zorunlu"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: systemEmployeeSchema,
    onSubmit: (values) => {
      systemEmployeeService.add(values).then((result) =>
          result.data.success? success(result.data.message): error(result.data.message)
        );
        
    },
  });


  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={triggerButtonn}
        size="tiny"
        closeIcon
      >
        <Modal.Header>Sistem Çalışanı Ekleme</Modal.Header>
        <Modal.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Modal.Description>
              <Form.Group>
                <Input
                  fluid
                  label="Ad"
                  style={{ width: "49%" }}
                  type="text"
                  placeholder="Ad"
                  error={Boolean(formik.errors.firstName)}
                  value={formik.values.firstName}
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.firstName}
                  </p>
                )}
                <Input
                  fluid
                  label="Soyad"
                  style={{ width: "50%" }}
                  type="text"
                  placeholder="Soyad"
                  error={Boolean(formik.errors.lastName)}
                  value={formik.values.lastName}
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.lastName}
                  </p>
                )}
              </Form.Group>
              <Form.Group>
                <Input
                  fluid
                  label="Email"
                  style={{ width: "49%" }}
                  type="email"
                  placeholder="Email Adresi"
                  error={Boolean(formik.errors.email)}
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.email}
                  </p>
                )}
                <Input
                  fluid
                  label="Telefon Numarası"
                  style={{ width: "50%" }}
                  type="text"
                  placeholder="55555555555"
                  error={Boolean(formik.errors.phoneNumber)}
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.phoneNumber}
                  </p>
                )}
              </Form.Group>
              <Form.Field>
                <Input
                  fluid
                  label="Parola"
                  style={{ width: "100%" }}
                  type="password"
                  error={Boolean(formik.errors.password)}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  name="password"
                  placeholder="Parola"
                />
                {formik.errors.password && formik.touched.password && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.password}
                  </p>
                )}
              </Form.Field>
              <Form.Field>
                <Button
                  content="Ekle"
                  labelPosition="right"
                  icon="add"
                  positive
                  type="submit"
                  style={{ marginLeft: "20px" }}
                />
              </Form.Field>
            </Modal.Description>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
