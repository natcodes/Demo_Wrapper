import styled from 'styled-components';

export const FootWrapper = styled.div`
  width: 100vw;
  height: 75px;
  background: #1a1d1a;
  padding: 20px 0;
  align-self: flex-end;
  position: fixed;
  bottom: 0;
`

export const FooterInner = styled.div`
  /* position: relative; */
  width: 100vw;
  font-family: Poppins-Medium;
  /* background-color: transparent; */
  height: 75px;
  margin: 0 150px;
  /* text-align: left; */
  vertical-align: middle;
  position: relative;
  top: -25%;
  /* margin-top:90px; */
  /* margin-left: auto;
   margin-right: auto; */

    /* text-align: justify;
   -ms-text-justify: distribute-all-lines;
   text-justify: distribute-all-lines; */
`

export const FooterItems = styled.div`
  height: 28px;
  position: absolute;
  top: 50%;
  width: 100%;
  /* background: pink; */

  text-align: justify;
   -ms-text-justify: distribute-all-lines;
   text-justify: distribute-all-lines;

`

export const NavItems = styled.div`
  min-width: 450px;
  display: table-cell;
  text-decoration: none;
  padding-left: 160px;
  /* background-color: white; */
`

export const SiteText = styled.div`
  display: table-cell;
  font-family: 'Rubik', sans-serif;
  font-size: 18px !important;
  color: #FFFFFF;
  font-weight: light;
  min-width: 235px;
`

export const Items = styled.p`
  text-align:center;
  vertical-align: middle;
  display:table-cell;
  padding: 0 20px;
  font-size: 16px;
  color: #FFFFFF;
  font-family: Poppins;
  text-decoration: none !important;
`

export const Alink = styled.a`
  color: #FFFFFF;
  font-family: Poppins;
  text-decoration: none !important;
`

export const SocialIconContainer = styled.div`
  height: 20px;
  color: #FFFFFF;
  padding-left: 160px;
  display:table-cell;

`

export const SocialLink= styled.a`
  text-decoration: none !important;
  padding: 0 10px;
  color: #ff0000;
  height: 20px;
`

export const SocialIcon= styled.img`
  height: 20px;
`
