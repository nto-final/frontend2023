import React from "react";
import { Button, Space } from 'antd';
import { Card } from 'antd';
import './modelPage.css'


const { Meta } = Card;

export const ModelsPage: React.FC = () =>{
    return(
        <div className="taskPage" id="models">
            <div className="h1">3D модели</div>
            <div className="cardWrapper">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/1.png" />}
                >
                    <Meta 
                        title="Круглый кубитоклобус" 
                        description="Скин круглого кубитоклобуса, также есть в зеленом и красном цветах"
     
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/2.png" />}
                >
                    <Meta 
                         title="Квадратный кубитоклобус" 
                         description="Скин квадратного кубитоклобуса, также есть в фиолетовом и красном цветах"
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/3.png" />}
                >
                    <Meta 
                       title="Пирамидальный кубитоклобус" 
                       description="Скин пирамидального кубитоклобуса, также есть в фиолетовом и зеленом цветах"
                  />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/4.png" />}
                >
                    <Meta 
                        title='Бабр скин космос' 
                        description="Скин бабра, в космической стилистике, он весь обернут в звезды" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/5.png" />}
                >
                    <Meta 
                         title='Бабр Тигр' 
                         description="Скин бабра в виде тигра" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/6.png" />}
                >
                    <Meta 
                        title='Бабр домашний' 
                        description="Скин бабра в виде домашнего кота" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/7.png" />}
                >
                    <Meta 
                        title="Цифровой Аватар" 
                        description="Цифровой аватар в виде Михаила Пуртова, стилизован под робота и космический костюм" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/8.png" />}
                >
                    <Meta 
                        title="Цифровой Аватар" 
                        description="Этот аватар сделан на основе Даниила Лунева" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/9.png" />}
                >
                    <Meta 
                        title="Цифровой Аватар" 
                        description="Аватар Ильи Ваисленко" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/10.png" />}
                >
                    <Meta 
                        title="Цифровой Аватар" 
                        description="Цифровой аватар Михеевой Юлии" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/Apple.png" />}
                >
                    <Meta 
                        title="Сочное яблоко" 
                        description="Этим яблоком вы можете порадовать своего Бабра" 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/Cake.png" />}
                >
                    <Meta 
                        title="Тортик" 
                        description="А вы знали что вашему бабру понравится торт? Мы тоже так думаем." 
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/models/Log.png" />}
                >
                    <Meta 
                        title="Бревно" 
                        description="Порадуйте своего бабра бревном, об которое он сможет поточить зубы, как истинный бобер" 
                    />
                </Card>
            
                

            </div>
           
        </div>
    )
}