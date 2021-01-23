import React from 'react';

import Carousel from 'react-elastic-carousel';
import { Container,
         Item,
         PriceCard,
         PriceRow,
         InstallmentsInfo,
         MethodCard,
         CheckIcon,
}  from "./styles";
import tshirtImage from "../../assets/tshirt.png"

const breakPoints = [
  {width: 1, itemsToShow: 2},
  {width: 550, itemsToShow: 4},
  {width: 768, itemsToShow: 4},
  {width: 1200, itemsToShow: 4},
];

const MoreProduct: React.FC = () => {
  
  return (
    <Container>    
        <span> Quem viu este produto também comprou </span>
        <Carousel breakPoints={breakPoints}>
              <Item>
                <PriceCard>
                  <div>
                    <img alt="T-shirt" src= {tshirtImage} />
                            
                    <PriceRow>
                      <span className="symbol">R$</span>
                      <span className="fraction">34</span>
                      <span className="cents">99</span>
                    </PriceRow>

                    <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
                    
                    <MethodCard>
                      <div>
                        <span className="title">Frete grátis</span>
                        <CheckIcon />
                        <span className="title1">FULL</span>
                      </div>
                    </MethodCard>

                  </div>
                </PriceCard>
                  
                  
              </Item>

              <Item>
                <PriceCard>
                  <div>
                    <img alt="T-shirt" src= {tshirtImage} />
                            
                    <PriceRow>
                      <span className="symbol">R$</span>
                      <span className="fraction">34</span>
                      <span className="cents">99</span>
                    </PriceRow>

                    <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
                    
                    <MethodCard>
                      <div>
                        <span className="title">Frete grátis</span>
                        <CheckIcon />
                        <span className="title1">FULL</span>
                      </div>
                    </MethodCard>

                  </div>
                </PriceCard>
              </Item>

              <Item>
              <PriceCard>
                  <div>
                    <img alt="T-shirt" src= {tshirtImage} />
                            
                    <PriceRow>
                      <span className="symbol">R$</span>
                      <span className="fraction">34</span>
                      <span className="cents">99</span>
                    </PriceRow>

                    <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
                    
                    <MethodCard>
                      <div>
                        <span className="title">Frete grátis</span>
                        <CheckIcon />
                        <span className="title1">FULL</span>
                      </div>
                    </MethodCard>

                  </div>
                </PriceCard>
              </Item>
              <Item>
              <PriceCard>
                  <div>
                    <img alt="T-shirt" src= {tshirtImage} />
                            
                    <PriceRow>
                      <span className="symbol">R$</span>
                      <span className="fraction">34</span>
                      <span className="cents">99</span>
                    </PriceRow>

                    <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
                    
                    <MethodCard>
                      <div>
                        <span className="title">Frete grátis</span>
                        <CheckIcon />
                        <span className="title1">FULL</span>
                      </div>
                    </MethodCard>

                  </div>
                </PriceCard>
              </Item>
              <Item>
              <PriceCard>
                  <div>
                    <img alt="T-shirt" src= {tshirtImage} />
                            
                    <PriceRow>
                      <span className="symbol">R$</span>
                      <span className="fraction">34</span>
                      <span className="cents">99</span>
                    </PriceRow>

                    <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
                    
                    <MethodCard>
                      <div>
                        <span className="title">Frete grátis</span>
                        <CheckIcon />
                        <span className="title1">FULL</span>
                      </div>
                    </MethodCard>

                  </div>
                </PriceCard>
              </Item>
              <Item>
              <PriceCard>
                  <div>
                    <img alt="T-shirt" src= {tshirtImage} />
                            
                    <PriceRow>
                      <span className="symbol">R$</span>
                      <span className="fraction">34</span>
                      <span className="cents">99</span>
                    </PriceRow>

                    <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
                    
                    <MethodCard>
                      <div>
                        <span className="title">Frete grátis</span>
                        <CheckIcon />
                        <span className="title1">FULL</span>
                      </div>
                    </MethodCard>

                  </div>
                </PriceCard>
              </Item>
              <Item>
              <PriceCard>
                  <div>
                    <img alt="T-shirt" src= {tshirtImage} />
                            
                    <PriceRow>
                      <span className="symbol">R$</span>
                      <span className="fraction">34</span>
                      <span className="cents">99</span>
                    </PriceRow>

                    <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
                    
                    <MethodCard>
                      <div>
                        <span className="title">Frete grátis</span>
                        <CheckIcon />
                        <span className="title1">FULL</span>
                      </div>
                    </MethodCard>

                  </div>
                </PriceCard>
              </Item>
        
        </Carousel>
     
    </Container>
  );
};

export default MoreProduct;
