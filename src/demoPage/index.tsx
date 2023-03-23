import React from "react";

export const DemoPage:React.FC = (props) =>{
    return <div className="demoPage" id='demoPage'>
            <div className="h1">Демо игры BabrGame</div>
            <iframe className="iframe" width="840" height="473" src="https://www.youtube.com/embed/F6w67stw-Hw" title="Демонстрация Видео" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
}