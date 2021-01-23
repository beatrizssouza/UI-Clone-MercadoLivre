import React from 'react';

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";
import MoreProduct from "../MoreProduct";

import tshirtImage from "../../assets/tshirt.png"

import {  Container,
          Row,
          Panel,
          Column, 
          Gallery, 
          Section, 
          Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>

        <Column>
          <Gallery>
            <img alt="T-shirt" src= {tshirtImage} />
          </Gallery>

          <MoreProduct />
          <Info />
        </Column>

        <Column>

          <ProductAction />
          <SellerInfo />

          <WarrantySection />
            
        </Column>

      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4> Garantia </h4>

    <div>
      <span>
        <p className="title"> Compra garantida com o Lorem Ipsum </p>
        <p className="description"> Receba o produto quje está esperando ou devolvemos o seu dinheiro </p>
      </span>
      <span>
        <p className="title"> Garantia do vendedor </p>
        <p className="description"> sem garantia </p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <span>Descrição <br/><br/> </span>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta metus molestie, hendrerit felis at, varius quam. Vestibulum nec odio nec tortor tristique euismod vitae a leo. Suspendisse fringilla non tellus molestie viverra. Quisque id sodales arcu. Aliquam laoreet urna sit amet risus finibus, vel finibus lectus suscipit. 
    <br/>
    <br/>

    Itens inclusos: <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    <br />

    Nam ut faucibus nisi, vel tincidunt lectus. Maecenas viverra metus vitae purus aliquet, quis placerat metus fringilla. Aenean ac velit nunc. Vivamus vulputate erat vel nisl cursus aliquet. Phasellus lobortis ultricies sagittis. Ut efficitur odio diam, vitae aliquet velit dignissim sit amet. Aenean ac purus laoreet, faucibus sem tempus, condimentum urna. Vestibulum a nulla neque. In et nulla urna. In lobortis mi enim, id tristique tortor consectetur ut.

    
    </p>
  </Description>
)
export default Product;
