import styled from "styled-components";
import { Deal } from "../types/types";
import { calculatePercent } from "../utils/calculation";

const ImageContainer = styled.div`
  background-repeat: no-repeat;
  max-width: 630px;
  min-width: 630px;
  height: 400px;
  position: relative;
  background-size: auto;
  background-position: center;
  @media (max-width: 1340px) {
    min-width: 500px;
  }
  @media (max-width: 570px) {
    min-width: 450px;
    height: 300px;
  }
  @media (max-width: 460px) {
    min-width: 380px;
    height: 220px;
  }
  @media (max-width: 460px) {
    min-width: 320px;
    height: 220px;
  }
`;

const Info = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  bottom: 0;
  padding: 14px 20px;
`;

const Title = styled.div`
  font-family: Merriweather;
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const InfoItem = styled.p`
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
`;

export default function DealCard(props: Deal) {
  const {
    title,
    currency,
    depositSum,
    image,
    totalSum,
    daysLeft,
    percentsSold,
  } = props;
  const yieldPercent = calculatePercent(totalSum, depositSum);
  return (
    <ImageContainer
      style={{
        backgroundImage: image
          ? `url(${process.env.REACT_APP_API_URL}/${image})`
          : `url(https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg)`,
      }}
    >
      <Info>
        <Title>{title}</Title>
        <InfoContainer>
          <InfoDetails>
            <InfoItem>
              {totalSum} {currency}
            </InfoItem>
            <InfoItem>
              Tiket - {depositSum} {currency}
            </InfoItem>
          </InfoDetails>
          <InfoDetails>
            <InfoItem>Yield {yieldPercent.toString().slice(0, 2)}%</InfoItem>
            <InfoItem>Days left {daysLeft}</InfoItem>
          </InfoDetails>
          <InfoDetails>
            <InfoItem>Sold {percentsSold}%</InfoItem>
          </InfoDetails>
        </InfoContainer>
      </Info>
    </ImageContainer>
  );
}
