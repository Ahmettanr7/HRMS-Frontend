import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Form, GridColumn, Container, Header } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function SignUpEmployer() {
  const signUpEmployerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Hatalı Email biçimi")
      .required("Bu alanın doldurulması zorunlu"),
    password: Yup.string()
      .nullable()
      .required("Bu alanın doldurulması zorunlu"),
      companyName: Yup.string()
      .nullable()
      .required("Bu alanın doldurulması zorunlu"),
      webSite: Yup.string()
      .nullable()
      .required("Bu alanın doldurulması zorunlu"),
      taxNumber: Yup.number().required("Bu alanın doldurulması zorunlu"),
    phoneNumber: Yup.number().required("Bu alanın doldurulması zorunlu"),
  });

  let employerService = new EmployerService();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      companyName: "",
      webSite: "",
      phoneNumber: "",
      taxNumber: "",
    },
    validationSchema: signUpEmployerSchema,
    onSubmit: (values) => {
      employerService.add(values).then((result) => console.log(result.data.message));
    },
  });

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
              color='blue'
              > HRMS'e İşveren Olarak Kayıt Ol</Header>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Input
                fluid
                label="Şirket Adı"
                style={{ width: "49%" }}
                type="text"
                placeholder="Ahmet"
                error={Boolean(formik.errors.companyName)}
                value={formik.values.companyName}
                name="companyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.companyName && formik.touched.companyName && (
                <p style={{ fontSize: "small", color: "red" }}>
                  {formik.errors.companyName}
                </p>
              )}
              <Input
                fluid
                label="Web Sitesi Adresiniz"
                style={{ width: "50%" }}
                type="text"
                placeholder="ex.com"
                error={Boolean(formik.errors.webSite)}
                value={formik.values.webSite}
                name="webSite"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.webSite && formik.touched.webSite && (
                <p style={{ fontSize: "small", color: "red" }}>
                  {formik.errors.webSite}
                </p>
              )}
            </Form.Group>
            <Form.Group>
              <Input
                fluid
                label="Vergi Numaranız"
                style={{ width: "49%" }}
                type="text"
                placeholder="Vergi Numaranız"
                error={Boolean(formik.errors.taxNumber)}
                value={formik.values.taxNumber}
                name="taxNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.taxNumber && formik.touched.taxNumber && (
                <p style={{ fontSize: "small", color: "red" }}>
                  {formik.errors.taxNumber}
                </p>
              )}
              <Input
                fluid
                label="Telefon Numaranız"
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
