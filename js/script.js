//                   --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const user = {
//     name:"",
//     specialty:"",
//     gpa: 0,
//     missLesson:0,
//     userInfo: function(userNumber, city) {
//         console.group(`${this.name} №${userNumber}`);
//         console.log(`Name : ${this.name}`);
//         console.log(`Specialty : ${this.specialty}`);
//         console.log(`GPA : ${this.gpa}`);
//         console.log(`Missed lesson : ${this.missLesson}`);
//         console.log(`City : ${city}`);
//         console.groupEnd();
//     }
// };

// const Dima = {
//     name:"Dmitri",
//     specialty:"Front End",
//     gpa: 10,
//     missLesson:2,
// };

// const Anna = {
//     name:"Natalia",
//     specialty:"Java Script",
//     gpa: 12,
//     missLesson:1,
// };

// const Ksenia = {
//     name:"Ksenia",
//     specialty:"C++",
//     gpa: 8,
//     missLesson:5,
// };

// user.userInfo.call(Dima, 1367, "Kiev");

// user.userInfo.apply(Anna, [2945, "Lviv"]);

// user.userInfo.bind(Ksenia, 1298, "Mexico")();


//                    --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// document.body.insertAdjacentHTML("prepend", `<button>html</button>`);

// const addTag = (version, tag) => {
//     divJS.insertAdjacentHTML(`${version}`, `${tag}`);
// }; 

// addTag("afterbegin", `<button class="html">html</button>`);
// addTag("beforeend", `<button class="css">css</button>`);
// addTag("beforeend", `<div class="text"><p></p></div>`)

// const htmlText = `HTML is the standard markup language for creating Web pages.`;

// const cssText = "CSS is the language we use to style a Web page.";

// function addText(text) {
//     addTag("beforeend", `<div class="text"><p>${text}</p></div>`)
// }


// document.addEventListener('click',(e)=> {console.log(e.target.className === 'html') 

// let selectorText = document.querySelector('.text');
// if (e.target.className === 'html'){
//     selectorText.remove();
//     addText(htmlText)
// } else if (e.target.className === 'css') {
//     selectorText.remove();
//     addText(cssText)
// } else {
//     selectorText.remove();
//     addTag("beforeend", `<div class="text"><p></p></div>`)
// }
// });


//                             --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4