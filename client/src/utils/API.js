import axios from "axios";

export default {
    getArticle: function(query, start, end) {
        let querystring = `?q=${query}`
        let startstring = `?begin_date=${start}`
        let endstring = `?end_date=${end}`
        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json/?api-key=0746047fb6eb4680a118bdfa48d6cff8${querystring}${startstring}${endstring}?page=0`
        return axios.get(url);
    }
}