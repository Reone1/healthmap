import React from 'react'
import GlobalStyle from '../style/globalStyle'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import Main from '../components/Main'

function App() {
  return (
    <>
      <Nav/>
      <SideBar/>
      <Main>
      </Main>
      <GlobalStyle/>
    </>
  );
}

export default App;
