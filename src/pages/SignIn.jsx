import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Label,
  Input,
  Form,
  GridColumn,
  Container,
  Button,
  Checkbox,
} from "semantic-ui-react";

export default function SignIn() {
  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Hatalı Email biçimi")
      .required("Bu alanın doldurulması zorunlu"),
    password: Yup.string()
      .nullable()
      .required("Bu alanın doldurulması zorunlu"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Container
        style={{
          border: "1px solid #f5f5f5",
          borderRadius: "10px",
        }}
      >
        <GridColumn
          style={{
            textAlign: "center",
            display: "block",
            alignItems: "center",
            height: "80vh",
            width: "60%",
            marginLeft: "20%",
            marginTop: "8%",
          }}
        >
          <h1
            style={{
              color: "#1979F5",
              fontFamily: "sans-serif",
              fontSize: "3em",
            }}
          >
            HRMS'e Giriş Yap
          </h1>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Label active circular content="Email" prompt size="huge" />
              <Input
                className="mt1bem"
                fluid
                style={{ width: "100%" }}
                type="text"
                placeholder="Email"
                error={Boolean(formik.errors.email)}
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Field>
            {formik.errors.Email && formik.touched.Email && (
              <p style={{ fontSize: "small", color: "red" }}>
                {formik.errors.Email}
              </p>
            )}
            <Form.Field>
              <Label active circular content="Parola" prompt size="huge" />
              <Input
                className="mt1bem"
                fluid
                style={{ width: "100%" }}
                type="text"
                placeholder="Parola"
                error={Boolean(formik.errors.password)}
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Field>
            {formik.errors.password && formik.touched.password && (
              <p style={{ fontSize: "small", color: "red" }}>
                {formik.errors.password}
              </p>
            )}
            <Form.Field>
              <Form.Field>
                <Checkbox
                  style={{
                    float: "right",
                    padding: "20px",
                  }}
                  defaultChecked
                  label="Beni hatırla"
                />
              </Form.Field>
              <Button
                fluid
                size="large"
                content="Giriş Yap"
                primary
                circular
                type="submit"
              />
            </Form.Field>
            <Form.Group>
              <a href="#">Şifremi unuttum!</a>
              <a
                style={{
                  marginLeft: "0.5em",
                }}
                href="signup"
              >
                Kaydol!
              </a>
            </Form.Group>
          </Form>
        </GridColumn>
      </Container>
    </div>
  );
}
