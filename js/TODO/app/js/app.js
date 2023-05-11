'use strict'


class Sticky {
    constructor(caption, text) {
        this.caption = caption;
        this.text = text
    }
}


const containerForStick = document.querySelector('.add_sticky');

const stickyHtml = `<input type="text" placeholder="Caption" class="sticky__title">
                    <input type="text" placeholder="Note text" class="sticky__text">`;

const addStick = `<div class="add_sticky">
        <span class="material-symbols-outlined add_stick">playlist_add</span>
      </div>`


let test = ['meet', 'car', 'banana']
test[20] = 'kakacha'
Array.prototype.forEach2 = function (callback) {
  
       if (this === null) {
           throw new Error('object is not iterable')
       }
       let i = 0;
       const O = Object(this)
       const len = O.length;
       while (i < len) {
           if (i in O) callback(O[i], i, O)
           i++
       }
   

}


test.forEach2((value, index, array) => {
    console.log(value, index, array)
})+21``
 2.