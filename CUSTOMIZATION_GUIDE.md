# Law Firm Template - Customization Guide

This template has been generalized from a specific law firm to be reusable. To customize it for your law firm:

## 1. Replace Images
- Replace `/public/images/logo-new.svg` with your law firm's logo
- Replace `/public/images/placeholder-attorney.svg` with actual attorney photos
- Update favicon references in `/public/index.html` and `/public/manifest.json`
- Replace attorney placeholder images in `/public/images/attorney-placeholder-*.svg`

## 2. Update Contact Information
- Update phone numbers in:
  - `/src/pages/Contact.tsx`
  - `/src/pages/About.tsx`
  - `/src/components/Footer.tsx`
  - `/src/data/siteContent.ts`
- Update email addresses in:
  - `/src/pages/Contact.tsx`
  - `/src/components/Footer.tsx`
  - `/src/pages/PrivacyPolicy.tsx`
  - `/src/pages/Disclaimer.tsx`
  - `/src/data/siteContent.ts`
- Update physical address in:
  - `/src/pages/Contact.tsx`
  - `/src/components/Footer.tsx`
  - `/src/pages/PrivacyPolicy.tsx`
  - `/src/pages/Disclaimer.tsx`
  - `/src/data/siteContent.ts`

## 3. Update Attorney Information
- Update attorney names, bios, and specialties in:
  - `/src/pages/attorneys/` directory (rename files as needed)
  - `/src/pages/About.tsx`
  - `/src/pages/Home.tsx`
  - `/src/data/siteContent.ts`
- Update routing in `/src/App.tsx` if you rename attorney pages

## 4. Update Firm Information
- Update firm name and description in:
  - `/src/components/Navbar.tsx`
  - `/src/components/Footer.tsx`
  - `/src/data/siteContent.ts`
  - `/public/manifest.json`
  - `/public/index.html`

## 5. Update Meta Tags and SEO
- Update title tags in all page components
- Update meta descriptions in all page components
- Update OpenGraph data if needed

## 6. Update Practice Areas
- Modify practice area content in `/src/pages/practice-areas/` directory
- Update practice area listings in `/src/pages/PracticeAreas.tsx`

## 7. Update Social Media Links
- Update social media links in:
  - `/src/pages/Contact.tsx`
  - `/src/components/Footer.tsx`
- Update Facebook, LinkedIn, etc. links throughout the site

## 8. Update Google Maps Integration
- Replace the Google Maps embed URL in `/src/pages/Contact.tsx` with your location

## 9. Update Reviews/Testimonials
- Replace placeholder reviews in `/src/pages/Home.tsx` with actual client testimonials

## 10. Update Legal Disclaimers
- Review and update `/src/pages/PrivacyPolicy.tsx`
- Review and update `/src/pages/Disclaimer.tsx`

## Current Placeholder Values
- Phone: (000) 000-0000
- Email: info@lawfirm.com
- Address: 123 Main Street, Your City, ST 12345
- Attorney Names: Attorney Name 1, Attorney Name 2, Attorney Name 3
- Firm Name: Law Firm Template
