// src/components/basic.table.js
import React from "react";

import { useTable } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from "../service";

function BasicTableComponent() {

    const columns = [
        {
            Header: 'Name',
            columns: [
                {
                    Header: 'Title',
                    accessor: 'title',
                },
                {
                    Header: 'Description',
                    accessor: 'description',
                },
            ],
        },
        {
            Header: 'Info',
            columns: [
                {
                    Header: 'Vote Count',
                    accessor: 'vote',
                },
                
                {
                    Header: 'Tag',
                    accessor: 'tag',
                },
                
            ],
        },
    ];

    const data = [
        {
            "title": "horn-od926",
            "description": "selection-gsykp",
            "vote": 22,
            "tag": "single"
        },
        {
            "title": "heart-nff6w",
            "description": "information-nyp92",
            "vote": 16,
            "tag": "complicated"
        },
        {
            "title": "minute-yri12",
            "description": "fairies-iutct",
            "vote": 7,
            "tag": "single"
        },
        {
            "title": "degree-jx4h0",
            "description": "man-u2y40",
            "vote": 27,
            "tag": "relationship"
        }
    ]

  
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data
    })

    return (

        <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BasicTableComponent;

// getdoc= async ()=>{
//     const snapshot = await firebase.firestore().collection('boards').get();
//     console.log(snapshot.docs.length);
//     // snapshot.then(()=>{
//     //     snapshot.docs.map(doc=>console.log(doc.data()));
//     // }).catch(err=>{
//     //     console.log(err);
//     // })
//     //return snapshot.docs.map(doc => doc.data());
//     var arr=[];
//     snapshot.forEach(document=>{
//         //console.log(document.data());
//         arr.push(document.data());

//     })
//     return arr;
// }