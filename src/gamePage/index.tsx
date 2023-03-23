import React from "react";
import { Button, Space } from 'antd';
import { Card } from 'antd';
import './gamePage.css'
import { useNavigation } from "react-router-dom";


const { Meta } = Card;


export const GamePage:React.FC = () =>{




    return (
        <div className="taskPage" id='games'>
            <div className="h1"  id = 'babr-game'>Игры</div>
            <div className="gameWrapper">
                <Card
                   
                    hoverable
                    style={{ width: '90%', fontSize:'16px'}}
                    cover={<img alt="example" src="images/game.png" />}
                >
                    <Meta 
                        title="BabrGame" 
                        description="Играй со своим личным Бабром. Можешь его кормить, гладить и ругать. Он выдает базированные цитаты. С ним точно не соскучишься." 
                    />
                        <div className="BtnGameWrapper">
                            <a href=''><Button className='gameBtn' type="primary">Играть</Button></a>
                            <a href=''><Button className='gameBtn'>Код</Button></a>
                        </div>                
                    </Card>



                <Card
                    id = 'cubitoclobus'
                    hoverable
                    style={{ width: '90%', fontSize:'16px'}}
                    cover={<img alt="example" src="images/game1.png" />}
                >
                    <Meta 
                        title="Кубитоклобусы" 
                        description="Спаси мир от кубитоуклобусов и отправь их домой к себе через портал." 
                    />
                    <div className="BtnGameWrapper">
                        <a href='https://tough-competition.surge.sh/game.html'><Button className='gameBtn' type="primary">Играть</Button></a>
                        <a href='https://github.com/nto-final/first-day-3-7-9-11-12-13-tasks/blob/main/game.html '><Button className='gameBtn'>Код</Button></a>

                    </div>

                </Card>
            </div>
        </div>
    )
}   
