import React from "react";
import { Form, Input, Button, FormGroup, Menu } from "semantic-ui-react";

export default function SearchFilter() {
  return (
    <div >
      <Form id='searchFilter'>
        <h4>İsme Göre Ara</h4>
        <FormGroup inline>
          <Form.Field
            error
            control={Input}
            placeholder="İstanbul"
          />
          <Button basic size='mini'>
            Ara
          </Button>
        </FormGroup>
        <FormGroup inline>
          <Form.Field
          error
            control={Input}
            placeholder="Yazılım Geliştirici"
          />
          <Button basic size='mini'>
            Ara
          </Button>
        </FormGroup>
        <FormGroup inline>
          <Form.Field
          error
            control={Input}
            placeholder="Tannet "
          />
          <Button basic size='mini'>
            Ara
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
