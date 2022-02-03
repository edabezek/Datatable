$(document).ready(function () {
    $("#customerDatatable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/api/customer",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],//id hiding
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "id", "name": "Id", "autoWidth": true },//camelCasing standard while working with js
            { "data": "firstName", "name": "FirstName", "autoWidth": true },//data for defining the column values
            { "data": "lastName", "name": "LastName", "autoWidth": true },
            { "data": "contact", "name": "contact", "autoWidth": true },
            { "data": "email", "name": "Email", "autoWidth": true },
            { "data": "dateOfBirth", "name": "DateOfBirth", "autoWidth": true },
            {
                "render": function (data,row) { return "<a href='#' class='btn btn-danger' onclick=DeleteCustomer('" + row.id+ "'); >Delete</a>";   }
            },
        ]
    });
});  