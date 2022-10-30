const puppeteer = require('puppeteer')
const $ = require('jquery')
658
const readline = require('readline').createInterface({
 input: process.stdin,
 output: process.stdout,
})

readline.question('Please enter your email: ', (user) => {
 //  if (user !== 'paul.didonato@richmondtt.com') {
 //   console.log('user name is incorrect')
 //   return false
 //  }

 run()
  .then(() => console.log('Done'))
  .catch((error) => console.log(error))

 async function run() {
  const browser = await puppeteer.launch({
   headless: false,
   defaultViewport: null,
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1300, height: 1000 })
  await page.goto('https://www.n-able.com/product-login')
  await page.evaluate(() => {
   $('div .product__item').eq(0).trigger('click')
  })

  const input = await page.$('.row input')
  const submitButton = await page.$('button[type="submit"]')

  await input.type(user)

  await submitButton.click('button[type="submit"]')

  //    await pwdButton.type(pwd)

  await new Promise((resolve) => setTimeout(resolve, 5000))
 }
})
