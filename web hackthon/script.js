async function foo(){
  // 
    let res=await fetch("https://www.anapioficeandfire.com/api/books")
    let res1=await res.json(res);
     console.log(res1);
     document.addEventListener("DOMContentLoaded",async()=>{
      let res1=[];
      try{
        res1=await foo()
      }catch(e){
        console.log("Error!");
        console.log(e);
      }
      console.log(res1);
     });
   for(let i=0;i<res1.length-1;i++){   
    console.log(res1[2]);
    let div=document.createElement("div");
     div.innerHTML=`<div class="container">
     <div class="card" style="width: 22rem;">
     <div class="card-body">
     <h5 class="card-title"><b>Name of book</b>:${res1[i].name}</h5>
     <h5 class="card-title"><b>Isbn</b>:${res1[i].isbn}</h5>
     <h5 class="card-title"><b>Number of page</b>:${res1[i].numberOfPages}</h5>
     <h5 class="card-title"><b>Author</b>:${res1[i].authors}</h5>
     <h5 class="card-title"><b>Publisher name</b>:${res1[i].publisher}</h5>
     <h5 class="card-title"><b>Released date</b>:<br>${res1[i].released}</h5>
     <h5 class="card-title5">Charecters:
     <div class="list-group">
      <button type="button"class="list-group-item "><a href="${res1[i].characters[0]}" target="_blank" class="stretched-link">character1</a></button>
       <button type="button" class="list-group-item "><a href="${res1[i].characters[1]}" target="_blank" class="stretched-link">character2</a></button>
       <button type="button" class="list-group-item "><a href="${res1[i].characters[2]}" target="_blank" class="stretched-link">character3</a></button>
       <button type="button" class="list-group-item "><a href="${res1[i].characters[3]}" target="_blank" class="stretched-link">character4</a></button>
       <button type="button" class="list-group-item "><a href="${res1[i].characters[4]}" target="_blank" class="stretched-link">character5</a></button>
     </div> </h5>
     </div>
  </div>
 </div>
 <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`
 


  document.body.append(div)
  

}
}foo()
