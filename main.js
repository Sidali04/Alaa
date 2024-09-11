let getId = (id) =>{
    return document.getElementById(id);
}
let hide_show_ul_header = true;
getId('list').addEventListener('click',()=>{
    if (hide_show_ul_header) {
        getId('ul_header').style.height = '31vh'
        getId('ul_header').style.display = 'block';
        hide_show_ul_header = false;
    }else{
        getId('ul_header').style.height = '0vh'
        getId('ul_header').style.display = 'none';
        hide_show_ul_header = true;
    }
});
let nav = document.querySelector('nav');
let article = document.querySelector('article');
let aside = document.querySelector('aside');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
getId('About_me').addEventListener('click',()=>{
        nav.style.display = 'none';
        article.style.display = 'none';
        aside.style.display = 'block';
        main.style.display = 'none';
        footer.style.display = 'none';
});
getId('return_menu').addEventListener('click',()=>{
    nav.style.display = 'block';
    article.style.display = 'block';
    aside.style.display = 'none';
    main.style.display = 'block';
    footer.style.display = 'block';
});