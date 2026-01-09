// let count = 1;

// if (test === count) {
//     count++;
// } else if (test === 16) {
//     alert(['win']);
// }
// else {
//     alert('game over');
// };


let arr = [];

for (let i = 0; i < 16; i++) {
    arr[i] = i + 1;
};
console.log(arr);

function tableFn() {
    let table = document.querySelector('table');

    let last = [...arr];

    let data = '';
    for (let i = 0; i < 4; i++) {
        data += `<tr>`;
        for (let j = 0; j < 4; j++) {
            data += `<td>${last[Math.floor(Math.random() * last.length)]}</td>`;
         }
        data += `</tr>`
    };
    table.innerHTML = data;
};
tableFn();

