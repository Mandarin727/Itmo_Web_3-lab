const container = document.getElementById('container');

document.getElementById('btn_crt').addEventListener("click", (e) => {
    if(document.getElementById('nicetable') != null)
    {
        return;
    }
        const tableNode = document.createElement("table");
        tableNode.id = "nicetable";

        document.getElementById('btn_add').disabled = false;
        document.getElementById('btn_del').disabled = false;
        document.getElementById('row_number').disabled = false;

        e.target.disabled = true;

        container.appendChild(tableNode);        
});

document.getElementById("btn_add").addEventListener("click", () =>{
    const table = document.getElementById('nicetable');

    const tr = document.createElement("tr");

    const tdNum = document.createElement("td");
    tdNum.innerHTML = table.childNodes.length + 1;

    const tdVal = document.createElement("td");
    tdVal.innerHTML = "value";

    tr.appendChild(tdNum);
    tr.appendChild(tdVal);

    table.appendChild(tr);
});

document.getElementById("btn_del").addEventListener("click", () =>{
    const table = document.getElementById('nicetable');
    const rowToRemove = parseInt(document.getElementById('row_number').value);
    table.childNodes[rowToRemove - 1].remove();
});




