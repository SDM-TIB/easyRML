$(document).ready(function () {
    $("#sendRDB").on("click", function () {
        var RDBdata = { RDBdata: [] };

        var typeofDataType = $("#selecttypedatasource option:selected").text();
        var databasename = $("#databasename").val();
        var databaseurl = $("#databaseurl").val();
        var databasedriver = $("#databasedriver").val();
        var databaseusername = $("#databaseusername").val();
        var databasetable = $("#databasetable").val();
        var databasequery = $("#databasequery").val();
        var databasehost = $("#databasehost").val();
        var databaseport = $("#databaseport").val();


        RDBdata.RDBdata.push({
            sourceType: typeofDataType,
            databasename: databasename,
            databaseurl: databaseurl,
            databasedriver: databasedriver,
            databaseusername: databaseusername,
            databasetable: databasetable,
            databasequery: databasequery,
            RDB_host: databasehost,
            RDB_port: databaseport
        });

        // var finalRDBdata = JSON.stringify(RDBdata);
        // console.log(finalRDBdata);


        $.ajax({
            type: "POST",
            url: "/readDataSource_RDB",
            data: JSON.stringify(RDBdata),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                alert(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            },
        });
    });
});
