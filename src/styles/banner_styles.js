import styled from 'styled-components';
import { device } from './responsives';

export const Wrapper = styled.div`
  width: 100vw;
  height: 65px;
  text-align: center;
  /* border-bottom: 0.5px solid #DDDDDD; */
  -webkit-box-shadow: 0 3px 8px -3px #DDDDDD;

  /* @media ${device.minLaptop}{
    // grid-column: 1 / span 4;
    background-color: #ffffff;
    alpha: 0.3;
    // padding-left: 120px;
    margin-bottom: 0px;
  } */
  @media ${device.tablet}{
    padding-left: 16px;
    margin: 0px;
    // width: auto;
  }
  @media ${device.mobileL}{
    padding-left: 8px;
    margin-left: 0px;
  }
`

export const ElementsContainer = styled.div`
  width: 100vw;
  height: 75px;
  display: inline-block;
  background: transparent;
  text-align: left;
  position: relative;
  top: 15%;

  @media ${device.ipadPro}{
    width: auto;
    position: relative;
    top: 25%;
    left: -5%;
  }

  @media ${device.tablet}{
    width: auto;
    position: relative;
    top: 25%;
    left: -5%;
  }
`

export const MegagonLogo = styled.img`
  height: 45px;
  width: auto;
  display: inline-block;
  background: #FFFFFF;
  position: relative;
  left: 120px;

  @media ${device.maxlaptop}{
     /* left: 25% */
  }
  @media ${device.ipadPro}{
    left: 2%;
  }
  @media ${device.tablet}{
    height: auto;
    width: 380px;
    margin-left: 12px;
  }
  @media ${device.mobileL}{
    height: auto;
    width: 280px;
  }
`

export const Title = styled.div`
  displays: inline-block;
  font-family: Poppins;
  font-size: 60px;
  color: #000000;
  letter-spacing: 1px;
  /* position: relative;
  left: 70% */
  /* align: center; */
  font-weight: bold;
  background: gray;
`

export const LinkContainer = styled.div`
  display: inline-block;
  position: relative;
  float: right;
  padding-top: 10px;
  right: 18%;
  text-transform: uppercase;
`


export const Image = styled.img`
  height: 15px;
  margin-left: 4px;
  position: absolute;
  bottom: 4px;
`

export const PubLink = styled.a`
  font-family: Poppins;
  font-size: 15px;
  padding: 0 20px;
  color: #000;
  text-decoration: none;

  @media ${device.minlaptop}{
    // left: 40%;
  }

  @media ${device.maxlaptop}{
    // left: 3%
  }

  @media ${device.ipadPro}{
    left: 8%;
    top: -10%;
  }

  @media ${device.tablet}{
    left: 8%;
    top: 10%;
    padding-bottom: 0px;
  }
`
