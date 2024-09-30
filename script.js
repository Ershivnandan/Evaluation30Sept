const hamburger = document.getElementById("hamburger")
const MobilelistItems = document.querySelector(".MobilelistItems")
const closenav = document.querySelector(".closenav")
const cardGrid = document.getElementById("cardGrid")

let isOpen = false
hamburger.addEventListener("click", ()=>{

    if(!isOpen){
        MobilelistItems.classList.add("openNav")
    }
    else{
        MobilelistItems.classList.remove("openNav")
    }
});
closenav.addEventListener("click", ()=>{
    if(isOpen){
        MobilelistItems.classList.add("openNav")
    }
    else{
        MobilelistItems.classList.remove("openNav")
    }
});



for(let i =0; i<6; i++){
    const card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
        <img
            src="https://i.ibb.co/7z2Hvqp/Rectangle-24.png"
            alt="Rectangle-24"
          />
          <div class="cardtextArea">
            <h4>LYNC Wallet SDK</h4>
            <p>
              Empowering developers to integrate account abstraction in their
              game, dapp, metaverse and more in minutes.
            </p>
          </div>
    `

    cardGrid.appendChild(card)
}