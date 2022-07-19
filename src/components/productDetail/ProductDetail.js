import { useState } from "react";
import styled from "styled-components";

import Sidebar from "../socialmedialinks/Sidebar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 2;
  margin-left: 7em;
`;

const Image = styled.img`
  height: 80%;
  padding: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = (props) => {
  const { productToBeDisplayed } = props;
  return (
    <Container>
      <ImgContainer>
        <Image src={productToBeDisplayed.image} />
      </ImgContainer>
      <InfoContainer>
        <Title>{productToBeDisplayed.title}</Title>
        <Desc>{productToBeDisplayed.description}</Desc>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Container>
  );
};

export default Slider;
