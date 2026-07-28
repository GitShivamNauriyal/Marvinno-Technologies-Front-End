// function abc() {
//     console.log(abc.xyz);
// }

// abc();
// abc.xyz = 400;
// abc.xyz = 500;
// abc();

numbers = [10, 45, 23, 6, 76, 2, 3, 9, 34];

numbers.forEach((num) => {
    setTimeout(() => {
        console.log(num);
    }, num);
    console.log("num:", num);
});
