const apiKey = "0d5c27d1d1804a4d87d20211467d2987";
const endpoint = "https://newsapi.org/v2/everything?sortBy=publishedAt";

var getCurrentNews = (placeName) =>{
    let uri = endpoint + "&q=" + placeName + "&apiKey=" + apiKey;
    var response = JSON.parse(httpGet(uri));

    return Array.from(new Set(response.articles.map(s => s.title)))
        .map(title => {
            return {
                title: title,
                description: response.articles.find(s => s.title == title).description,
                url: response.articles.find(s => s.title == title).url
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