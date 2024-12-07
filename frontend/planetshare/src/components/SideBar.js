import React from "react";
import styled from "styled-components";
import { Bell, MessageSquare, Settings, User, LogOut } from "lucide-react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
`;

const Sidebar = styled.div`
  width: 260px;
  background-color: #047857;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: sticky;
  top: 0;
  left: 0;
  length: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 32px;
`;

const RightPanel = styled.div`
  width: 320px;
  padding: 24px;
  border-left: 1px solid #e5e7eb;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
`;

const SearchInput = styled.input`
  width: 90%;
  background-color: #065f46;
  color: white;
  padding: 12px 12px 12px 42px;
  border-radius: 4px;
  border: none;

  &::placeholder {
    color: #fff;
  }
`;

const Section = styled.div``;

const SectionTitle = styled.h2`
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 100%;
  background-color: #065f46;
  color: white;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #fff;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: white;
  text-decoration: none;

  svg {
    margin-right: 8px;
  }
`;

const WelcomeTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const WelcomeSubtitle = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
`;

const Label = styled.label`
  display: block;
`;

const DayButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d1fae5;
  color: #047857;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #a7f3d0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
  }
`;

const EmissionsSavings = styled.div`
  background-color: #ecfdf5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;

const ProgressCircle = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const ProgressText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #047857;
`;

const FriendsActivity = styled.div`
  margin-top: 16px;
`;

const FriendPost = styled.div`
  margin-bottom: 16px;
`;

const PostImage = styled.div`
  position: relative;
  height: 192px;
  border-radius: 8px;
  overflow: hidden;
`;

const PostOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  color: white;
`;

const SideBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Sidebar>
      <div>
        <Title style={{ fontSize: "36px", mt: "20px" }}>PlanetShare</Title>

        <Subtitle>A carbon footprint networking platform</Subtitle>

        <SectionTitle style={{ marginTop: "40px" }}>
          Looking to share a ride?
        </SectionTitle>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            position: "relative",
            border: "1px solid #fff",
            borderRadius: "4px",
          }}
        >
          <SearchIcon sx={{ position: "absolute", left: "5px" }} />
          <SearchInput type="text" placeholder="Search" />
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle
            style={{
              marginTop: "32px",
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: "2px",
            }}
          >
            I want...
          </SectionTitle>
          <RadioGroup style={{ display: "flex", gap: "0.5rem" }}>
            <input type="radio" id="pickup" name="want" />
            <Label htmlFor="pickup">Pickup within</Label>
            <select
              type="select"
              name="distance"
              style={{
                width: "48px",
                marginLeft: "8px",
                backgroundColor: "#065f46",
                borderRadius: "4px",
                padding: "4px",
                border: "1px solid #fff",
                color: "#fff",
              }}
            >
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
            <p>km</p>
          </RadioGroup>
          <RadioGroup style={{ display: "flex", gap: "1rem" }}>
            <input type="radio" id="departure" name="want" />
            <Label htmlFor="departure">Departure time</Label>
            <select
              type="select"
              name="time"
              style={{
                width: "48px",
                marginLeft: "8px",
                backgroundColor: "#065f46",
                borderRadius: "4px",
                padding: "4px",
                border: "1px solid #fff",
                color: "#fff",
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30 or more</option>
            </select>
            <p> minutes</p>
          </RadioGroup>
        </Section>

        <Section>
          <SectionTitle
            style={{ marginTop: "12px", fontSize: "1rem", fontWeight: 700 }}
          >
            Vehicle Type
          </SectionTitle>
          <Select>
            <option value="any">Any</option>
            <option value="hybrid">Hybrid</option>
            <option value="electric">Electric</option>
          </Select>
        </Section>
        <Button
          type="submit"
          style={{
            backgroundColor: "#0B6159",
            padding: "6px 12px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "1.8rem",
            fontWeight: 700,
            color: "#fff",
            border: "1px solid #fff",
          }}
        >
          Submit
        </Button>
      </Form>

      <nav
        style={{
          justifySelf: "end",
          alignSelf: "bottom",
          flexGrow: 1,
          alignContent: "end",
        }}
      >
        <NavItem href="#">
          <MessageSquare /> Conversations
        </NavItem>
        <NavItem href="#">
          <Settings /> Settings
        </NavItem>
        <NavItem href="#">
          <User /> Profile
        </NavItem>
        <NavItem href="#">
          <LogOut /> Log Out
        </NavItem>
      </nav>
    </Sidebar>
  );
};

export default SideBar;
