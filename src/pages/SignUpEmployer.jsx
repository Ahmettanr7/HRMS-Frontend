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
  Image
} from "semantic-ui-react";
import EmployerService from "../services/employerService";
import { useToasts } from "react-toast-notifications";
import { info } from "react-toast-notification";

export default function SignUpEmployer() {
  const { addToast } = useToasts();
  const signUpEmployerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Hatalı Email biçimi")
      .required("Email Adresinizi Giriniz"),
    password: Yup.string().nullable().required("Parolanızı Oluşturunuz!"),
    companyName: Yup.string()
      .nullable()
      .required("Lütfen Firma İsminizi Bizimle Paylaşınız"),
    webSite: Yup.string()
      .nullable()
      .required("Lütfen Web Sitenizin Adresini Bizimle Paylaşınız!"),
    taxNumber: Yup.number().required("Vergi Numaranızı Bizimle Paylaşınız!"),
    phoneNumber: Yup.number().required("Telefon Numaranızı Bizimle Paylaşınız"),
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
      employerService.add(values).then((result) =>
        addToast(result.data.message, {
          appearance: result.data.success ? "success" : "error",
          autoDismiss: true,
        })
      );
    },
  });
    
      formik.errors.webSite &&
    formik.touched.webSite &&
    info(formik.errors.webSite);

    formik.errors.companyName &&
    formik.touched.companyName &&
    info(formik.errors.companyName);

    formik.errors.taxNumber &&
    formik.touched.taxNumber &&
    info(formik.errors.taxNumber);

    formik.errors.phoneNumber &&
    formik.touched.phoneNumber &&
    info(formik.errors.phoneNumber);

    formik.errors.email &&
    formik.touched.email &&
    info(formik.errors.email);

    formik.errors.password &&
    formik.touched.password &&
    info(formik.errors.password);

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
            marginTop: "0.5em",
          }}
        >
          <Image disabled size="medium" centered src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"/> 
          <Header
            style={{
              fontFamily: "sans-serif",
              fontSize: "3em",
            }}
            color="blue"
          >
            HRMS'e İşveren Olarak Kayıt Ol
          </Header>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Input
                fluid
                placeholder="Şirket Adı"
                style={{ width: "49%" }}
                type="text"
                error={Boolean(formik.errors.companyName)}
                value={formik.values.companyName}
                name="companyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Input
                fluid
                placeholder="Web Sitesi Adresiniz"
                style={{ width: "50%" }}
                type="text"
                error={Boolean(formik.errors.webSite)}
                value={formik.values.webSite}
                name="webSite"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            <Form.Group>
              <Input
                fluid
                placeholder="Vergi Numaranız"
                style={{ width: "49%" }}
                type="text"
                error={Boolean(formik.errors.taxNumber)}
                value={formik.values.taxNumber}
                name="taxNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Input
                fluid
                placeholder="Telefon Numaranız"
                style={{ width: "50%" }}
                type="text"
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
                placeholder="Email Adresiniz"
                style={{ width: "100%" }}
                id="email"
                name="email"
                error={Boolean(formik.errors.email)}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                type="email"
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                placeholder="Parola oluşturunuz"
                style={{ width: "100%" }}
                type="password"
                error={Boolean(formik.errors.password)}
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                name="password"
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
              />
            </Form.Field>
          </Form>
        </GridColumn>
      </Container>
    </div>
  );
}
