const { default: axios } = require('axios');
const cheerio = require('cheerio');
const node_parse = require('node-html-parser');
const BASE_URL = 'https://en.wikipedia.org';

const extractModels = (html) => {
  const modelArray = [];
  const $ = cheerio.load(html);
  //console.log("$ : ",$)
  // $('.wikitable').map(w => {
  //     console.log("W : ",$(this).text())
  // })
  const wikiTable = $('.wikitable')
  // console.log(wikiTable.html())
  // console.log(wikiTable.text())
  const htmlData = wikiTable.text()
  splittedHtmlData = htmlData.toString().split(" ")
  console.log(splittedHtmlData)

  //   const newLocal = wikiTable.map(wiki => {
  //   console.log("wiki", $(wiki).html());

  // });
  //console.log(wikiTable.text())
  // wikiTable.map(wiki => console.log($(wiki).html()))

  // $.html();
  // $('.wikitable tr > tha:first-child').map(function () {
  //     console.log("********")
  //     const modelName = $(this).text();
  //     console.log("modelName : ",modelName)
  //     const modelUrl = $(this).attr('href');
  //     const modelUrlFull = modelUrl ? BASE_URL + modelUrl : null;
  //     modelArray.push({ modelName, modelUrlFull });
  // });

  // $('.wikitable').each(child => {
  //     console.log("********")
  //     const modelName = $(child).text();
  //     console.log("modelName : ",modelName)
  //     // const modelUrl = $(this).attr('href');
  //     // const modelUrlFull = modelUrl ? BASE_URL + modelUrl : null;
  //     // modelArray.push({ modelName, modelUrlFull });
  // });
  return modelArray;
};


axios.get('https://en.wikipedia.org/wiki/List_of_automobile_sales_by_model')
  .then(function (response) {
    //console.log(response.data);
    extractModels(response.data)
    //const root = node_parse.parse(response.data)
    //console.log(root.querySelector('.wikitable'));
    //const wikitable = root.querySelector('.wikitable')
    //console.log(wikitable.childNodes);
    //console.log(wikitable.parentNode.childNodes);
    //    wikitable.childNodes.map(textnode => {
    //        //console.log(textnode.childNodes)
    //        textnode.childNodes.map(tr => {
    //         console.log(tr)
    //        }
    //         )
    //    })
  });
