import React, { Component } from 'react';
import axios from 'axios';

import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'First Name',
        selector: 'nombre',
        sortable: true
    },
    {
        name: 'Last Name',
        selector: 'cif',
        sortable: true
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true
    }
];

export class ExampleComponent extends Component {
    render() {
        return <div></div>;
    }
}
