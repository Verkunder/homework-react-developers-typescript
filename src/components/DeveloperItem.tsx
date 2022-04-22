import React, {FC} from 'react';
import {IDevelopers} from "../types/types";

interface DeveloperItemProps {
    item: IDevelopers
}

const DeveloperItem: FC<DeveloperItemProps> = ({item}) => {

    return (
        <tr>
            <th scope="row"> {item.id} </th>
            <td>{item.name}</td>
            <td>{item.skill}</td>
            <td>{item.department}</td>
            <td><button className="btn btn-danger">Удалить</button></td>
        </tr>
    );
};

export default DeveloperItem;