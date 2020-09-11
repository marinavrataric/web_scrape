const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs');

const detailsUrl = 'https://www.caparol.de/produkte/farben/fassadenfarben/siliconharzfarben/silicopro'
const mineralsUrl = 'https://www.caparol.de/produkte/farben'
const profitecUrl = 'https://www.profitec.de/produkte/farben/'

request(mineralsUrl, (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html)
/* 
        // when using detailsUrl
        const productContent = $('.productContent')
        console.log('Content:', productContent.text())

        const productTitle = productContent.find('h1').text()
        console.log('Title:', productTitle)

        const productImage = productContent.find('.product-image').text()
        console.log('Image:', productImage) 
 */
        // when using profitecUrl
/*      
        const productArray = $('#c1047')
        console.log(productArray.text()) 
*/
        // when using mineralsUrl
        const mineralArray = $('.container-fluid').find('.category-items')
        mineralArray.prevObject.each((i, el) => console.log(i, el) )       
    }
})