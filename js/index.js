
let allDate=[]
let allDetails=[]
let detailsContent=document.querySelector("#detailsContent")
let btnClose=document.querySelector("#btnClose")
let details=document.querySelector("#details")
let getGame=document.querySelector("#getGame")
let mmorpg = document.querySelector("#mmorpg")
mmorpg.addEventListener("click" , function(){
  getDate('mmorpg')
})
let shooter = document.querySelector("#shooter")
shooter.addEventListener("click" , function(){
  getDate('shooter')
})
let sailing = document.querySelector("#sailing")
sailing.addEventListener("click" , function(){
  getDate('sailing')
})
let permadeath = document.querySelector("#permadeath")
permadeath.addEventListener("click" , function(){
  getDate('permadeath')
})
let superhero = document.querySelector("#superhero")
superhero.addEventListener("click" , function(){
  getDate('superhero')
})
let pixel = document.querySelector("#pixel")
pixel.addEventListener("click" , function(){
  getDate('pixel')
})


async function getDate(category) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3c0ef1987emsh15916866b55f952p11bf2cjsn700670bfd53a',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  let api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
  allDate = await api.json();
  console.log(allDate);
  disPlay(allDate)
}
getDate("mmorpg")

function disPlay(allDate) {
  let cartona=``;
      for (let i = 0; i < allDate.length; i++) {
        cartona+=`<div class="col-md-3 mt-5 hover-custom">
        <div onclick="getDetails(${allDate[i].id})"  class="card text-white text-center">
           
            <div>
            <img class="w-100" src="${allDate[i].thumbnail}" alt="">
            </div>
            <div class="p-2 text-start d-flex justify-content-around align-items-center">
              <span >${allDate[i].developer}</span><span> <button class="btn btn-info">Free</button></span>
            </div>
            <div>
              <p class="over pt-3 ps-2" >  ${allDate[i].short_description}</p>
            </div>
            <div class="d-flex justify-content-around fs-6 align-items-center">
              <p>${allDate[i].genre}</p>
              <p>${allDate[i].platform}</p>
            </div>
        </div>
      </div>`
      console.log(allDate[i]);
      }
      gameData.innerHTML=cartona
}


async function getDetails(idGames) {
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '3c0ef1987emsh15916866b55f952p11bf2cjsn700670bfd53a',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
  };
  
  let apiDetails =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}}`,options)
    allDetails = await apiDetails.json();
    console.log(allDetails);
    details.classList.replace("d-none" , "d-block")
    getGame.classList.replace("d-block" , "d-none")
    disPlayDetails()
  }
  // getDetails('1')
  

  function disPlayDetails() {
    let cartona2=``
      cartona2=` <div class="col-md-4">
      <img src="${allDetails.thumbnail}" alt="">
   </div>
   <div class="col-md-8 text-white">
      <h3>Title: ${allDetails.title}</h3>
      <div class="pb-3"><span>Category: </span><span class="bg-info rounded-2 p-1">${allDetails.genre}</span></div>
      <div class="pb-3"><span>Platform: </span><span class="bg-info rounded-2 p-1">${allDetails.platform}</span></div>
      <div class="pb-3"><span>Status: </span><span class="bg-info rounded-2 p-1">${allDetails.status}</span></div>
      <p>${allDetails.description}</p>
   </div>`
    detailsContent.innerHTML=cartona2
  }
  
  btnClose.addEventListener("click" , function () {
    closeSlide()
  })
  function closeSlide() {
    details.classList.replace("d-block" , "d-none")
    getGame.classList.replace("d-none" , "d-block")
  
  }


//   gameData = document.querySelector("#gameData")
// gameData.addEventListener("click" , function(){
  
  
// })

