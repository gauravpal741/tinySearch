const data = [
    {
        "id": 1,
        "title": "Casa com Piscina",
        "deal": "sale",
        "type": "house",
        "bed": "4",
        "city":"INDORE",
        "price": "R$ 2.600.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520011556/chatbot-imoveis/casa-centro.jpg"
    },
    {
        "id": 2,
        "title": "Casa Costa e Silva",
        "deal": "sale",
        "type": "house",
        "bed": "3",
        "city":"GWALIOR",
        "price": "R$ 280.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014276/chatbot-imoveis/casa-costa-silva.jpg"
    },
    {
        "id": 3,
        "title": "AP América",
        "deal": "sale",
        "type": "ap",
        "bed": "2",
       "city":"UJJAIN",
        "price": "R$ 460.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg"
    },
    {
        "id": 4,
        "title": "Casa Costa e Silva",
        "deal": "sale",
        "type": "house",
        "bed": "3",
        "city":"RATLAM",
        "price": "R$ 280.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014276/chatbot-imoveis/casa-costa-silva.jpg"
    },
    {
        "id": 5,
        "title": "AP América",
        "deal": "sale",
        "type": "ap",
        "bed": "2",
        "city":"BHOPAL",
        "price": "R$ 460.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg"
    },
    {
        "id": 6,
        "title": "Casa com Piscina",
        "deal": "sale",
        "type": "house",
        "bed": "4",
        "city":"INDORE",
        "price": "R$ 2.600.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520011556/chatbot-imoveis/casa-centro.jpg"
    }, 
    {
        "id": 7,
        "title": "AP América",
        "deal": "sale",
        "type": "ap",
        "bed": "2",
       "city":"MANALI",
        "price": "R$ 460.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg"
    },
    {
        "id": 8,
        "title": "Casa com Piscina",
        "deal": "sale",
        "type": "house",
        "bed": "4",
        "city":"PUNE",
        "price": "R$ 2.600.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520011556/chatbot-imoveis/casa-centro.jpg"
    },
    {
        "id": 9,
        "title": "Casa Costa e Silva",
        "deal": "sale",
        "type": "house",
        "bed": "3",
        "city":"DELHI",
        "price": "R$ 280.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014276/chatbot-imoveis/casa-costa-silva.jpg"
    },
    {
        "id": 10,
        "title": "Casa com Piscina",
        "deal": "sale",
        "type": "house",
        "bed": "4",
        "city":"NOIDA",
        "price": "R$ 2.600.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520011556/chatbot-imoveis/casa-centro.jpg"
    },
    {
        "id": 11,
        "title": "Casa Costa e Silva",
        "deal": "sale",
        "type": "house",
        "bed": "3",
        "city":"MUMBAI",
        "price": "R$ 280.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014276/chatbot-imoveis/casa-costa-silva.jpg"
    },
    {
        "id": 12,
        "title": "AP América",
        "deal": "sale",
        "type": "ap",
        "bed": "2",
        "city":"PUNE",
        "price": "R$ 460.000",
        "photo": "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg"
    }
]



document.addEventListener('DOMContentLoaded', function () {
    let myData = document.getElementById("table")
    let list = "";
    data.forEach((item, index) => {
        list += `<div class="col-lg-4 col-md-4 col-sm-3 col-2 mainCol"  >
        <div class="card" >
            <img class="card-img-top" src= ${item.photo} alt="Card image">
            <div class="card-body">
              <h4 class="card-title">${item.city}</h4>
              <p class="card-text">${item.price}</p>
            </div>
            </div>
          </div>`
    })
    myData.innerHTML = list
}); 

function myFunction() {
    var input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("card")
    titles = document.getElementsByClassName("card-title");
    for (i = 0; i < cards.length; i++) {
        a = titles[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
        } else {
          cards[i].style.display = "none";
        }
      }
}