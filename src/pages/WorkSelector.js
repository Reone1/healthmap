import React from 'react';
import Main from '../components/Main';
import Section from '../components/Section'

const WorkSelector = ({ text }) => {
  console.log(text)
  return <Main>
    <Section title='오늘' style={{row:2,column:2}}>이게 쉽게 안되네요?</Section>
    <Section title="스케줄" style={{row:4,column:2}}>{text}</Section>
    <Section title="부하" style={{row:2,column:2}}></Section>
  </Main>
}

export default WorkSelector