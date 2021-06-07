import React from "react";
import { Form, Input, Button, FormGroup } from "semantic-ui-react";

export default function SearchFilter() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Form.Field
            control={Input}
            label="Şehir ara"
            placeholder="İstanbul"
          />
        </FormGroup>
        <Button compact>
            Ara
          </Button>
      </Form>
      <Form>
        <FormGroup>
          <Form.Field
            control={Input}
            label="Pozisyon ara"
            placeholder="Yazılım geliştirici"
          />
        </FormGroup>
        <Button compact>
            Ara
          </Button>
      </Form>
      <Form>
        <FormGroup>
          <Form.Field
            control={Input}
            label="Şirket ara"
            placeholder="Tannet "
          />
        </FormGroup>
        <Button compact>
            Ara
          </Button>
      </Form>
    </div>
  );
}
