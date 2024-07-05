import styled from "styled-components";
import { Hover01, Hover02, Hover03 } from "../../globalStyle.styled.js";

export const Header = styled.header`
 width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.headerBg};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderBtnNew = styled.button`
 width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  a {
  color: #FFFFFF;
  text-decoration: none;
}

${Hover01}
`;

export const HeaderUser = styled.a`
 height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid ${({ theme }) => theme.text};
  border-bottom: 1.9px solid ${({ theme }) => theme.text};
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
}

${Hover02}
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
`;

export const HeaderLogo = styled.div`
 &._light {
    display: ${({ theme }) => (theme.logo === "images/logo.png" ? "block" : "none")};
  }

  &._dark {
    display: ${({ theme }) => (theme.logo === "images/logo_dark.png" ? "block" : "none")};
  }
img {
  width: 85px;
  src: ${({ theme }) => theme.logo};
}

@media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const HeaderBtnExit = styled.button`
${Hover03}
`;

export const HeaderUserSet = styled.div`
display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ theme }) => theme.popupBg};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserSetName = styled.p`
 color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
}

input[type=checkbox] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  appearance: none;
  cursor: pointer;
}

input[type=checkbox]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
}

input:checked[type=checkbox]::before {
  left: 12px;
}
`;