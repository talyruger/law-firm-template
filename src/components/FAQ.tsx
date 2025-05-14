import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Container,
  TextField,
  InputAdornment,
  styled
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

// Create styled components with fixed styles to prevent animation issues
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  '&:before': {
    display: 'none',
  },
  // Prevent any hover animations
  '& .MuiAccordionSummary-root': {
    backgroundColor: theme.palette.background.paper,
    minHeight: '64px',
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    }
  },
  '& .MuiAccordionDetails-root': {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2)
  }
}));

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What areas of law does Tickle Law Office practice?",
    answer: "Tickle Law Office specializes in several key practice areas to serve our community in Louisburg and surrounding areas. Our primary focus includes Family Law (divorce, child custody, and support), Criminal Defense (traffic violations, misdemeanors, and felonies), Estate Planning (wills, trusts, and probate), and Personal Injury cases. We also handle Real Estate matters and provide general legal counsel. Our experienced attorneys are dedicated to providing comprehensive legal solutions tailored to your specific needs.",
    category: "General"
  },
  {
    question: "How do I schedule a consultation?",
    answer: "Scheduling a consultation is easy and convenient. You can reach us by phone at (919) 496-1201 for calls or (919) 229-9265 for texting during our business hours (Monday-Friday, 9 AM - 5 PM), or you can fill out the contact form on our website. We offer both in-person and virtual consultations to accommodate your schedule. During your initial consultation, we'll discuss your legal matter in detail, explain your options, and provide a clear understanding of how we can help. There's no obligation, and all consultations are confidential.",
    category: "General"
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "To make the most of your first consultation, please bring any relevant documents related to your case. This may include court documents, contracts, police reports, medical records (for personal injury cases), financial statements (for family law matters), or any other paperwork that relates to your legal situation. If you're unsure what to bring, don't worry - just bring what you have, and we'll guide you through the process. It's also helpful to prepare a list of questions you'd like to ask during the consultation.",
    category: "General"
  },
  {
    question: "How are legal fees structured?",
    answer: "Our fee structure is transparent and tailored to the type of legal service you need. We offer several payment arrangements: hourly rates for ongoing legal work, flat fees for specific services (like estate planning or uncontested divorces), and contingency fees for personal injury cases (where we only get paid if we win your case). During your initial consultation, we'll provide a clear explanation of our fees and payment options. We also offer payment plans for certain services to make legal representation more accessible. All fee agreements are put in writing before we begin work on your case.",
    category: "General"
  },
  {
    question: "Do you handle cases outside of Franklin County?",
    answer: "Yes, we handle cases throughout North Carolina, though our primary service area is Franklin County and surrounding regions. Our attorneys are licensed to practice in all North Carolina state courts. We regularly represent clients in Wake, Nash, Vance, and other neighboring counties. For cases outside our immediate area, we may charge additional travel fees, which will be clearly explained during your initial consultation. We're committed to providing the same high-quality legal representation regardless of where your case is heard.",
    category: "General"
  },
  {
    question: "What makes Tickle Law Office different from other law firms?",
    answer: "Tickle Law Office stands out through our commitment to personalized service, local expertise, and family values. With over 20 years of experience in Franklin County, we have deep roots in the community and understand the local legal landscape. Our attorneys combine traditional legal expertise with modern technology to provide efficient, effective representation. We pride ourselves on being accessible to our clients, providing regular updates, and maintaining clear communication throughout your case. Our firm is also known for its compassionate approach to sensitive legal matters, particularly in family law and criminal defense cases.",
    category: "General"
  },
  {
    question: "How long does it typically take to resolve a case?",
    answer: "The timeline for resolving a case varies significantly depending on the type of legal matter and its complexity. Simple matters like traffic tickets or basic estate planning can be resolved in a few weeks. More complex cases like contested divorces or criminal trials may take several months to a year or more. During your initial consultation, we'll provide a realistic timeline based on your specific situation. We're committed to resolving your case as efficiently as possible while ensuring the best possible outcome. We'll keep you informed of progress and any changes to the expected timeline throughout the process.",
    category: "General"
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we understand that legal services can be a significant investment, and we offer flexible payment options to make our services more accessible. We provide payment plans for many of our services, with terms that can be customized to your financial situation. For personal injury cases, we work on a contingency fee basis, meaning you don't pay unless we win your case. For other matters, we can discuss various payment arrangements during your initial consultation. We're committed to finding a payment solution that works for you while ensuring you receive the legal representation you need.",
    category: "General"
  },
  {
    question: "What is the difference between District Court and Superior Court in North Carolina?",
    answer: "In North Carolina, District Court typically handles misdemeanors, traffic offenses, juvenile matters, family law cases, and civil cases involving claims less than $25,000. Trials in District Court are presided over by a judge with no jury. Superior Court handles felony criminal cases, civil cases with claims over $25,000, and appeals from District Court. Superior Court trials are typically decided by a jury. Each court has different procedures and rules, which is why having experienced legal representation familiar with both court systems is important.",
    category: "Court Process"
  },
  {
    question: "What happens if I receive a subpoena in North Carolina?",
    answer: "A subpoena is a legal document that requires you to appear in court to testify or provide documents. In North Carolina, if you receive a subpoena, you are legally obligated to comply unless the subpoena is formally challenged or quashed by the court. Ignoring a subpoena can result in being held in contempt of court, which may lead to fines or even jail time. If you've received a subpoena and have concerns or questions about it, you should consult with an attorney immediately to understand your obligations and options.",
    category: "Court Process"
  },
  {
    question: "How does bail and bond work in North Carolina?",
    answer: "In North Carolina, after an arrest, the court sets a bail amount based on factors like the severity of the charge, flight risk, and community safety. You have several options to post bail: cash bail (paying the full amount to the court), surety bond (using a bail bondsman who charges a non-refundable fee, typically 10-15% of the bail amount), property bond (using real estate as collateral), or release on your own recognizance (no payment required). If you attend all court appearances, the bail is returned at case conclusion (minus fees if you used a bondsman).",
    category: "Criminal Defense"
  },
  {
    question: "What is the process for expungement in North Carolina?",
    answer: "Expungement in North Carolina is the legal process of clearing a criminal charge or conviction from your record. Eligibility depends on factors like the type of offense, time passed since completion of your sentence, and your criminal history. North Carolina law has expanded eligibility in recent years, especially for first-time nonviolent offenders and certain youthful offenders. The process typically involves filing a petition with the court, getting certified records, having a background check conducted, and attending a hearing. Our attorneys can help determine your eligibility and guide you through this complex process.",
    category: "Criminal Defense"
  },
  {
    question: "How does child custody determination work in North Carolina?",
    answer: "In North Carolina, child custody decisions are based on the 'best interests of the child' standard. Courts consider factors such as each parent's ability to provide care, the child's relationship with each parent, the child's home environment, and sometimes the child's preferences (depending on age and maturity). North Carolina recognizes both legal custody (decision-making authority) and physical custody (where the child lives). Custody arrangements can range from sole custody to various joint custody arrangements. Courts encourage parents to develop their own parenting plans, but will impose arrangements if parents cannot agree.",
    category: "Family Law"
  },
  {
    question: "What are North Carolina's requirements for divorce?",
    answer: "North Carolina requires a one-year separation period before filing for divorce. During this time, spouses must live separately with the intention that the separation is permanent. Either spouse must also have been a resident of North Carolina for at least six months before filing. North Carolina primarily offers 'no-fault' divorce, meaning you don't need to prove wrongdoing by your spouse. Issues such as property division, child support, and alimony are typically handled separately from the divorce itself through claims for equitable distribution and other support mechanisms.",
    category: "Family Law"
  },
  {
    question: "What estate planning documents do I need in North Carolina?",
    answer: "A comprehensive estate plan in North Carolina typically includes several key documents: a will (directing how assets should be distributed), powers of attorney (for financial and healthcare decisions if you're incapacitated), a healthcare directive or living will (specifying medical treatment preferences), and potentially trusts (for asset management and tax planning). North Carolina has specific requirements for each document to be legally valid. For example, wills generally require two witnesses and notarization for self-proving purposes. The exact documents needed vary based on your personal circumstances, family situation, and financial assets.",
    category: "Estate Planning"
  },
  {
    question: "How is property divided in a North Carolina divorce?",
    answer: "North Carolina follows the 'equitable distribution' approach to dividing marital property in divorce. This doesn't necessarily mean a 50/50 split, but rather a division that's fair based on various factors. Only marital property (assets acquired during the marriage) is subject to division; separate property (owned before marriage or received individually as gifts or inheritance) typically remains with the original owner. The court considers factors such as the duration of the marriage, each spouse's income and property, and contributions to the marriage including homemaking. Debts acquired during marriage are also divided equitably.",
    category: "Family Law"
  }
];

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredFAQs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ py: 6, bgcolor: 'sectionBackground.light' }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          
          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search questions or answers..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: 'white',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme => theme.palette.primary.main,
                  },
                },
              }}
            />
          </Box>
          
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {filteredFAQs.length === 0 ? (
              <Typography variant="body1" align="center" sx={{ py: 4 }}>
                No FAQs found matching your search. Please try different keywords.
              </Typography>
            ) : (
              filteredFAQs.map((item, index) => (
                <StyledAccordion key={index}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 500 }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.answer}
                    </Typography>
                    {item.category && (
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          display: 'inline-block',
                          mt: 2,
                          color: 'text.secondary',
                          bgcolor: 'rgba(0, 0, 0, 0.05)',
                          opacity: 0.9,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          fontWeight: 'medium'
                        }}
                      >
                        {item.category}
                      </Typography>
                    )}
                  </AccordionDetails>
                </StyledAccordion>
              ))
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FAQ; 