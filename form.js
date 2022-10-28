// fecting Api
const url="characters.json";



 const getdata = (url) =>{
    fetch(url).then((res)=>{
    console.log(res);
    return res.json();

}).then((data)=>{
    console.log(data);
    show(data);
}) 
};

 getdata(url);



// table

function show(data){
    let table =
    `<tr>
    <th onclick="search()"><h3>Name</h3></th>
    <th><h3>House</h3></th>
    <th><h3>Image</h3></th>
    <th><h3>Actor</h3></th>
    <th><h3>Ancestry</h3></th>
    <th><h3>yearOfBirth</h3></th>
    </tr>`;


    for(let tbl of data){
        table +=
        `<tr>
        <td>${tbl.name}</td>
        <td>${tbl.house}</td>
        <td><img src="${tbl.image}" width="150px" height="150px" alt="img"></td>
        <td>${tbl.actor}</td>
        <td>${tbl.ancestry}</td>
        <td>${tbl.yearOfBirth}</td>
        </tr>`;
    }

    document.getElementById("tabledata").innerHTML=table;
}





// sorting  by name

function search(){
 console.log("yguhjyk");

 getdata.sort()

}




