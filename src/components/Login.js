import React from 'react'
import styled from 'styled-components'
import loginBg from '../assets/images/login-background.jpg'
import { CTALogo1 } from './AllSvgs'
import CTALogo2 from '../assets/images/cta-logo-two.png'

function Login(props) {
  return (
    <Container>
        <Content>
            <CTA>
              <CTALogoOne/>

              <SignUp>Get All There!</SignUp>

              <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee
                with a Disney+ subscription. As of 03/26/21, the price of Disney+
                and The Disney Bundle will increase by $1.
              </Description>

              <CTALogoTwo src={CTALogo2} alt='cta-logo-2'/>
            </CTA>
        </Content>
    </Container>
  )
}


const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    width: 100vw;
    background: url(${loginBg});
    background-size: cover;
    background-position: top;
`

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto 2vw auto;
  max-width: 650px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const CTALogoOne = styled(CTALogo1)`
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 12px;
  width: 100%;
  display: block;
`

const SignUp = styled.a`
  margin-bottom: 12px;
  font-weight: bold;
  color: #f9f9f9;
  background: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background .4s ease-in;
  cursor: pointer;

  &:hover {
    background: #0483ee;
  }
`

const Description = styled.p`
  color: #f3f3f3;
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  margin: 0 0 24px;
`

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
`

export default Login