import React, {FC, useState} from 'react';
import {IDevelopers} from "../types/types";
import DeveloperItem from "./DeveloperItem";
import AddDevelopers, {TDeveloper} from "./AddDevelopers";

interface DeveloperTableProps {
    developers: IDevelopers[]
}

const DeveloperTable: FC<DeveloperTableProps> = ({developers}) => {
    const [newDevelopers, setDevelopers] = useState<IDevelopers[]>(developers)
    const [active, setActive] = useState<boolean>(false)
    const [remove, setRemove] = useState<boolean>(false)

    const addDevelopers = (obj: TDeveloper) => {
        const idx = newDevelopers.length + 1
        const result = [...newDevelopers, {...obj, id: idx}]
        setDevelopers(result)
    }
    const deliteItem = (id: number) => {
        const filtered = newDevelopers.filter(({id: idx}) => id !== idx)
        setDevelopers(filtered)
    }
    const removeButtonAction = () => {
        const remove = newDevelopers.sort((a, b) => {
            if (a.id > b.id) {
                return 1
            }
            if (a.id < b.id) {
                return -1
            }
            return 0
        })
        setDevelopers(remove)
        setRemove(false)
    }

    const filterTable = (key: keyof IDevelopers) => {
        console.log(key)
        const otfiltered = newDevelopers.sort((a, b) => {
            if (active) {
            if (a[key] > b[key]) {
                return 1
            }
            if (b[key] > a[key]) {
                return -1
            }
            } else {
                if (a[key] > b[key]) {
                    return -1
                }
                if (b[key] > a[key]) {
                    return 1
                }
            }
            return 0
        })
        const newFiltered = [...otfiltered]
        setActive(!active)
        setDevelopers(newFiltered)

        if (otfiltered.length !== 0) {
            setRemove(true)
        }

    }

    const removeButton = () => {
        if (remove) {
            return <button className="btn-sm btn-danger" onClick={removeButtonAction}>Сбросить</button>
        }
        return false
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
            setRemove(false)
        }
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" onClick={() => filterTable('name')}>ФИО</th>
                    <th scope="col" onClick={() => filterTable('skill')}>Уровень навыков</th>
                    <th scope="col" onClick={() => filterTable('department')}>Направление</th>
                    <th scope="col">{removeButton()}</th>
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