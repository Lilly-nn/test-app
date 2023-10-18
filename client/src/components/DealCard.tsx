import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url("https://assets-global.website-files.com/63bd7443c5c4c66606ad6362/6474519fd04fa8c953602c60_Untitled%20design%20(1).jpg");
  background-repeat: no-repeat;
  max-width: 630px;
  min-width: 630px;
  height: 400px;
  background-size: 100%;
  position: relative;
  background-size: auto 100%;
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

export default function DealCard() {
  return (
    <ImageContainer>
      <Info>
        <Title>The marina torch</Title>
        <InfoContainer>
          <InfoDetails>
            <InfoItem>6 500 000 Dhs</InfoItem>
            <InfoItem>Tiket - 60 000 Dhs</InfoItem>
          </InfoDetails>
          <InfoDetails>
            <InfoItem>Yield 9.25%</InfoItem>
            <InfoItem>Days left 150</InfoItem>
          </InfoDetails>
          <InfoDetails>
            <InfoItem>Sold 75%</InfoItem>
          </InfoDetails>
        </InfoContainer>
      </Info>
    </ImageContainer>
  );
}
