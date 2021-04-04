import React from 'react';
import SideItem from './SideItem';
import SidebarContainer from './style/Container'

const SideBar = () => {
  return <SidebarContainer>
    <SideItem name="daily"/>
    <SideItem name="weekly"/>
    <SideItem name="monthly"/>
  </SidebarContainer>
}
export default SideBar