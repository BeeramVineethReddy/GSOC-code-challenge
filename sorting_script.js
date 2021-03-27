
function group()
{

  data = [
    {name: "Noah", c: "51", java: "90", ds:"39" ,alg:"65"},
    {name: "Noah", c: "91", java: "88" , ds:"19" ,alg:"58"},
    {name: "William", c: "34", java: "82",ds:"32",alg:"87"},
    {name: "William", c: "62", java: "97",ds:"41",alg:"83"},
    {name: "James", c: "32", java: "14",ds:"68", alg:"84"},
    {name: "James", c: "40", java: "89",ds:"67",alg:"70"}
]

var name = document.getElementById("group").value;
if(name=="none")
{
  location.reload();
}
var table = document.getElementById("table");
var rows = table.rows;

for (i = 1; i < rows.length; i++)
{
  rows[i].innerHTML="";
}

var rn=1;
for(i =0;i<data.length;i++)
{
  if(name==data[i].name)
  {
    var row = table.insertRow(rn);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);


    cell0.innerHTML = data[i].name;
    cell1.innerHTML = data[i].c;
    cell2.innerHTML = data[i].java;
    cell3.innerHTML = data[i].ds;
    cell4.innerHTML = data[i].alg;
    rn++;
  }

}




  // var name = document.getElementById("group").value;
  // //console.log(n);
  // var table = document.getElementById("table");
  // var rows = table.rows;
  // var del = [];
  // for (i = 1; i < rows.length; i++)
  // {
  //   x = rows[i].getElementsByTagName("TD")[0];
  //   console.log(x);
    
  //   if(name.localeCompare(x.innerHTML)!=0)
  //   {
  //     del.push(i);
  //   }
  // }
  // for(i=0;i<del.length;i++)
  // {
  //   document.getElementById("table").deleteRow(del[i]);
  // }
}
function util()
{
    var sortby = document.getElementById("sort").value;
    if(sortby == 'none')
    {
      location.reload();

    }
    else if(sortby == 'name')
    {
        sortTable(0);
    }
    else if(sortby == 'c')
    {
        sortTable(1);
    }
    else if(sortby == 'java')
    {
        sortTable(2);
    }
    else if(sortby == 'ds')
    {
        sortTable(3);
    }
    else
    {
        sortTable(4);
    }

}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      //console.log(x);
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}