var bookmarkName = document.getElementById("siteName");
var bookmarkUrl = document.getElementById("siteUrl");
 
var alert1 = document.getElementById("alert1");
var alert2 = document.getElementById("alert2");



var container = [];

if(localStorage.getItem('bookMarks') != null)
{
container=JSON.parse(localStorage.getItem('bookMarks'));
tableData(container);

}



function submit()
{
var z = ``
 z +=`

<p class="alert alert-error w-75 m-auto fw-bold my-2 p-1" id="alert1" >Name is required</p>

`
var e = ``

e +=

`
<p class="alert alert-error w-75 m-auto fw-bold my-2 p-1" id="alert1" >Url Field is required

</p>

`


    if(bookmarkName.value != "" && bookmarkUrl.value != "")
    {
var sites = 
    {
     name :bookmarkName.value,
     mark : bookmarkUrl.value
    }

    container.push(sites)
    localStorage.setItem('bookMarks',JSON.stringify(container))
    tableData(container);
    clear();
    
    }
    else
    {
        document.getElementById('alert1').innerHTML= z
        document.getElementById('alert2').innerHTML= e
        

    }
}



function clear()
{

    var z = ``
    z +=`
   
    <p id="alert1"></p>
   
   `
   var e = ``
   
   e +=
   
   `
   <p id="alert2"></p>
   
   </p>
   
   `


    bookmarkName.value="";
    bookmarkUrl.value="";
    document.getElementById('alert1').innerHTML= z
    document.getElementById('alert2').innerHTML= e

}



function error()
{
    if (bookmarkName.value == null && bookmarkUrl.value==null)
    {
        document.getElementById('alert').innerHTML= alert2
       

    }
}



function tableData(arr)
{

    var x = ``;
    for (var i = 0; i < arr.length; i++) 
    {
        x += `
        <tr> 
        <td>${arr[i].name}</td>
        <td> <a class="btn btn-primary ms-5" href="https://${arr[i].mark}" target="_blank">visit</a></td>
        <td><button class="btn btn-danger my-4" onclick="deleteElement(${i})" >Delete</button></td>
        </tr>
        
        `
    }
    document.getElementById('tablebody').innerHTML= x


}


function deleteElement(arr)
{
    container.splice(arr,1)
    localStorage.setItem('bookMarks',JSON.stringify(container))
    tableData(container);
}
