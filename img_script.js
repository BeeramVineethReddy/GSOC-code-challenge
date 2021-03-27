function grouping()
{
    var name = document.getElementById("group").value;

    if(name=="none")
    {
        location.reload();
        return;
    }
    
    var table = document.getElementById("table");
    var rows = table.rows;

    for(i=1;i<rows.length;i++)
    {
        var x = rows[i].getElementsByTagName("TD")[1];
        console.log(x.innerHTML+" "+name);
        if(x.innerHTML!=name)
        {
            rows[i].innerHTML="";
        }
    }
}