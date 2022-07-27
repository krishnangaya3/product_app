import styled from "styled-components";
import Sidebar from "../socialmedialinks/Sidebar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Container = styled.div`
  width: 100%;
  height: 97vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 60px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
`;

const ImgContainer = styled.div`
  height: 150%;
  flex: 2;
  margin-left: 7em;
`;

const Image = styled.img`
  height: 40%;
  padding: 50px;
`;

const InfoContainer = styled.div`
  flex: 3;
  padding: 50px;
  //   overflow: scroll;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 15px;
  font-weight: 40;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  position:relative
  cursor: pointer;
  height: 40px;
  margin-top: 30%;
`;

const Slider = (props) => {
  const { productToBeDisplayed } = props;
  console.log("productToBeDisplayed::", productToBeDisplayed);
  return (
    <Container>
      <ImgContainer>
        <Image src={productToBeDisplayed.image} />
        <Title>{productToBeDisplayed.title}</Title>
      </ImgContainer>
      <InfoContainer>
        <Desc>{productToBeDisplayed.description}</Desc>
        <Title>Price:${productToBeDisplayed.price}</Title>
        {productToBeDisplayed.rating != undefined && (
          <Stack spacing={1}>
            <Rating
              name="read-only"
              value={productToBeDisplayed.rating.rate}
              precision={0.1}
              readOnly
            />
          </Stack>
        )}
        <Button>SHOP NOW</Button>
      </InfoContainer>
      <Sidebar />
    </Container>
  );
};

export default Slider;
