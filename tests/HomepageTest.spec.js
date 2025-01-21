const {test, expect} = require('@playwright/test');

 test('Home Page', async ({page})=>{
    await page.goto ('https://www.demoblaze.com');

    const pageTitle = await page.title();
    console.log('Page Title is: ', pageTitle);

    await expect(page).toHaveTitle('HiAnime Free Anime Streaming Homepage');

    const pageURL = await page.url();
    console.log('Page Title is: ', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com');

    await page.close();
 })