const cheerio = require('cheerio');
const axios = require('axios');
const { contains } = require('cheerio/lib/static');

//key words, tokens and coins to look out for while scrapping each url
const searchWord =
    'a:contains("Web3"),a:contains("Cryptocurrency"),a:contains("Metaverse"),a:contains("metaverse"),a:contains("memecoin"),a:contains("Blockchains"),a:contains("blockchains"),a:contains("crypto"),a:contains("NFTs"),a:contains("Ethereum"),a:contains("ethereum"),a:contains("Bitcoin") ,a:contains("Crypto")'

// request function
const makeRequest = async(url) => {
    const result = await axios({
        method: 'get',
        url: url
    });
    const data = result.data;
    const $ = cheerio.load(data, { ignoreWhitespace: true })

    return $;
};
//crypto news function
module.exports.cryptoNews = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());

        const articleDate = $(this).prev().find(".article__badge-date").attr("data-utctime") ? $(this).prev().find(".article__badge-date").attr("data-utctime") : $(this).next().attr("data-utctime");
        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};

//expressUk news function
module.exports.expressUk = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());

        const articleDate = $(this).prev().find(".article__badge-date").attr("data-utctime") ? $(this).prev().find(".article__badge-date").attr("data-utctime") : $(this).next().attr("data-utctime");
        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};

//economicTimes news function
module.exports.economicTimes = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());

        const articleDate = $(this).prev().find(".article__badge-date").attr("data-utctime") ? $(this).prev().find(".article__badge-date").attr("data-utctime") : $(this).next().attr("data-utctime");
        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//theSun news function
module.exports.theSun = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());
        const articleDate = $(this).prev().find(".article__badge-date").attr("data-utctime") ? $(this).prev().find(".article__badge-date").attr("data-utctime") : $(this).next().attr("data-utctime");
        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//financeMagnates news function
module.exports.financeMagnates = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());

        const articleDate = $(this).parent().siblings('time').text() ? $(this).parent().siblings('time').text().trim() : '';
        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//thetimes news function
module.exports.thetimes = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = []
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());

        const articleDate = $(this).parent().siblings('time').text() ? $(this).parent().siblings('time').text().trim() : '';
        tempArr.push({ title: articleTitle, url: url.split("search")[0].slice(0, url.split("search")[0].length - 1) + articleUrl, releaseDate: articleDate, aritcleSource: url.split("search")[0].slice(8, ) })

    });
    return tempArr;
};
//jamaicaobserver news function
module.exports.jamaicaobserver = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());

        const articleDate = $(this).parent().siblings('time').text() ? $(this).parent().siblings('time').text().trim() : '';
        tempArr.push({ title: articleTitle, url: url.split("search")[0].slice(0, url.split("search")[0].length - 1) + articleUrl, releaseDate: articleDate, aritcleSource: url.split("search")[0].slice(8, ) })

    });
    return tempArr;
};
//gulftoday news function
module.exports.gulftoday = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = []
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());

        const articleDate = articleTitle.split(" ").slice(articleTitle.split(" ").length - 3, ).join(" ")

        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//ksusentinel news function
module.exports.ksusentinel = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());

        const articleDate = $(this).parent().next('span').children('a').children('time').attr('datetime') ? $(this).parent().next('span').children('a').children('time').attr('datetime') : '';
        console.log(articleDate)
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//investing news function
module.exports.investing = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : String($(this).text()).trim());
        const articleDate = $(this).parent().siblings('time').text() ? $(this).parent().siblings('time').text().trim() : '';
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//investopedia news function
module.exports.investopedia = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text().split(">")[1]).trim();
        const articleDate = $(this).parent().siblings('time').text() ? $(this).parent().siblings('time').text().trim() : '';
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//morningstar news function
module.exports.morningstar = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings('time').text() ? $(this).parent().siblings('time').text().trim() : '';
        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//stockhead news function
module.exports.stockhead = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next('p').find('time').attr('datetime') ? $(this).parent().next('p').find('time').attr('datetime') : '';
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//cityam news function
module.exports.cityam = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next('p').find('time').attr('datetime') ? $(this).parent().next('p').find('time').attr('datetime') : '';
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//bloombergquint news function
module.exports.bloombergquint = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next('p').find('time').attr('datetime') ? $(this).parent().next('p').find('time').attr('datetime') : '';
        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//cointelegraph news function
module.exports.cointelegraph = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next('p').find('time').attr('datetime') ? $(this).parent().next('p').find('time').attr('datetime') : '';
        tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//equitybulls news function
