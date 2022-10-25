let starshipsList = [];

const output = (starships) => {

    
    
    starships.forEach(starship => {
        let name = document.createElement("h2");
        name.textContent = starship.name;
                
        let cost_in_credits = document.createElement("h4");
        cost_in_credits.innerHTML = starship.cost_in_credits;

        let manufacturer = document.createElement("h4");
        manufacturer.textContent = starship.manufacturer;

        let crew = document.createElement("h4");
        crew.textContent = starship.crew;

        let article = document.createElement('article');
        article.appendChild(name);
        article.appendChild(cost_in_credits);
        article.appendChild(manufacturer);
        article.appendChild(crew);

        document.querySelector("#starships").appendChild(article);
            
        
    
    })
   
};

async function getstarships() {
    const result = await fetch('https://lowanwill.github.io/cse121b/starships.json');
    starshipsList = await result.json();
        output (starshipsList);
    }


getstarships();
   
function reset() {
    document.querySelector("#starships").innerHTML = '';
}


const sortByElement = document.querySelector('#sortBy');

const sortBy = () => {
    reset();
    if (sortByElement.value == 'starshipNameAscending') {
        starshipsList.sort((a,b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
                return 0;
        })
    }
    
    else if (sortByElement.value == "starshipNameDescending"){
        starshipsList.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
                return 0;
        })
    

    }
    else {
            console.log("No order of ships")
       
    }

    output(starshipsList)
}  
//sortBy(starshipsList);
//    let filter = document.querySelector('#sortBy').value;
//
//    switch (filter) {
        
//        case 'starshipCostDescending':
//            output(starshipsList.sort(
//                function (ship1, ship2) {
//                let crew1 = ship1.crew;
//                let crew2 = ship2.crew;
//                if (crew1 > crew2)
//                    return -1;
//                else if (crew1 < crew2)
//                    return 1;
//                else
//                    return 0;
//            }));
//            break;
//        case 'starshipCostAscending':
//            output(starshipsList.sort(
//                (ship1, ship2) => {
//                    let crew1 = ship1.crew;
//                    let crew2 = ship2.crew;
//                if (crew1 < crew2) 
//                    return -1;
//                else if (crew1 > crew2) 
//                    return 1;
//                else 
//                    return 0;
//            }));
//            break;
//    }
//};  
sortBy();


export {output, getstarships, sortBy};
