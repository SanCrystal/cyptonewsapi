//target news and get the url
//add event listener
const news = document.querySelectorAll('.news');
news.forEach(news => {
    news.addEventListener('click', function(e) {
        let newsLet = e.target;
        let url = newsLet.closest(".news").querySelector('.news-header').getAttribute("href");
        //change window location to new url
        window.location = url;
    })
})