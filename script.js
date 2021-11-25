
console.log(dataCharacter)
    
    const getCharacterDetails = async (charac) => {
        const jsondata = filtrer(charac);
        console.log(jsondata);
        if(jsondata){

            jsondata.forEach((perso)=>{
                  let card = document.createElement("div");
            card.classList="card"

            let img = document.createElement("img");
            img.src="http://leafninja.com/"+perso.imgPerso;
            img.classList="img-character";
            card.appendChild(img);
            
            let container = document.createElement("div");
            container.classList="container";
            card.appendChild(container);


            let hName = document.createElement("h4");
            hName.textContent=perso.name;
            container.appendChild(hName);
if(perso.characteristics){
            let p1 = document.createElement("p");
            p1.textContent=perso.characteristics.Age;
            container.appendChild(p1)

            let techniques = document.createElement("div");
            let labelTech = document.createElement("label");
            labelTech.textContent="Techniques : ";
            techniques.appendChild(labelTech)
            container.appendChild(techniques)
            

            let classe = document.createElement("div");
            container.appendChild(classe)
            

            let p2 = document.createElement("p");
            p2.textContent=perso.village;
            container.appendChild(p2)


            let occ = document.createElement("div");
            container.appendChild(occ)
            

}


            document.getElementById("list").innerHTML = "";
            document.getElementById("list").appendChild(card);
                    
            })
          }


   
    }


    function filtrer(filtre){
        return dataCharacter.filter((perso)=>{
return perso.name.indexOf(filtre)>=0
        })
    }

    function lancerRecherche(event){

        if(!event || event.keyCode === 13){
           // event && event.stopPropagation();
            let value = document.getElementById("q").value;
            getCharacterDetails(value)
        }
        
    }