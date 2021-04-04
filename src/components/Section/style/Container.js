import style from 'styled-components';

const SectionContainer = style.div`
  grid-row:${props => `span ${props.row}`};
  grid-column:${props => `span ${props.column}`};
  padding:15px;
  h2 {
    padding:5px;
    border-bottom:1px solid gray;
  }
`

export default SectionContainer