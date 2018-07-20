import axios from "axios";

export default {
    getArticles: function(query, start, end) {
        const authKey = "0746047fb6eb4680a118bdfa48d6cff8";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        authKey + "&q=" + query + "&begin_date=" + start + "&end_date=" + end;
        return axios.get(queryURL);
    }
    
}