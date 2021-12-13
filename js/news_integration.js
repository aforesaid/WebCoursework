const accessKey = "4_ETGrbTyuk0A7OaKFUhBcZcJBDNFU7rGSUkxu5S42c";
const endpoint = "https://api.newscatcherapi.com/v2/search?sort_by=date&page_size=100";


var getCurrentNews = (placeName) =>{
    let uri = endpoint + "&q=" + placeName;
    var response = JSON.parse(httpGet(uri, accessKey));

    return Array.from(new Set(response.articles.map(s => s.title)))
        .map(title => {
            return {
                title: title,
                url: response.articles.find(s => s.title == title).link
            }
        }).slice(0,5);
}

function changeDataInNews(placeName){
    let news = getCurrentNews(placeName);
    if (news){

        cleanDataInNews();
        let element = document.getElementsByClassName('news_content')[0];
        for (let i = 0; i < news.length; i++){
            let newItem = document.createElement('li');
            newItem.classList.add('news_item');
            let detailElement = document.createElement('a');
            detailElement.classList.add('details');
            detailElement.href = news[i].url;
            detailElement.target = "_blank";
            detailElement.textContent = news[i].title;
            newItem.appendChild(detailElement);
            element.appendChild(newItem);

            let hrElement = document.createElement('hr');
            hrElement.classList.add('news_item');
            element.appendChild(hrElement);
        }
        return true;
    }
    else{
        return false;
    }
}
function cleanDataInNews(){
    let elements = document.getElementsByClassName('news_item');
    while (elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}