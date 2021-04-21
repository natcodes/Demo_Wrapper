import React, {Component} from 'react';
import { Wrapper, MegagonLogo, Title, LinkContainer, PubLink, Image, ElementsContainer} from '../styles/banner_styles';
import Logo from '../images/color_logo_transparent.svg';
import {MainWrapper} from '../styles/main_styles';
import {FootWrapper, FooterInner, SiteText, FooterItems, SocialIconContainer, SocialIcon, SocialLink, NavItems, Items, Alink } from '../styles/footer_styles';

import fbIcon from "../images/fbIcon.png";
import twitterIcon from "../images/twitterIcon.png";
import linkedIcon from "../images/linkedinIcon.png";
import arrow from "../images/right-arrow.png";

const demo_title = "Ditto"
const name = demo_title ? demo_title : "Default";

class Main extends Component {

render(){
  return(
      <MainWrapper>
        <Nav />
        <Footer />
      </MainWrapper>
  )
}

}

export default Main;


const Nav = ({demo_name, publication_link, _blog_link}) => {

  const onBannerClick = () => {
      console.log("banner clicked")
      window.open("https://www.megagon.ai/", "_blank")
  };
    return(
      <Wrapper>
        <ElementsContainer>
          <MegagonLogo src={Logo} onClick={()=>onBannerClick()}/>
          <LinkContainer>
              <PubLink href="https://megagon.ai/publications/" target="_blank"> BLOG
              </PubLink>
              <PubLink href="https://megagon.ai/publications/#SnippextPaper" target="_blank"> PAPER
                <Image src={arrow} alt="go" />
              </PubLink>
          </LinkContainer>
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
