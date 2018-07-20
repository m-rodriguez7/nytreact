import axios from "axios";

export default {
    // the first route uses the nyt api, the rest communicate with the mongo DB
    getArticles: function(query, start, end) {
        const authKey = "0746047fb6eb4680a118bdfa48d6cff8";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        authKey + "&q=" + query + "&begin_date=" + start + "&end_date=" + end;
        return axios.get(queryURL);
    },
    
    savedArticles: () => {
        return axios.get("/articles");
    },

    saveNewArticle: (object) => {
        axios.post("/save/", object);
    },

    deleteArticle: id => {
        axios.delete("/articles/" + id);
    }
}