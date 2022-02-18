//require newsfeed model
const newsfeed = require('../models/newsfeed');
//require  mapped source functions
const mappedSource = require('../../appfunctions/mappedFunctions');
const { MaxKey } = require('mongodb');
//sleep function
const sleep = (time) => {
        setTimeout(() => {

        }, time * 1000);
    }
    //get all news
module.exports.getAllNews = async(req, res) => {

    try {
        //fetch data from db
        const data = await newsfeed.find({}, { _id: 0 })
        res.json({ "data": data })
    } catch (error) {
        res.json({ "error": error.message })
    }

}

//update server function
module.exports.updateDatabase = async() => {
    //news container array, temporary batch url store checker
    const [news, batch] = [
        [],
        []
    ];


    try {
        //fetch data from individual urls
        for (let [key, value] of Object.entries(mappedSource.newsSource)) {
            const newsSource = key.split("search")[0].slice(8, ).split('.')[0].split('/')[0]
            try {
                const response = await value(key, news);
                console.log(key, response.length)

                if (response.length != 0) {
                    for (let res of response) {
                        res.source = newsSource;
                        news.push(res)

                    }
                }
                //sleep for 1s
                sleep(1)

            } catch (error) {
                console.log("inner error:", error.message)
                if (error.message.split(' ')[1] == "ECONNRESET") {
                    continue;
                }
                sleep(2);
            }
        }
        //save articles to db
        for (let newsArticle of news) {
            try {
                const article = await newsfeed.create(newsArticle);
            } catch (error) {
                console.log(error.message)
            }

        }
    } catch (error) {
        console.log(error.message)
    }
}