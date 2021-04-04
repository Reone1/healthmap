import React from 'react'
import GlobalStyle from '../style/globalStyle'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import Main from '../components/Main'
import Section from './Section'

function App() {
  return (
    <>
      <Nav/>
      <SideBar/>
      <Main>
        <Section title='오늘' style={{row:2,column:2}}></Section>
        <Section title="스케줄" style={{row:4,column:2}}></Section>
        <Section title="부하" style={{row:2,column:2}}></Section>
      </Main>
      <GlobalStyle/>
    </>
  );
}

export default App;
