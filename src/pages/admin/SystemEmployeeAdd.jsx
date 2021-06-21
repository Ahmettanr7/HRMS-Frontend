import React, { useState } from "react";
import { Button, Input, Modal, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";
import { info } from "react-toast-notification";
import SystemEmployeeSerivce from "../../services/systemEmployeeService";

export default function SystemEmployeeAdd({ triggerButtonn }) {
  const { addToast } = useToasts();

  const [open, setOpen] = useState(false);

  let systemEmployeeService = new SystemEmployeeSerivce();

  const systemEmployeeSchema = Yup.object().shape({
    email: Yup.string()
      .email("Hatalı Email biçimi")
      .required("Email adresi giriniz!"),
    password: Yup.string().nullable().required("Parola oluşturunuz!"),
    firstName: Yup.string().nullable().required("İsim alanını doldurunuz!"),
    lastName: Yup.string().nullable().required("Soyad alanını doldurunuz"),
    phoneNumber: Yup.number().required("telefon alanını doldurunuz!"),
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
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        })
      );
    },
  });


    formik.errors.firstName &&
    formik.touched.firstName &&
    info(formik.errors.firstName);

  formik.errors.lastName &&
    formik.touched.lastName &&
    info(formik.errors.lastName);

  formik.errors.phoneNumber &&
    formik.touched.phoneNumber &&
    info(formik.errors.phoneNumber);

  formik.errors.email && formik.touched.email && info(formik.errors.email);

  formik.errors.password &&
    formik.touched.password &&
    info(formik.errors.password);

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
