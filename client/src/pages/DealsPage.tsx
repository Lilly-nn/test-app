import styled from "styled-components";
import DealCard from "../components/DealCard";
import { Deal } from "../types/types";
import { useState, useEffect } from "react";
import { getErrorMessage } from "../utils/getApiError";
import axios from "../axios.config";
import { useDispatch } from "react-redux";
import { signOut } from "../context/features/authorize/authorizeSlice";
import { useNavigate } from "react-router-dom";

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
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchDeals() {
    try {
      setError(null);
      const res = await axios.get("/deals", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      });
      setDeals(res.data);
    } catch (err) {
      const { message, status } = getErrorMessage(err);
      setError(message);
      if (status === 401) {
        dispatch(signOut());
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDeals();
  }, []);
  return (
    <Section>
      <Container>
        <Title>Open deals</Title>
        <DealsContainer>
          {!loading &&
            !error &&
            deals.length > 0 &&
            deals.map((deal) => <DealCard key={deal.id} {...deal} />)}
          {loading && !error && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </DealsContainer>
      </Container>
    </Section>
  );
}
