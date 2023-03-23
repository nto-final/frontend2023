import React from 'react';
import logo from './logo.svg';
import './App.css';
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {MainPage} from './mainPage';
import { TaskPage } from './taskPage';
import { GamePage } from './gamePage';
import { ModelsPage } from './modelPage';
import { TeamPage } from './teamPage';

const { Header, Content, Footer, Sider } = Layout


function App() {
  const handleClickScroll = (str:string) => {
    const element = document.getElementById(str);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  const items1: MenuProps['items'] = [
    {
      key:'/',
      label:'Главная',
      onClick: ()=>handleClickScroll('main')
    },
    {
      key:'#tasks',
      label:'Задания',
      onClick: ()=>handleClickScroll('tasks')
    },
    {
      key:'#games',
      label:'Игры',
      onClick: ()=>handleClickScroll('games')
    },
    {
      key:'#team',
      label:'Команда',
      onClick: ()=>handleClickScroll('team')
    },
    {
      key:'#models',
      label:'Модели',
      onClick: ()=>handleClickScroll('models')
    },

  ]

  return (
    <div className="App">
      <Header className="header" >

        <a href='/'  ><img className="logo" src='images/logo.jpg'/></a>
        <Menu  className='headerMenu' mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
      </Header>

      <MainPage></MainPage>
      <TaskPage></TaskPage>
      <GamePage></GamePage>
      <ModelsPage></ModelsPage>
      <TeamPage></TeamPage>

    </div>
  );
}

export default App;
