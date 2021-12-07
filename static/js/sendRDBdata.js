$(document).ready(function () {
    $("#sendRDB").on("click", function () {
        var RDBdata = { RDBdata: [] };

        var databasename = $("#databasename").val();
        var databaseusername = $("#databaseusername").val();
        var databasepassword = $("#databasepassword").val();
        var databasetable = $("#databasetable").val();
        var databasequeryversion = $("#databaseqeryversion").val();
        var databasehost = $("#databasehost").val();
        var databaseport = parseInt($("#databaseport").val());


        RDBdata.RDBdata.push({
            databasename: databasename,
            databaseusername: databaseusername,
            databasepassword: databasepassword,
            databasetable: databasetable,
            sqlqueryversion: databasequeryversion,
            RDB_host: databasehost,
            RDB_port: databaseport
        });

        var finalRDBdata = JSON.stringify(RDBdata);
        console.log(finalRDBdata);


        $.ajax({
            type: "POST",
            url: "/readDataSource_rdb",
            data: JSON.stringify(RDBdata),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                alert(data);


                $('#selectdatafield').empty();
                $('#selectdatafield').append($('<option>', { value: "default", text: "--select the data field--" }).prop('disabled', true));
                $("#selectdatafield").trigger("chosen:updated");

                $('#selectdatafieldsuggestion').empty();
                $('#selectdatafieldsuggestion').append($('<option>', { value: "default", text: "--select the data field--" }).prop('selected', true));

                $('#predicateselectdatafield').empty();
                $('#predicateselectdatafield').append($('<option>', { value: "default", text: "--select the data field--" }).prop('disabled', true));
                $("#predicateselectdatafield").trigger("chosen:updated");

                $('#joinconditionchild').empty();
                $('#joinconditionchild').append($('<option>', { value: "default", text: "--joinCondition child--" }).prop('selected', true));

                $.ajax({
                    url: '/receiveDataFields_rdb',
                    type: 'GET',
                    contentType: "application/json",
                    dataType: 'json',
                    success: function (json) {
                        $.each(json, function (file) {
                            $('#selectdatafield').append($('<option value="' + this + '">' + this + '</option>'));
                            $("#selectdatafield").trigger("chosen:updated");

                            $('#selectdatafieldsuggestion').append($('<option value="' + this + '">' + this + '</option>'));

                            $('#predicateselectdatafield').append($('<option value="' + this + '">' + this + '</option>'));
                            $("#predicateselectdatafield").trigger("chosen:updated");

                            $('#joinconditionchild').append($('<option value="' + this + '">' + this + '</option>'));
                        });
                    }
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            },
        });
    });
});
