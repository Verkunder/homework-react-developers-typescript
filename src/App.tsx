import React from 'react';
import DeveloperTable from "./components/DeveloperTable";
import {IDevelopers} from "./types/types";

const App = () => {
    const developers: IDevelopers[] = [
        {id: 1, name: "Капустин Степан", skill: 'Junior', department: 'Frontend'},
        {id: 2, name: "Роман Возный", skill: 'Middle', department: 'Backend'},
        {id: 3, name: "Александр Лапиев", skill: 'Junior', department: 'Frontend'},
        {id: 4, name: "Мария Лапиева", skill: 'Middle', department: 'Frontend'},
        {id: 5, name: "Павел Воробьев", skill: 'Senior', department: 'Frontend'},
        {id: 6, name: "Александр Забанов", skill: 'Senior', department: 'Backend'}]
    return (
        <div className="container">
            <DeveloperTable developers={developers}/>
        </div>
    );
};

export default App;