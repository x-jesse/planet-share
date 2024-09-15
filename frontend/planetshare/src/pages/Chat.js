import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Search, Settings, User, MessageSquare, Users, Plus, ChevronDown, Paperclip, Smile, Send } from 'lucide-react'

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
  font-family: Arial, sans-serif;
`

const Sidebar = styled.div`
  width: 260px;
  background-color: #047857;
  color: white;
  padding: 24px;
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

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #065f46;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 24px;

  input {
    background: transparent;
    border: none;
    color: white;
    width: 100%;
    margin-left: 8px;

    &::placeholder {
      color: #34d399;
    }
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

const MainContent = styled.div`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
`

const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
`

const PageSubtitle = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
`

const NewQuestionButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #d1fae5;
  color: #047857;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  margin-bottom: 16px;

  svg {
    margin-left: 8px;
  }
`

const ChatHistoryDropdown = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  align-self: flex-start;
  margin-bottom: 24px;

  svg {
    margin-left: 8px;
  }
`

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`

const ChatBubble = styled.div`
  max-width: 70%;
  padding: 12px;
  border-radius: 12px;
  background-color: ${props => props.isUser ? '#d1fae5' : '#e5e7eb'};
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  display: flex;
  align-items: flex-end;
  gap: 8px;
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const MessageInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #d1fae5;
  border-radius: 24px;
  padding: 12px 16px;
  margin-top: 24px;

  input {
    flex: 1;
    border: none;
    background: transparent;
    margin: 0 12px;
    font-size: 16px;

    &::placeholder {
      color: #047857;
    }
  }

  svg {
    color: #047857;
    cursor: pointer;
  }
`


export default function DirectMessage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! I'm looking to cut down on my carbon emissions on our next trip.", isUser: true },
    { id: 2, text: "Great! We can all take turns driving and combine trips when possible. I can help you set up a shared calendar and track your carpool mileage. Does that sound good?", isUser: false },
    { id: 3, text: "Yes, that sounds perfect! Let's set up the calendar and get started.", isUser: true },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Simulate a response after a short delay
      setTimeout(() => {
        const responseMessage = {
          id: messages.length + 2,
          text: "Thanks for your message! I'll get back to you soon about our eco-friendly trip plans.",
          isUser: false,
        };
        setMessages(prevMessages => [...prevMessages, responseMessage]);
      }, 1000);
    }
  };

  return (
    <Container>
      <Sidebar>
        <Title>PlanetShare</Title>
        <Subtitle>A carbon footprint networking platform</Subtitle>
        
        <SearchInput>
          <Search size={18} color="#34d399" />
          <input type="text" placeholder="Search" />
        </SearchInput>
        
        <Section>
          <SectionTitle>I want...</SectionTitle>
          <RadioGroup>
            <input type="radio" id="pickup" name="want" />
            <label htmlFor="pickup">Pickup within</label>
            <input type="number" style={{width: '48px', marginLeft: '8px', backgroundColor: '#065f46', borderRadius: '4px', padding: '4px'}} /> km
          </RadioGroup>
          <RadioGroup>
            <input type="radio" id="dropoff" name="want" />
            <label htmlFor="dropoff">Drop-off within</label>
            <input type="number" style={{width: '48px', marginLeft: '8px', backgroundColor: '#065f46', borderRadius: '4px', padding: '4px'}} /> km
          </RadioGroup>
          <RadioGroup>
            <input type="radio" id="departure" name="want" />
            <label htmlFor="departure">Departure time within</label>
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
        <PageTitle>Direct Message</PageTitle>
        <PageSubtitle>Ask your friends a question!</PageSubtitle>
        
        <NewQuestionButton>
          New Question
          <Plus size={18} />
        </NewQuestionButton>
        
        <ChatHistoryDropdown>
          Chat History
          <ChevronDown size={18} />
        </ChatHistoryDropdown>
        
        <ChatContainer ref={chatContainerRef}>
          {messages.map((message) => (
            <ChatBubble key={message.id} isUser={message.isUser}>
              <div>{message.text}</div>
              <Avatar 
                src={message.isUser ? "https://via.placeholder.com/32" : "https://via.placeholder.com/32?text=F"} 
                alt={message.isUser ? "User" : "Friend"} 
              />
            </ChatBubble>
          ))}
        </ChatContainer>
        
        <MessageInput>
          <Paperclip size={20} />
          <input 
            type="text" 
            placeholder="Type a new message here" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <Smile size={20} />
          <Send size={20} onClick={handleSendMessage} />
        </MessageInput>
      </MainContent>
    </Container>
  )
}