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
                    <Button className='gameBtn' type="primary">Играть</Button>
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
                    <Button className='gameBtn' type="primary">Играть</Button>
                </Card>
            </div>
        </div>
    )
}   
