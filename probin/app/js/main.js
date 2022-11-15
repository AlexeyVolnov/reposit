// 1
/***********************************

 let str = 'Каждый';
 let result;

 function delete_characters(str,length){
    if ((str.constructor === String) && (length>0)){
        return str.slice(0, length+1);
    }
   console.log(`функция delete_characters сработала с ошибкой возможно была передана не строка или длина строки не больше нуля`);
}
 result = delete_characters(str, 6);
 console.log(result);
 *************************************/
//


// 2
/*****
 let str = 'Каждый';
 let [...result] = [str];

 console.log(result);
 *******/

//



// 3 Функция при передаче строки в качестве аргумента выводит значения символов по их кодам в UTF-16 от начального до конечного
//   Используется метод, получения веса символа          str.codePointAt(1);

/*****************************************************************************

let str = 'Каждый';
function utf16(str) {
    let mass = {};
    let allCounttt = 0;
    if (str.constructor === String) {
        for (let i = 0; i < str.length; ++i) {
            let tempes = str.codePointAt(i);

            mass[str[i]] = tempes;
            allCounttt += tempes;
        }


    } else console.log('передана не строка \"Ошибка\"');
    return [mass, allCounttt];
}

console.log(utf16(str));

 ********************************************************************************/


//



// 4












//