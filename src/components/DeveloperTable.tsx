import React, {FC, useState} from 'react';
import {IDevelopers} from "../types/types";
import DeveloperItem from "./DeveloperItem";
import AddDevelopers from "./AddDevelopers";

interface DeveloperTableProps {
    developers: IDevelopers[]
}

const DeveloperTable: FC<DeveloperTableProps> = ({developers}) => {
    const [newDevelopers, setDevelopers] = useState<IDevelopers[]>([])

    const addDevelopers = (name: string, skill: string, department: string) => {
        const newDevelopers = developers.push({name: name, skill: skill, department: department})
        setDevelopers(developers)
    }
    const deliteItem = (id: number) => {
        const newDevelopers = developers.splice(id, 1)
        setDevelopers(newDevelopers)
    }

    const tableViev = () => {
        if (!developers.length) {
            return (
                <div className="row justify-content-md-center mb-5">
                    <div className="col-md-auto">
                        <h1>Тут ничего нет</h1>
                    </div>
                </div>
            )
        } else {
            return (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ФИО</th>
                        <th scope="col">Уровень навыков</th>
                        <th scope="col">Направление</th>
                        <th scope="col"> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {developers.map((item, id) =>
                        <DeveloperItem key={id} item={item} deliteItem={deliteItem} id={id} />
                    )}
                    </tbody>
                </table>
            )
        }
    }

    return (
        <div className="align-items-center mt-5">
            <AddDevelopers developers={developers} addDevelopers={addDevelopers} />
            {tableViev()}
        </div>
    );
};

export default DeveloperTable;