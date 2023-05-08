const number = [100, 90, 80, 70, 60, 50]
const numbers = document.querySelector(".number")
number.forEach(function (num) {
    numbers.innerHTML += `<div class="number" 
        <p>${num}</p>
    </div>`;
})

const string = [
    "Так долго вместе прожили, что вновь",
    "второе января пришлось на вторник,",
    "что удивленно поднятая бровь,",
    "как со стекла автомобиля – дворник,",
    "с лица сгоняла смутную печаль,",
    "незамутненной оставляя даль."
]
const str = document.querySelector('.strings_container')
for(let i = 0; i < string.length; i++) {
    str.innerHTML += `<p> ${string[i]} </p>`
}

const users = [
        {
            first_name: "Salvador",
            last_name: "Dali",
            age: "15"
        },
        {
            first_name: "Gala",
            last_name: "Dali",
            age: "48"
        },
        {
            first_name: "Antuan",
            last_name: "Gello",
            age: 32
        },
    ]

    const cards = document.querySelector(".cards")
    users.forEach(function (card) {
         if (card.age > 18) {
            cards.innerHTML += `
            <div class = "uers_container">
            <p>"First Name" ${card.first_name}</p> 
            <p>"Last Name"${card.last_name}</p> 
            <p>"Age"${card.age}</p>
            </div>`
         }else {
             cards.innerHTML += `<p>"You're too young!"</p>`
         };
         console.log(card)
    })