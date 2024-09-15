import React from 'react'
import styled from 'styled-components'
import { Bell, MessageSquare, Settings, User, Users } from 'lucide-react'

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
`

const Sidebar = styled.div`
  width: 260px;
  background-color: #047857;
  color: white;
  padding: 24px;
`

const MainContent = styled.div`
  flex: 1;
  padding: 32px;
`

const RightPanel = styled.div`
  width: 320px;
  padding: 24px;
  border-left: 1px solid #e5e7eb;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`

const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`

const SearchInput = styled.input`
  width: 100%;
  background-color: #065f46;
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-bottom: 24px;

  &::placeholder {
    color: #34d399;
  }
`

const Section = styled.div`
  margin-bottom: 24px;
`

const SectionTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 8px;
`

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const Select = styled.select`
  width: 100%;
  background-color: #065f46;
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: none;
`

const NavItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: white;
  text-decoration: none;

  svg {
    margin-right: 8px;
  }
`

const WelcomeTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`

const WelcomeSubtitle = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const FormGroup = styled.div`
  display: flex;
  gap: 16px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`

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
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const IconGroup = styled.div`
  display: flex;
  gap: 16px;
`

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
  }
`

const EmissionsSavings = styled.div`
  background-color: #ecfdf5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`

const ProgressCircle = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`

const ProgressText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #047857;
`

const FriendsActivity = styled.div`
  margin-top: 16px;
`

const FriendPost = styled.div`
  margin-bottom: 16px;
`

const PostImage = styled.div`
  position: relative;
  height: 192px;
  border-radius: 8px;
  overflow: hidden;
`

const PostOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  color: white;
`

export default function Component() {
  return (
    <Container>
      <Sidebar>
        <Title>PlanetShare</Title>
        <Subtitle>A carbon footprint networking platform</Subtitle>
        
        <SearchInput type="text" placeholder="Search" />
        
        <Section>
          <SectionTitle>I want...</SectionTitle>
          <RadioGroup>
            <input type="radio" id="pickup" name="want" />
            <Label htmlFor="pickup">Pickup within</Label>
            <input type="number" style={{width: '48px', marginLeft: '8px', backgroundColor: '#065f46', borderRadius: '4px', padding: '4px'}} /> km
          </RadioGroup>
          <RadioGroup>
            <input type="radio" id="dropoff" name="want" />
            <Label htmlFor="dropoff">Drop-off within</Label>
            <input type="number" style={{width: '48px', marginLeft: '8px', backgroundColor: '#065f46', borderRadius: '4px', padding: '4px'}} /> km
          </RadioGroup>
          <RadioGroup>
            <input type="radio" id="departure" name="want" />
            <Label htmlFor="departure">Departure time within</Label>
            <input type="number" style={{width: '48px', marginLeft: '8px', backgroundColor: '#065f46', borderRadius: '4px', padding: '4px'}} /> km
          </RadioGroup>
        </Section>
        
        <Section>
          <SectionTitle>Vehicle Type</SectionTitle>
          <Select>
            <option>Any</option>
          </Select>
        </Section>
        
        <nav>
          <NavItem href="#"><Settings /> Settings</NavItem>
          <NavItem href="#"><User /> Profile</NavItem>
          <NavItem href="#"><MessageSquare /> Conversations</NavItem>
          <NavItem href="#"><Users /> Connect</NavItem>
        </nav>
      </Sidebar>

      <MainContent>
        <WelcomeTitle>Welcome</WelcomeTitle>
        <WelcomeSubtitle>Hello! You need to register to enter.</WelcomeSubtitle>
        
        <Form>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" />
          </div>
          
          <FormGroup>
            <div style={{flex: 1}}>
              <Label htmlFor="start-time">Start Time</Label>
              <Input type="time" id="start-time" />
            </div>
            <div style={{flex: 1}}>
              <Label htmlFor="end-time">End Time</Label>
              <Input type="time" id="end-time" />
            </div>
          </FormGroup>
          
          <div>
            <SectionTitle>Commute Days</SectionTitle>
            <div style={{display: 'flex', gap: '8px'}}>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                <DayButton key={day}>{day}</DayButton>
              ))}
            </div>
          </div>
        </Form>
      </MainContent>

      <RightPanel>
        <Header>
          <IconGroup>
            <Bell />
            <MessageSquare />
          </IconGroup>
          <ProfileInfo>
            <span>Kelsey Davis</span>
            <img src="/placeholder.svg" alt="Profile" width={32} height={32} style={{borderRadius: '50%'}} />
          </ProfileInfo>
        </Header>
        
        <EmissionsSavings>
          <SectionTitle>Current Emissions Savings</SectionTitle>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <ProgressCircle>
              <svg viewBox="0 0 36 36" width="80" height="80">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeDasharray="80, 100"
                />
              </svg>
              <ProgressText>80%</ProgressText>
            </ProgressCircle>
            <div style={{marginLeft: '16px'}}>
              <p>Today:</p>
              <p>This Week:</p>
              <p>This Month:</p>
            </div>
          </div>
        </EmissionsSavings>
        
        <FriendsActivity>
          <SectionTitle>Friends Activity</SectionTitle>
          <FriendPost>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
              <img src="/placeholder.svg" alt="Kelsey" width={32} height={32} style={{borderRadius: '50%', marginRight: '8px'}} />
              <span>Kelsey</span>
            </div>
            <PostImage>
              <img 
                src="/placeholder.svg" 
                alt="Canada's 2030 Emissions Reduction Plan" 
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
              <PostOverlay>
                <h4 style={{fontSize: '20px', fontWeight: 'bold'}}>CANADA'S</h4>
                <h3 style={{fontSize: '24px', fontWeight: 'bold'}}>2030 EMISSIONS</h3>
                <h3 style={{fontSize: '24px', fontWeight: 'bold'}}>REDUCTION PLAN</h3>
              </PostOverlay>
            </PostImage>
          </FriendPost>
        </FriendsActivity>
      </RightPanel>
    </Container>
  )
}