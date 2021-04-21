import styled from 'styled-components';
import { device } from './responsives';

export const Wrapper = styled.div`
  -webkit-box-shadow: 0 4px 6px -6px #473d3d;
  -moz-box-shadow: 0 4px 6px -6px #473d3d;
  box-shadow:  0 4px 6px -6px #473d3d
  margin-bottom: 8px;
  position: relative;
  z-index: 2;
  height: 66px;
  width: 100vh; {/* auto */}
  text-align: center;

  @media ${device.minLaptop}{
    /* // grid-column: 1 / span 4; */
    background-color: #ffffff;
    alpha: 0.3;
    /* // padding-left: 120px; */
    margin-bottom: 0px;
  }
  @media ${device.tablet}{
    padding-left: 16px;
    margin: 0px;
    /* // width: auto; */
  }
  @media ${device.mobileL}{
    padding-left: 8px;
    margin-left: 0px;
  }
`

export const ElementsContainer = styled.div`
  width: 1200px;
  display: inline-block;
  background: transparent;
  text-align: left;
  vertical-align: middle;
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
  vertical-align: middle;
  position: relative;

  @media ${device.maxlaptop}{
    // left: 25%
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

export const PubLink = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
  font-size: 14px;
  font-weight: 900;
  position: relative;
  left: 18%;
  color: #333;
  text-decoration: none;
  top: -10%;
  padding-bottom: 6px;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);

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

export const Contact = styled(PubLink)`
  margin-left: 32px;
`
