import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Form, GridColumn, Container, Header } from "semantic-ui-react";
import EmployeeService from "../services/employeeService";

export default function SignUp() {
  const signUpSchema = Yup.object().shape({
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
    nationalityId: Yup.number().required("Bu alanın doldurulması zorunlu"),
    birthDate: Yup.date().nullable().required("Bu alan zorunlu"),
    phoneNumber: Yup.number().required("Bu alanın doldurulması zorunlu"),
  });

  let employeeService = new EmployeeService();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      nationalityId: "",
      birthDate: "",
      phoneNumber: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      employeeService.add(values).then((result) => console.log(result.data.message));
    },
  });
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container>
        <GridColumn
          style={{
            textAlign: "center",
            display: "block",
            alignItems: "center",
            height: "90vh",
            width: "60%",
            marginLeft: "20%",
            marginTop: "5%",
          }}
        >
              <Header 
              style={{
                fontFamily: "sans-serif",
                fontSize: "3em",
              }}
              color='blue'> HRMS'e Kayıt Ol</Header>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Input
                fluid
                label="Adınız"
                style={{ width: "49%" }}
                type="text"
                placeholder="Ahmet"
                error={Boolean(formik.errors.description)}
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
                label="Soyadınız"
                style={{ width: "50%" }}
                type="text"
                placeholder="Tanrıkulu"
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
                label="Tc Kimlik Numaranız"
                style={{ width: "50%" }}
                type="text"
                placeholder="Tc Kimlik Numarası"
                error={Boolean(formik.errors.nationalityId)}
                value={formik.values.nationalityId}
                name="nationalityId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.nationalityId && formik.touched.nationalityId && (
                <p style={{ fontSize: "small", color: "red" }}>
                  {formik.errors.nationalityId}
                </p>
              )}
              <Input
                fluid
                label="Telefon Numaranız"
                style={{ width: "49%" }}
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
              <Form.Field>
                <Input
                  fluid
                  label="Doğum Tarihiniz"
                  type="date"
                  error={Boolean(formik.errors.birthDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "birthDate")
                  }
                  value={formik.values.birthDate}
                  onBlur={formik.handleBlur}
                  name="birthDate"
                  placeholder="Doğum Tarihi"
                />
                {formik.errors.dueDate && formik.touched.dueDate && (
                  <p style={{ fontSize: "small", color: "red" }}>
                    {formik.errors.dueDate}
                  </p>
                )}
              </Form.Field>
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="Email Adresiniz"
                style={{ width: "100%" }}
                id="email"
                name="email"
                error={Boolean(formik.errors.email)}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                type="email"
                placeholder="example@email.com"
              />
              {formik.errors.email && formik.touched.email && (
                <p style={{ fontSize: "small", color: "red" }}>
                  {formik.errors.email}
                </p>
              )}
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="Parola oluşturunuz"
                style={{ width: "100%" }}
                type="password"
                error={Boolean(formik.errors.password)}
                onChange={formik.handleChange}
                value={formik.values.DueDate}
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
                content="Kaydol"
                labelPosition="right"
                icon="registered"
                primary
                circular
                basic
                active
                type="submit"
                style={{ marginLeft: "20px" }}
              />
            </Form.Field>
          </Form>
        </GridColumn>
      </Container>
    </div>
  );
}
