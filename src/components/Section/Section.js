import React from 'react';
import SectionContainer from './style/Container';

const Section = ({title, style, children}) => {
  return <SectionContainer {...style}>
    <h2>{title}</h2>
    <div>
      {children}
    </div>
    </SectionContainer>
}
export default Section