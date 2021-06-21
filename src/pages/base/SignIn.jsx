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
  Image
} from "semantic-ui-react";

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
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
            height: "90vh",
            width: "60%",
            marginLeft: "20%",
            marginTop: "0.5em",
          }}
        >
          <Image avatar size="medium"  src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"/> 
          <h1
            style={{
              color: "#1979F5",
              fontFamily: "sans-serif",
              fontSize: "2.5em",
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
            <Form.Field>
              <Form.Field>
                <Checkbox
                  style={{
                    float: "right",
                    padding: "15px",
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
