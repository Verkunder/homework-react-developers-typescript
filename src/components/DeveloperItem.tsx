import React, {FC} from 'react';
import {IDevelopers} from "../types/types";

interface DeveloperItemProps {
    item: IDevelopers
}

const DeveloperItem: FC<DeveloperItemProps> = ({item}) => {
    const deliteItem = () => {
        console.log(item)
    }
    return (
        <tr>
            <th scope="row"> {item.id} </th>
            <td>{item.name}</td>
            <td>{item.skill}</td>
            <td>{item.department}</td>
            <td><button className="btn btn-danger" onClick={deliteItem}>Удалить</button></td>
        </tr>
    );
};

export default DeveloperItem;