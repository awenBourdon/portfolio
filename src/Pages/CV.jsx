import React from 'react'
import cv from '../Components/assets/cv_awen_bourdon.pdf'
import styled from 'styled-components'

export const Container = styled.div`
  iframe {
    width: 100%;
    height: 800px;
    border: none;
    margin-bottom: 20px;
  }
`;

const CV = () => {
  return (
    <Container>
         <iframe src={cv} title="CV" width="100%" height="600px" />
    </Container>
  )
}

export default CV