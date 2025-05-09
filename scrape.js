const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function scrapeTickleLawOffice() {
  try {
    const response = await fetch('https://www.ticklelawoffice.com/');
    const html = await response.text();
    const $ = cheerio.load(html);

    // Scrape main content sections
    const mainContent = $('main').text().trim();
    const aboutSection = $('section:contains("About")').text().trim();
    const practiceAreasSection = $('section:contains("Practice Areas")').text().trim();
    const teamSection = $('section:contains("Team")').text().trim();
    const contactSection = $('section:contains("Contact")').text().trim();

    console.log('Main Content:', mainContent);
    console.log('About Section:', aboutSection);
    console.log('Practice Areas Section:', practiceAreasSection);
    console.log('Team Section:', teamSection);
    console.log('Contact Section:', contactSection);
  } catch (error) {
    console.error('Error scraping the website:', error);
  }
}

scrapeTickleLawOffice(); 