let mybuttonsdiv=document.querySelector('.buttonDiv')


let menubutton=['All','Breakfast','Lunch','Shakes','Dinner']
let btnarray=[]
menubutton.forEach((btn) =>{
let btnstring=`<button  onclick='filterFunction("${btn}")' >${btn}</button>`
btnarray.push(btnstring)
})
console.log(btnarray)
mybuttonsdiv.innerHTML=btnarray.join("")

const menus = [
    {
        src: './images/item-1.jpeg',
        title: 'Buttermilk Pancakes',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. </br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 20.99',
        category: 'Breakfast'
    },
    {
        src: ' ./images/item-4.jpeg',
        title: 'Country Delight',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 15.99',
        category: 'Breakfast'
    },
    {
        src: '/images/item-7.jpeg',
        title: 'Bacon Overflow',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 8.99',
        category: 'Breakfast'
    },
    {
        src: './images/item-2.jpeg',
        title: 'Dinner Double',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 13.99',
        category: 'Lunch'
    },
    {
        src: './images/item-5.jpeg',
        title: 'Egg Attack',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 22.99',
        category: 'Lunch'
    },
    {
        src: './images/item-8.jpeg',
        title: 'American Classic',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 12.99',
        category: 'Lunch'
    },
    {
        src: './images/item-9.jpeg',
        title: 'Quarantine Buddy',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 16.99',
        category: 'Shakes'
    },
    {
        src: './images/item-6.jpeg',
        title: 'Oreo Dream',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 18.99',
        category: 'Shakes'
    },
    {
        src: './images/item-3.jpeg',
        title: 'Godzilla Milkshakes',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 6.99',
        category: 'Shakes'
    },
    {
        src: './images/item-10.jpeg',
        title: 'Steak Dinner',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '$ 39.99',
        category: 'Dinner'
    },
]

let menuContainer=document.querySelector('.grid-container')
// console.log(menuContainer)

const menuArray = menus.map((menu) => {
    return `<div class="foodItem ">
    <div> <img class="img"  width="200px" src=${menu.src} /></div>
    <div class="item" >  <p class="title">${menu.title}</br></br></p>
    <p class="description">${menu.desc}</p></br>
    <p class="price">${menu.price}</p></div>
    </div>
    `
    
})

const filterFunction = (filter) => {
    console.log(filter)
    if (filter === 'All') {
        menuContainer.innerHTML = menuArray.join("")
        
    } else{
        {
            //true
            const filteredArray = menus.filter((menu) => menu.category.toLowerCase() === filter.toLowerCase()).map((menu) => {
                return `<div class="foodItem ">
                 <div> <img class="img" width="200" src=${menu.src} /> </div>
       <div class="item" > <p class="title" >${menu.title}</br></br> </p>
        <p class="description" >${menu.desc}</p></br>
       <p class="price" >${menu.price}</p> </div>
        </div>
        `
            })
            menuContainer.innerHTML = filteredArray.join("")
        }
    }}

