import React, {FC, useState} from 'react';
import {IDevelopers} from "../types/types";
import DeveloperItem from "./DeveloperItem";
import AddDevelopers, {TDeveloper} from "./AddDevelopers";

interface DeveloperTableProps {
    developers: IDevelopers[]
}

const DeveloperTable: FC<DeveloperTableProps> = ({developers}) => {
    const [newDevelopers, setDevelopers] = useState<IDevelopers[]>(developers)

    const addDevelopers = (obj: TDeveloper) => {
        const idx = newDevelopers.length + 1
        const result = [...newDevelopers, {...obj, id: idx}]
        setDevelopers(result)
    }
    const deliteItem = (id: number) => {
        const filtered = newDevelopers.filter(({id: idx}) => id !== idx)
        setDevelopers(filtered)
    }

    const filterDevelopers = () => {
        const otfiltered = newDevelopers.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            if (b.name > a.name) {
                return -1
            }
            return 0
        })
        const newFiltered = [...otfiltered]
        setDevelopers(newFiltered)
    }

    const tableViev = () => {
        if (!newDevelopers.length) {
            return (
                <div className="row justify-content-md-center mb-5">
                    <div className="col-md-auto">
                        <h1>Тут ничего нет</h1>
                    </div>
                </div>
            )
        }
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" onClick={filterDevelopers}>ФИО</th>
                    <th scope="col">Уровень навыков</th>
                    <th scope="col">Направление</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {newDevelopers.map((item) =>
                    <DeveloperItem key={item.id} item={item} deliteItem={deliteItem} id={item.id}/>
                )}
                </tbody>
            </table>
        )
    }


    return (
        <div className="align-items-center mt-5">
            <AddDevelopers addDevelopers={addDevelopers}/>
            {tableViev()}
        </div>
    );
};

export default DeveloperTable;