module.exports.equitybulls = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next('p').find('time').attr('datetime') ? $(this).parent().next('p').find('time').attr('datetime') : '';
        tempArr.push({ title: articleTitle, url: url + "/" + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//outlookindia news function
module.exports.outlookindia = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next('p').find('time').attr('datetime') ? $(this).parent().next('p').find('time').attr('datetime') : '';
        tempArr.push({ title: articleTitle, url: url + "/" + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//coindesk news function
module.exports.coindesk = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next('div').children().find("span").text() ? $(this).parent().next('div').children().find("span").text() : $(this).parent().next('span').text();
        tempArr.push({ title: articleTitle, url: url + "/" + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ) })

    });
    return tempArr;
};
//digitaljournal news function
module.exports.digitaljournal = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next('div').children().find("span").text() ? $(this).parent().next('div').children().find("span").text() : $(this).parent().next('span').text();
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })

    });
    return tempArr;
};
//cyprusMail news function
module.exports.cyprusMail = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings(".penci-schema-markup").find(".updated").attr("datetime") ? $(this).parent().siblings(".penci-schema-markup").find(".updated").attr("datetime") : "";
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })

    });
    return tempArr;
};
//menafn news function
module.exports.menafn = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings(".penci-schema-markup").find(".updated").attr("datetime") ? $(this).parent().siblings(".penci-schema-markup").find(".updated").attr("datetime") : "";
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })

    });
    return tempArr;
};
//sartuptipsdaily news function
module.exports.startuptipsdaily = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings(".post-meta").find(".updated").text() ? $(this).parent().siblings(".post-meta").find(".updated").text() : "";
        tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })

    });
    return tempArr;
};
//fxempire news function
module.exports.fxempire = async(url, arr) => {
    const $ = await makeRequest(url);

    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings(".Card-sc-1ib64vn-0").children().find("time").text() ? $(this).parent().siblings(".Card-sc-1ib64vn-0").children().find("time").attr('datetime') : "";
        if (articleTitle.split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: url.slice(0, url.length - 7) + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;
};
//govinfosecurity news function
module.exports.govinfosecurity = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings("p").find('span').text() ? $(this).parent().siblings("p").find('span').text() : "";
        if (articleTitle.split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//thisismoney news function
module.exports.thisismoney = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings("p").find('span').text() ? $(this).parent().siblings("p").find('span').text() : "";
        if (articleTitle.split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//investmentu news function
module.exports.investmentu = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings("p").find('span').text() ? $(this).parent().siblings("p").find('span').text() : "";
        if (articleTitle.trim().split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//nairametrics news function
module.exports.nairametrics = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().siblings().text() ? $(this).parent().siblings().text() : "";
        if (articleTitle.trim().split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//benzinga news function
module.exports.benzinga = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this) ? null : "";
        if (articleTitle.trim().split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//nasdaq news function
module.exports.nasdaq = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).siblings().html() ? $(this).siblings().html() : "";
        if (articleTitle.trim().split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: url.split('market-activity')[0].slice(0, url.split('market-activity')[0].length - 1) + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//forbes news function
module.exports.forbes = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().prev().html() ? $(this).parent().prev().html() : "";
        if (articleTitle.trim().split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//cnbc news function
module.exports.cnbc = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).prev().html() ? $(this).prev().text() : "";
        if (articleTitle.trim().split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//moneycontrol news function
module.exports.moneycontrol = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).prev().html() ? $(this).prev().text() : "";
        if (articleTitle.trim().split(" ").length > 2) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//leadership news function
module.exports.leadership = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).parent('h3').text();
        const articleDate = $(this).parent().next().text() ? $(this).parent().next().text() : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//politico news function
module.exports.politico = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next().text() ? $(this).parent().next().text() : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//fxmag news function
module.exports.fxmag = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];

    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).children().find('div:nth-child(2)').html() ? String($(this).children().find('div:nth-child(2)').text().trim().split(" ")[$(this).children().find('div:nth-child(2)').text().trim().split(" ").length - 2]).replaceAll(".", "-") + " T" +
            $(this).children().find('div:nth-child(2)').text().trim().split(" ")[$(this).children().find('div:nth-child(2)').text().trim().split(" ").length - 1] : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//coinjournal news function
module.exports.coinjournal = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).siblings("div").find("time").attr("datetime") ? $(this).siblings('div').find("time").attr("datetime") : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//investorplace news function
module.exports.investorplace = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().prev().attr("datetime") ? $(this).parent().prev().attr("datetime") : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//livemint news function
module.exports.livemint = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = String($(this).parent().next().children().find('span:eq(1)')) ? String($(this).parent().next().children().find('span:eq(1)').attr('data-updatedtime')) : '';
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }

    });
    return tempArr;

};
//venturebeat news function
module.exports.venturebeat = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next().children().find('time').attr("datetime") ? $(this).parent().next().children().find('time').attr("datetime") : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//gizmodo news function
module.exports.gizmodo = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next().children().find('time').attr("datetime") ? $(this).parent().next().children().find('time').attr("datetime") : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//ibtimes news function
module.exports.ibtimes = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next().children().find('time').attr("datetime") ? $(this).parent().next().children().find('time').attr("datetime") : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//albawaba news function
module.exports.albawaba = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = $(this).text();
        const articleDate = $(this).parent().next().children().find('time').attr("datetime") ? $(this).parent().next().children().find('time').attr("datetime") : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//inc42 news function
