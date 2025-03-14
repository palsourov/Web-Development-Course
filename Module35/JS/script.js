
const Catagoris = () =>{
   fetch(' https://openapi.programming-hero.com/api/phero-tube/categories')
   .then(res =>res.json())
   .then(data =>DisplayData(data.categories));   
}
const DisplayData = (btnCatagoris) =>{  
    console.log(btnCatagoris);
    const btnContainer = document.getElementById('btnContainer');
    for (let button of btnCatagoris){
    
         const  CategoriDiv = document.createElement("div");
         CategoriDiv.innerHTML=`
           
         <button  class="px-5 py-4 bg-gray-300 rounded-xl text-gray-600 font-bold hover:bg-red-600 hover:text-[#ffff]"> ${button.category} </button>
          
         `
         btnContainer.append(CategoriDiv);    
    }
          
}
Catagoris();