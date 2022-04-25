import React, {FC, useRef, useState} from 'react';
import {IDevelopers} from "../types/types";
export type TDeveloper = {
    name: string
    skill: string
    department: string
    id: number
}

interface AddDevelopersProps {
    addDevelopers: (name: TDeveloper) => void
}

const AddDevelopers: FC<AddDevelopersProps> = ({ addDevelopers}) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const [skill, setSkill] = useState<string>('')
    const [department, setDepartment] = useState<string>('')

    const skillHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSkill(e.target.value);
    }
    const departmentHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDepartment(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (nameRef?.current?.value && skill && Boolean(department)) {
            addDevelopers({id: 1, name: (nameRef.current.value as string), skill, department})
            setDepartment('');
            setSkill('')
            nameRef.current!.value = ''
        } else {
            alert('Заполните поля')
        }
    }

    return (
        <div className="row justify-content-md-center mb-5">
            <div className="col-md-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">ФИО</label>
                        <input type="text" ref={nameRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <select className="form-select mb-3" aria-label="Default select example" value={skill} onChange={skillHandler}>
                        <option selected>Выберите уровень развития</option>
                        <option value="Junior">Junior</option>
                        <option value="Middle">Middle</option>
                        <option value="Senior">Senior</option>
                    </select>
                <select className="form-select mb-3" aria-label="Default select example" value={department} onChange={departmentHandler}>
                    <option selected>Выберите отдел</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
                    <button type="submit" className="btn btn-primary" onClick={clickHandler}>Добавить</button>
            </div>
        </div>
    );
};

export default AddDevelopers;