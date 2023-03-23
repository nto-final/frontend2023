import React from "react";
import { Button, Space } from 'antd';
import { Card } from 'antd';
import './taskPage.css'
import { useNavigate, redirect } from "react-router-dom";


const { Meta } = Card;

export const TaskPage: React.FC = () =>{

    return(
        <div className="taskPage" id='tasks'>
            <div className="h1">Задания</div>
            <div className="cardWrapper">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task1.jpg" />}
                >
                    <Meta 
                        title="Трехмерные фигуры на гранях куба" 
                        description="На каждой гране куба отображается сама моделька" 
                    />
                    <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://nto-final.github.io/task1/"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/task1"><Button>Код</Button></a>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task2.jpg" />}
                >
                    <Meta 
                        title="Задание 2. Объекты внутри куба" 
                        description="Интересный эффект + внутри куба логотип НТО. Маркер kanji" 
                    />
                     <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://ar-final-task2-pyc.surge.sh/"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/task2-2023"><Button>Код</Button></a>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task3.jpg" />}
                >
                    <Meta 
                        title="Задача 3. Множество динамических объектов на одном маркере" 
                        description="Проекция 3д моделей на маркер. Маркер kanji"

                    />
                      <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://nto-final.github.io/first-day-3-7-9-11-12-13-tasks/index3"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/first-day-3-7-9-11-12-13-tasks/blob/main/index3.html"><Button>Код</Button></a>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task4.jpg" />}
                >
                    <Meta 
                        title="Задача 4. Прыгающий мяч (анимация)"
                        description="Мяч прыгает на маркере. Маркер kanji"
                    />
                      <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://nto-final.github.io/first-day-3-7-9-11-12-13-tasks/task4/"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/first-day-3-7-9-11-12-13-tasks/blob/main/task4/index.html"><Button>Код</Button></a>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task4.jpg" />}
                >
                    <Meta 
                        title="Задача 5. Мяч прыгающий (компонент)"
                        description="Задача нужно было собрать из болоков кода работающий код"
                    />
                      <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://nto-final.github.io/first-day-3-7-9-11-12-13-tasks/index5"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/first-day-3-7-9-11-12-13-tasks/blob/main/index5.html"><Button>Код</Button></a>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task6.jpg" />}
                >
                    <Meta 
                        title="Задача 6. Пин-понг"
                        description="Мяч прыгает c маркера на маркер. Маркеры letterA, LetterB"
                    />
                    <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://hollow-discovery.surge.sh/parabolic-path.html"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/first-day-9-6-7/blob/main/parabolic-path.html"><Button>Код</Button></a>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task7.jpg" />}
                >
                    <Meta 
                        title="Задача 7. Цилиндрическая дырка в полу"
                        description="Дырка в полу. Маркер kanji."
                    />
                     <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://nto-final.github.io/ringHole-task7/"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/ringHole-task7"><Button>Код</Button></a>
                    </div>
                </Card>

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task8.jpg" />}
                >
                    <Meta 
                        title="Задача 8. Портал в виртуальный мир"
                        description="Портал в другой мир, при нажатии на него, вас телепортирует в другую комнату где можете прсомотреть 360 картинку. Маркер kanji."
                    />
                        <div className="mainBtns" style={{justifyContent:'center'}}>
                            <a href="https://nto-final.github.io/task8/ "><Button type='primary'>Демо</Button></a>
                            <a href="https://github.com/nto-final/task8 "><Button>Код</Button></a>
                        </div>
                    
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task9.jpg" />}
                >
                    <Meta 
                        title=" Задача 9. Управление виртуальным объектом при помощи клавиатуры"
                        description="Возникает объект, можно управавлять его передвижением и он отбрасывает тень.Маркер kanji."
                    />
                     <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://nto-final.github.io/first-day-3-7-9-11-12-13-tasks/index9"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/first-day-3-7-9-11-12-13-tasks/blob/main/index9.html"><Button>Код</Button></a>
                    </div>
                </Card>


                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task11.jpg" />}
                >
                    <Meta 
                        title="Задача 11. 3D фигура отдельными точками"
                        description="Из массива данных json создается 3д модель. Маркер kanji."
                    />
                     <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://nto-final.github.io/first-day-3-7-9-11-12-13-tasks/index11"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/first-day-3-7-9-11-12-13-tasks/blob/main/index11.html"><Button>Код</Button></a>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task12.jpg" />}
                >
                    <Meta 
                        title="Задание 12. Управление виртуальной камерой при помощи клавиатуры"
                        description="Можно управлять поворотм куба при помощи клавиатуры. Маркер kanji."
                    />
                    
                    <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://inconclusive-low.surge.sh/index12.html"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/first-day-3-7-9-11-12-13-tasks/blob/main/index12.html"><Button>Код</Button></a>
                    </div>
                </Card>

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="images/task13.jpg" />}
                >
                    <Meta 
                        title="Задача 13. Мультимаркер и его взаимодействие"
                        description="AR cценарий с мультимаркером. Маркер kanji."
                    />
                    <div className="mainBtns" style={{marginTop:'70%', justifyContent:'center'}}>
                        <a href="https://nto-final.github.io/first-day-3-7-9-11-12-13-tasks/index13"><Button type='primary'>Демо</Button></a>
                        <a href="https://github.com/nto-final/first-day-3-7-9-11-12-13-tasks/blob/main/index13.html"><Button>Код</Button></a>

                    </div>
                </Card>
                

            </div>
           
        </div>
    )
}