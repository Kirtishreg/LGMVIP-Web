var rowno = 1;

function display() {
    var gender;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let ph_no = document.getElementById('ph-no').value;
    let address = document.getElementById('address').value;

    if (name == "" || email == "" || ph_no == "" || address == "") {
        alert("please fill the essential details");
    } else {

        let m = document.getElementById('g1');
        let f = document.getElementById('g2');

        if ((m.checked) == true) {
            gender = m.value;
        } else if ((f.checked) == true) {
            gender = f.value;
        } else {
            alert("Please select a gender");
        }

        let table = document.getElementById('infotable');
        var row = table.insertRow(rowno);
        var col1 = row.insertCell(0);

        col1.innerHTML = "<br>" + "<b> Name: </b>" + name + "<br> <b> Email </b>" + email + "<br> <b> Gender: </b>" + gender + "<br> <b> Phone no : </b> " + ph_no + "<br> <b> Address : </b>" + address + "<br>" + "<br>";

        rowno = rowno + 1;

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('gender').value = "";
        document.getElementById('ph-no').value = "";
        document.getElementById('address').value = "";
        m.checked = false;
        f.checked = false;

    }
}