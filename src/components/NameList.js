import React from "react";
import Person from "./Person";

function NameList() {

    const names = ['Hassan', 'Ali', 'Abdo']
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "React",
        },
        {
            id: 2,
            name: "Clark",
            age: 50,
            skill: "spring boot",
        },
        {
            id: 3,
            name: "Diana",
            age: 21,
            skill: "Databases",
        },
    ];

    // const personList = persons.map((person) => <Person key={person.id} person={person}></Person>);
    // const nameList = names.map((name,index) => <h2 key={index}>{name}</h2> )

    const personList = persons.map((person) => <Person key={person.id} person={person}></Person>)
    return <div>{personList}</div>;
}

export default NameList;
