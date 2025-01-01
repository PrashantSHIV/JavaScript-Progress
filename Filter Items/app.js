let menu_items = document.querySelectorAll('.menu-items');
let buttons = document.querySelector('.filter-button');
let search_filter = document.querySelector('.search-filter');

search_filter.addEventListener('keyup',() => {
    menu_items.forEach(item => {
        item.style.display = 'flex';
    })
    
    let search = document.querySelector('#search').value;
    console.log(search)
    menu_items.forEach(item => {
        if(!item.children[1].textContent.includes(search)){
              item.style.display = 'none';
        }
    })

});

buttons.onclick = (e) => {
    if(e.target.tagName === 'BUTTON'){
        menu_items.forEach(item => {
            item.style.display = 'flex';
        })
        if(e.target.classList.contains('match')){
            menu_items.forEach(item => {
                if(!item.children[1].textContent.startsWith(e.target.textContent.toLowerCase())){
                      item.style.display = 'none';
                }
            })
        }
    }
}