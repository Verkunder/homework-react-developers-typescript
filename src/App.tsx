import React from 'react';
import DeveloperTable from "./components/DeveloperTable";
import {IDevelopers} from "./types/types";

const App = () => {
    const developers: IDevelopers[] = [
        {name: "Капустин Степан", skill: 'Junior', department: 'Frontend'},
        {name: "Роман Возный", skill: 'Middle', department: 'Backend'},
        {name: "Александр Лапиев", skill: 'Junior', department: 'Frontend'},
        {name: "Мария Лапиева", skill: 'Middle', department: 'Frontend'},
        {name: "Павел Воробьев", skill: 'Senior', department: 'Frontend'},
        {name: "Александр Забанов", skill: 'Senior', department: 'Backend'}]

    return (
        <div className="container">
            <div className="row justify-content-md-center mb-5">
                <div className="col-md-auto mt-4">
                    <h1>Таблица разработчиков</h1>
                </div>
            </div>
            <DeveloperTable developers={developers}/>
        </div>
    );
};

export default App;