let num = [
     [1,2,3],
     [10, 20, 30],
     [100, 200, 300]
];
// 3x3 matrix: balanced 2D Array: [row][column]

//console.log(num[0][0]);
//console.log(num[2][2]);

//index--based normal loop:
// for( let i = 0; i<num.length; i++){
//     for( let j = 0; j<num[0].length;j++){
//         console.log(num[i][j]);
//     }
// }

for( let i = 0; i<num.length; i++){
    for( let j = 0; j<num[0].length;j++){
        process.stdout.write(` ${num[i][j]}`);
    }
    process.stdout.write('\n');
}

console.log("-----------");
//jagged Array
let marks = [
    [1, 2, 3],
    [10],
    [23, 44, 55, 67],
    [90, 80]
];

for( let i = 0; i<marks.length; i++){
    for(let j = 0; j<marks[i].length; j++){
        process.stdout.write(` ${marks[i][j]}`);
    }
    console.log();
}