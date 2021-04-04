import style from 'styled-components';

const MainContainer = style.div`
  overflow:hidden;
  grid-area:main;
  display:grid;
  grid-template-rows:repeat(4,1fr);
  grid-template-columns:repeat(4,1fr);
`

  /*${props => props.sideBar}*/
  /*${props => props.nav}*/

export default MainContainer
