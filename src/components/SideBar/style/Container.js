import style from 'styled-components'

const SidebarContainer = style.div`
  grid-area: sidebar;
  border-right:1px solid gray;
  box-shadow:0 0 10px 0px rgba(0,0,0,0.2);
`
export const SideItemContainer = style.a`
  padding:15px 5px;
  display:block;
  text-decoration:none;
  transition: padding 1s, background 2s;
  cursor:pointer;
  &:hover {
    padding:15px;
    border-right: 3px solid gray;
    background-color: rgba(0,77,32,.2);
  }
  &:visited{
    color:black
  }
`


export default SidebarContainer