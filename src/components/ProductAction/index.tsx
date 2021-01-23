import React from 'react';

import { Container,
         Condition,
         Row,
         HeartIcon,
         DispatchTag,
         PriceCard,
         PriceRow,
         InstallmentsInfo,
         StockStatus,
         MethodCard,
         CheckIcon,
         Action,
         Button,
         Benefits,
         ShieldIcon,
           
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 10 vendidas</Condition>
    
      <Row>
        <h1>Camiseta Branca de Marca Desconhecida</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando Normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
        
      </PriceCard>

      <StockStatus> Estoque Disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Lorem Impus</span>
        </div>

        <a href="#" className="more"> 
          Ver mais opções
        </a>
      </MethodCard>

      <Action>
        <Button solid>Comprar Agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Action>

      <Benefits>
        <li>
          <ShieldIcon/>
          <p> Compra Garantida, receba o produto esperado ou devolvemos o dinheiro.</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
