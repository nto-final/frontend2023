import React from "react";
import { Button, Space } from 'antd';
import './mainPage.css'
import { useNavigate } from "react-router-dom";



export const MainPage: React.FC = () =>{

    const handleClickScroll = (str:string) => {
        const element = document.getElementById(str);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <div className="mainPagePYC" id='main'>
            <div className="images">
                <img className='img' src='images/image.png'></img>
            </div>

            <div className="textContent">
                <div className="h1">Cумма технологий</div>
                <div className="textDescr">Это сайт справочник, где вы найдете множество
                     примеров использования Web AR, а также две 
                     увлекательные игры. <br/><br/>

                     Кубитоклобусы - увлекательная AR - игра про возвращению цифровых объектов
                     в их родной мир. Властвуй над кубитоклобусами, отправляя их домой при помощи 
                     портала<br/><br/>
                     
                     BabrGame - всегда мечтал завести домашнего животного? Тогда это для тебя
                     Твой личный бабр, которого ты можешь гладить, ругать и даже кормить.
                     <div className=""></div>
                </div>
                <div className="mainBtns">
                    <Button type="primary" onClick={()=>handleClickScroll('babr-game')}>BabrGame</Button>
                    <Button onClick={()=>handleClickScroll('cubitoclobus')}>Кубитоклобусы</Button>
                </div>
            </div>
        </div>
    )
}