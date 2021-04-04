import style from 'styled-components'


const SidebarContainer = style.div`
  grid-area: sidebar;
`
export const SideItemContainer = style.div`
  padding:15px 5px;
  transition: padding 1s, background 2s;
  cursor:pointer;

  &:hover {
    padding:15px;
    background-color: rgba(0,77,32,.2);
  }
`


export default SidebarContainer