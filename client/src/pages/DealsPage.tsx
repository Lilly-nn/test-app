import styled from "styled-components";
import DealCard from "../components/DealCard";

const Section = styled.section`
  min-height: 100vh;
  background: #e5e5e585;
`;

const Container = styled.div`
  margin: 0 80px;
  padding: 50px 0;
`;

const Title = styled.h6`
  color: #b29f7e;
  font-family: Merriweather;
  font-size: 28px;
  font-weight: 700;
  margin-top: 50px;
`;

const DealsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default function DealsPage() {
  return (
    <Section>
      <Container>
        <Title>Open deals</Title>
        <DealsContainer>
          <DealCard />
          <DealCard />
          <DealCard />
        </DealsContainer>
      </Container>
    </Section>
  );
}
