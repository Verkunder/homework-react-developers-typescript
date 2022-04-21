import React, {FC} from 'react';
import {IDevelopers} from "../types/types";
import DeveloperItem from "./DeveloperItem";

interface DeveloperTableProps {
    developers: IDevelopers[]
}

const DeveloperTable: FC<DeveloperTableProps> = ({developers}) => {

    return (
        <div className="align-items-center">
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
            {developers.map((item) =>
                <DeveloperItem key={item.id} item={item} />
            )}
            </tbody>
            </table>
        </div>
    );
};

export default DeveloperTable;