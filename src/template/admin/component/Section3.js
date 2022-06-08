import DataTable from 'react-data-table-component';

function Section3(props) {
    const listAccount = props.listAccount;
    console.log(listAccount)
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <section className="total-data">
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </section>
    );

}

export default Section3;
