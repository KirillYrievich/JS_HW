"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

function mainFunction(length) {
    for (let i = 1; i <= length; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += 'x';
        }
        console.log(line);
    };
};

mainFunction(20);
