import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function scrapeTickleLawOffice() {
  try {
    // Add user agent to mimic a browser
    const response = await fetch('https://www.ticklelawoffice.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    const html = await response.text();
    console.log('HTML length:', html.length);
    console.log('First 500 characters of HTML:', html.substring(0, 500));

    const $ = cheerio.load(html);

    // Create an object to store the scraped data
    const scrapedData = {
      mainContent: '',
      about: '',
      practiceAreas: [],
      team: [],
      contact: {}
    };

    // Log all found sections for debugging
    console.log('\nFound sections:');
    $('section').each((i, el) => {
      console.log(`Section ${i}:`, $(el).attr('class') || 'no class');
    });

    // Log all main content areas
    console.log('\nFound main content:');
    $('main').each((i, el) => {
      console.log(`Main ${i}:`, $(el).text().trim().substring(0, 100));
    });

    // Try different selectors for practice areas
    console.log('\nLooking for practice areas...');
    ['section:contains("Practice")', 'div:contains("Practice")', '.practice-areas', '#practice-areas'].forEach(selector => {
      const elements = $(selector);
      console.log(`Selector "${selector}" found ${elements.length} elements`);
    });

    // Try different selectors for team members
    console.log('\nLooking for team members...');
    ['section:contains("Team")', 'div:contains("Team")', '.team-member', '.attorney'].forEach(selector => {
      const elements = $(selector);
      console.log(`Selector "${selector}" found ${elements.length} elements`);
    });

    // Try different selectors for contact information
    console.log('\nLooking for contact information...');
    ['section:contains("Contact")', 'div:contains("Contact")', '.contact-info', '#contact'].forEach(selector => {
      const elements = $(selector);
      console.log(`Selector "${selector}" found ${elements.length} elements`);
    });

    // Scrape main content sections
    scrapedData.mainContent = $('main').text().trim();

    // Scrape About section
    scrapedData.about = $('section:contains("About")').text().trim();

    // Scrape Practice Areas
    $('section:contains("Practice Areas") li, div:contains("Practice Areas") li').each((i, el) => {
      scrapedData.practiceAreas.push($(el).text().trim());
    });

    // Scrape Team Members
    $('section:contains("Team") .team-member, div:contains("Team") .team-member').each((i, el) => {
      const member = {
        name: $(el).find('h3, .name').text().trim(),
        position: $(el).find('.position').text().trim(),
        bio: $(el).find('.bio, p').text().trim()
      };
      if (member.name) {
        scrapedData.team.push(member);
      }
    });

    // Scrape Contact Information
    const contactSection = $('section:contains("Contact"), div:contains("Contact")');
    scrapedData.contact = {
      address: contactSection.find('address').text().trim(),
      phone: contactSection.find('phone, .phone').text().trim(),
      email: contactSection.find('email, .email').text().trim(),
      hours: contactSection.find('.hours').text().trim()
    };

    // Save the data to a JSON file
    console.log('\nScraped Data:', JSON.stringify(scrapedData, null, 2));
  } catch (error) {
    console.error('Error scraping the website:', error);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
  }
}

scrapeTickleLawOffice(); 