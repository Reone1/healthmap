import React from 'react';
import SideItem from './SideItem';
import SidebarContainer from './style/Container'

const SideBar = () => {
  return <SidebarContainer>
    <SideItem path="/" name="daily"/>
    <SideItem path="/monthly" name="weekly"/>
    <SideItem path="/daily" name="monthly"/>
  </SidebarContainer>
}
export default SideBar