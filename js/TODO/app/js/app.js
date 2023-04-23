'use strict'


class Sticky{
    constructor(caption,text) {
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

/*const regexp = new RegExp('шаблон','флаги');

const regexp1 = new RegExp('шаблон','флаги');*/

const reg = /./gi

const text = `Как и выражения функций, выражения классов могут быть анонимными или иметь имя, отличное от переменной, которой оно присвоено. Однако, в отличие от объявлений функций, объявления классов имеют те же ограничения на временную мертвую зону, что и let или const, и ведут себя так, как будто они не подняты.`
    
    


console.log(text.replaceAll(/,/gi,'***'))


