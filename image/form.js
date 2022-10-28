// Fetching api

const api_url = "form.json";

const url123 = 'https://fakestoreapi.com/products';

// show data button

function show() {
    
document.getElementById("jsp").innerHTML='';
document.getElementById("Registrationtable").innerHTML='';

// async function getdata(url) {

//     await fetch(url).then((res) => {
//         console.log(res);
//         return res.json();
        
//     }).then((data) => {
//         console.log(data);
//         show(data);
//     })
// }

async function getdata(url) {
    await fetch(url).then(res => res.json()).then(data => show(data));
}

getdata(api_url);



function show(data) {
    let table =
        `<tr>
    <th><h3 class="text-danger">Firstname</h3></th>
    <th><h3 class="text-danger">Lastname</h3></th>
    <th><h3 class="text-danger">Birthday</h3></th>
    <th><h3 class="text-danger">Gender</h3></th>
    <th><h3 class="text-danger">Email</h3></th>
    <th><h3 class="text-danger">Contact</h3></th>

    </tr>`;

    for (let tbl of data) {
        table +=
            `<tr>
    <td >  ${tbl.firstname}  </td>
    <td>  ${tbl.lastname}  </td>
    <td>  ${tbl.birthday}  </td>
    <td>  ${tbl.gender}  </td>
    <td>  ${tbl.email}  </td>
    <td>  ${tbl.contact}  </td>
    
    </tr>`;
    }


    document.getElementById("Registrationtable").innerHTML = table;
}

// fetching through json placeholder




async function data(apiurl) {

    await fetch(apiurl).then((resapi) => {
        console.log(resapi);
        return resapi.json();

    }).then((dataapi) => {
        console.log(dataapi);
        showapi(dataapi);
    })
}

data(url123)


function showapi(dataapi) {
    let tableapi =


        `<tr>
        <th><h3 class="text-danger">Id</h3></th>
        <th><h3 class="text-danger">Category</h3></th>
        <th><h3 class="text-danger">Description</h3></th>
      
        <th><h3 class="text-danger">Price</h3></th>
        <th><h3 class="text-danger">Rating</h3></th>
    
        </tr>`

    for (let tblapi of dataapi) {
        tableapi +=
            `<tr>
        <td>  ${tblapi.id} .  </td>
        <td > ${tblapi.category}  </td>
        <td>  ${tblapi.description}  </td>
        <td> $ ${tblapi.price}  </td>
        <td>  ${tblapi.rating.rate}  </td>
        
        </tr>`;
    }

    document.getElementById("jsp").innerHTML = tableapi;
}


   
}

function hide(){
    document.getElementById("jsp").innerHTML=''; 
    document.getElementById("Registrationtable").innerHTML='';
  
}