import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  Form,
  GridColumn,
  Container,
  Header,
} from "semantic-ui-react";
import EmployeeService from "../services/employeeService";
import { useToasts } from "react-toast-notifications";
import { info } from "react-toast-notification";

export default function SignUp() {
  const { addToast } = useToasts();
  const signUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Hatalı Email biçimi")
      .required("Email Adresinizi Giriniz"),
    password: Yup.string().nullable().required("Parolanızı Oluşturunuz!"),
    firstName: Yup.string()
      .nullable()
      .required("Lütfen adınızı bizimle paylaşınız!"),
    lastName: Yup.string().nullable().required("Soyadınızı doldurunuz"),
    nationalityId: Yup.number().required(
      "Tc Kimlik numarası doldurulması zorunlu!"
    ),
    birthDate: Yup.date()
      .nullable()
      .required("Lütfen doğum tarihinizi bizimle paylaşınız!"),
    phoneNumber: Yup.number().required(
      "Lütfen telefon numaranızı bizimle paylaşınız!"
    ),
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
      employeeService.add(values).then((result) =>
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

  {
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

    formik.errors.birthDate &&
      formik.touched.birthDate &&
      info(formik.errors.birthDate);

    formik.errors.nationalityId &&
      formik.touched.nationalityId &&
      info(formik.errors.nationalityId);
  }

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
            color="blue"
          >
            {" "}
            HRMS'e Kayıt Ol
          </Header>
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
