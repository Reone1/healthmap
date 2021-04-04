import style from 'styled-components';

const NavContainer = style.div`
  width:100%;
  box-shadow:0 7px 7px 0 rgba(0,0,0,.3);
  padding:15px 10px;
  grid-area:nav;
  vertical-align:middle;

  .logo {
    margin-right:10px;
  }

  .title{
    color:red;
  }
`
export default NavContainer