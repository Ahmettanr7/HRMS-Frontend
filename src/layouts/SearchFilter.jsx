import React from "react";
import { Form,  Button, FormGroup, Search } from "semantic-ui-react";

export default function SearchFilter() {
  return (
    <div style={{backgroundColor:'white',borderRadius:'10px'}}>
      <Form id='searchFilter'>
        <h4>İsme Göre Ara</h4>
        <FormGroup inline>
          <Search category noResultsMessage='Şehir bulunamadı' noResultsDescription='Aradığınız kritere uygun şehir bulunamadı' minCharacters={3}  placeholder="İstanbul"/>
          <Button basic size='mini'>
            Ara
          </Button>
        </FormGroup>
        <FormGroup inline>
           <Search noResultsMessage='Pozisyon bulunamadı' noResultsDescription='Aradığınız kritere uygun pozisyon bulunamadı' minCharacters={3} placeholder="Yazılım Geliştirici"/>
          <Button basic size='mini'>
            Ara
          </Button>
        </FormGroup>
        <FormGroup inline>
        <Search noResultsMessage='Şirket bulunamadı' noResultsDescription='Aradığınız kritere uygun şirket bulunamadı' minCharacters={3} placeholder="TANNET SOFT"/>
          <Button basic size='mini'>
            Ara
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