module.exports.inc42 = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = (String($(this).text()).trim().startsWith('<i') ? "" : $(this).text());
        const articleDate = $(this).parent().next().children().html() ? $(this).parent().next().children().find('.date').text() : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//marketwatch news function
module.exports.marketwatch = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = (String($(this).text()).trim().startsWith('<i') ? "" : $(this).text());
        const articleDate = $(this).parent().next().children().html() ? $(this).parent().next().children().find('.date').text() : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//etfdailynews news function
module.exports.etfdailynews = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = (String($(this).text()).trim().startsWith('<i') ? "" : $(this).text());
        const articleDate = $(this).parent().next().children().html() ? $(this).parent().next().children().find('time').text() : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//independent news function
module.exports.independent = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = (String($(this).text()).trim().startsWith('<i') ? "" : $(this).text());
        const articleDate = $(this).parent().next().children().html() ? $(this).parent().next().children().find('time').text() : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("/")[0] })
        }


    });
    return tempArr;

};
//mybroadband news function
module.exports.mybroadband = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = (String($(this).text()).trim().startsWith('<i') ? "" : $(this).text());
        const articleDate = $(this).parent().next().html() ? String($(this).parent().next().html()).trim().split('>')[String($(this).parent().next().html()).trim().split('>').length - 1] : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//gulfnews news function
module.exports.gulfnews = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = (String($(this).text()).trim().startsWith('<i') ? "" : $(this).text());
        const articleDate = $(this).parent().next().html() ? String($(this).parent().next().html()).trim().split('>')[String($(this).parent().next().html()).trim().split('>').length - 1] : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//euronews news function
module.exports.euronews = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = (String($(this).text()).trim().startsWith('<i') ? "" : $(this).text());
        const articleDate = $(this).parent().next().html() ? String($(this).parent().next().html()).trim().split('>')[String($(this).parent().next().html()).trim().split('>').length - 1] : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//channelnewsasia news function
module.exports.channelnewsasia = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).trim().startsWith('<i') ? "" : $(this).text();
        const articleDate = $(this).parent().next().html() ? String($(this).parent().next().find("span").text()).trim().split(' ')[0] : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//finder news function
module.exports.finder = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).trim().startsWith('<i') ? "" : $(this).text();
        const articleDate = $(this).parent().parent().next().html() ? articleUrl.split('update-')[articleUrl.split('update-').length - 1] : "";
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//vulcanpost news function
module.exports.vulcanpost = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];

    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).trim().startsWith('<i') ? "" : $(this).text();
        const articleDate = $(this).parent().parent().parent().prev().find('.elementor-post-info__item--type-date').html() ? $(this).parent().parent().parent().prev().find('.elementor-post-info__item--type-date').html() : $(this).parent().parent().parent().siblings('.elementor-widget-post-info').find('.elementor-post-info__item--type-date').html();
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//wsj news function
module.exports.wsj = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : $(this).text();
        const articleDate = '';
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//timesofindia news function
module.exports.timesofindia = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : $(this).text();
        const articleDate = '';
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//nypost news function
module.exports.nypost = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : $(this).text();
        const articleDate = '';
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//reuters news function
module.exports.reuters = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : $(this).text();
        const articleDate = $(this).next().attr('datetime');
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//businesswire news function
module.exports.businesswire = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : $(this).text();
        const articleDate = $(this).attr('datettime') ? $(this).attr('datettime') : '';
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//smh news function
module.exports.smh = async(url, arr) => {
    const tempArr = [];
    const $ = await makeRequest(url);
    $(searchWord).each(function() {
        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : $(this).text();
        const articleDate = $(this).attr('datetime') ? $(this).attr('datetime') : '';
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("?")[0].replace("/", "") })
        }


    });
    return tempArr;

};
//cnn news function
module.exports.cnn = async(url, arr) => {
    const $ = await makeRequest(url);
    const tempArr = [];
    $(searchWord).each(function() {

        const articleUrl = $(this).attr("href");
        const articleTitle = String($(this).text()).endsWith('min read') ? String($(this).text()).trim().slice(0, String($(this).text()).length - 10) : (String($(this).text()).trim().startsWith('<i') ? "" : $(this).text());
        const articleDate = $(this).attr('datetime') ? $(this).attr('datetime') : '';
        if (articleTitle.trim().split(" ").length > 2 && (articleTitle != "undefined" || articleTitle != null)) {
            tempArr.push({ title: articleTitle, url: url + articleUrl, releaseDate: articleDate, aritcleSource: url.slice(8, ).split("/")[0] })
        }


    });
    return tempArr;

};