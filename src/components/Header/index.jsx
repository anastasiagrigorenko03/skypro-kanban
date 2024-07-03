import { useState } from "react";
import * as S from "./header.styled.js";
import { Container } from "../../globalStyle.styled.js";

export const Header = ({addCard}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpenUser = () => {
        setIsOpen(!isOpen)
    }
    return (
      <S.Header>
        <Container>
            <S.HeaderBlock>
                <div className="header__logo _show _light">
                    <a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
                </div>
                <div className="header__logo _dark">
                    <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
                </div>
                <nav className="header__nav">
                <S.HeaderBtnNew onClick={addCard}><a>Создать новую задачу</a></S.HeaderBtnNew>
                <S.HeaderUser onClick= {toggleOpenUser}>Ivan Ivanov</S.HeaderUser>
                    {isOpen && 
                        <div className="header__pop-user-set pop-user-set" id="user-set-target">
                        {/* <a href="">x</a> */}
                        <p className="pop-user-set__name">Ivan Ivanov</p>
                        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                        <div className="pop-user-set__theme">
                            <p>Темная тема</p>
                            <input type="checkbox" className="checkbox" name="checkbox"/>
                        </div>
                        <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                    </div>
                    }
                </nav>					
            </S.HeaderBlock>
        </Container>			
    </S.Header>
    )
}