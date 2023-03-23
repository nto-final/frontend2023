import React from "react";
import { Button, Space } from 'antd';
import { Card } from 'antd';


const { Meta } = Card;

export const TeamPage: React.FC = () =>{
    return(
        <div className="taskPage" id='team'>
            <div className="h1">Наша команда</div>
            <div className="cardWrapper">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/7.png" />}
                >
                    <Meta 
                        title="Михаил Пуртов" 
                        description="AR разработчик" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/8.png" />}
                >
                    <Meta 
                        title="Даниил Лунев" 
                        description="3D дизайнер" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/9.png" />}
                >
                    <Meta 
                        title="Илья Василенко" 
                        description="AR разработчик" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/10.png" />}
                >
                    <Meta 
                        title="Михеева Юля" 
                        description="3D дизайнер" 
                    />
                </Card>                     
           </div>
           
        </div>
    )
}