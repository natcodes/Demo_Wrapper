import React from 'react';
import { Wrapper, MegagonLogo, Title, LinkContainer, PubLink, Image, ElementsContainer} from '../styles/nav_styles';
import Logo from '../images/color_logo_transparent.svg';
import {MainWrapper} from '../styles/main_styles';
import {FootWrapper, FooterInner, SiteText, FooterItems, SocialIconContainer, SocialIcon, SocialLink, NavItems, Items, Alink } from '../styles/footer_styles';
import MobileMenu from "./menu";
import fbIcon from "../images/fbIcon.png";
import twitterIcon from "../images/twitterIcon.png";
import linkedIcon from "../images/linkedinIcon.png";
import arrow from "../images/right-arrow.png";

// const demo_title = "Ditto"
// const name = demo_title ? demo_title : "Default";
 // let props = {name: "hello", pub_ancor: "https://www.megagon.ai/", blog_link: "https://www.megagon.ai/"}

function Main({ children, ...props}){

  return(
      <MainWrapper >
        <Nav {...props}/>
          {children}
        <Footer />
      </MainWrapper>
    )
}

export default Main;


const Nav = ({...props}) => {


  let isBLinkShown = props.blog_link ? true : false;
  console.log("blink", isBLinkShown)
  let isPLinkShown = props.pub_ancor ? true : false;
  console.log("P", isPLinkShown)

  const onBannerClick = () => {
      window.open("https://www.megagon.ai/", "_blank")
  };

    return(
      <Wrapper>
        <ElementsContainer>
          <MegagonLogo src={Logo} onClick={()=>onBannerClick()}/>
          <LinkContainer>
              {
                isBLinkShown &&
                <PubLink href={props.blog_link} target="_blank"> BLOG
                </PubLink>
              }
              {
                isPLinkShown &&
                <PubLink href={"https://megagon.ai/our-publications/"+ props.pub_ancor} target="_blank"> PAPER
                  <Image src={arrow} alt="go" />
                </PubLink>
              }
          </LinkContainer>
          <MobileMenu {...props}/>
        </ElementsContainer>
      </Wrapper>
    )
};



//no props needed
const Footer =()=>{

  return(
    <FootWrapper>
      <FooterInner>
        <FooterItems>
          <SiteText> Megagon Labs @ 2021 </SiteText>
          <NavItems>
            <Items><Alink href="https://megagon.ai/contact/"> Contact </Alink></Items>
            <Items><Alink href="https://megagon.ai/privacy-policy/"> Privacy Policy </Alink></Items>
            <Items><Alink href="https://megagon.ai/terms/"> Terms </Alink></Items>
          </NavItems>
          <SocialIconContainer>
            <SocialLink href="https://www.facebook.com/megagonlabs/" target="_blank">
              <SocialIcon src={fbIcon} alt="Facebook" />
            </SocialLink>
            <SocialLink href="https://twitter.com/megagonlabs/" target="_blank">
              <SocialIcon src={twitterIcon} alt="Twitter"/>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/megagon-labs/about/" target="_blank">
              <SocialIcon src={linkedIcon} alt="LinkedIn"/>
            </SocialLink>
          </SocialIconContainer>
        </FooterItems>
      </FooterInner>
    </FootWrapper>
  )
}
