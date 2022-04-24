import React, {FC} from 'react';
import {IDevelopers} from "../types/types";

interface DeveloperItemProps {
    item: IDevelopers
    deliteItem: (id: number) => void
    id: number
}

const DeveloperItem: FC<DeveloperItemProps> = ({item, deliteItem, id}) => {

    return (
        <tr>
            <th scope="row"> {id + 1} </th>
            <td>{item.name}</td>
            <td>{item.skill}</td>
            <td>{item.department}</td>
            <td>
                <button className="btn btn-danger" onClick={() => deliteItem(id)}>Удалить</button>
            </td>
        </tr>
    );
};

export default DeveloperItem;