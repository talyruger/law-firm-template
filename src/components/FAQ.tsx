import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What areas of law does Tickle Law Office practice?",
    answer: "Tickle Law Office specializes in several key practice areas to serve our community in Louisburg and surrounding areas. Our primary focus includes Family Law (divorce, child custody, and support), Criminal Defense (traffic violations, misdemeanors, and felonies), Estate Planning (wills, trusts, and probate), and Personal Injury cases. We also handle Real Estate matters and provide general legal counsel. Our experienced attorneys are dedicated to providing comprehensive legal solutions tailored to your specific needs."
  },
  {
    question: "How do I schedule a consultation?",
    answer: "Scheduling a consultation is easy and convenient. You can reach us by phone at (919) 729-5002 during our business hours (Monday-Friday, 9 AM - 5 PM), or you can fill out the contact form on our website. We offer both in-person and virtual consultations to accommodate your schedule. During your initial consultation, we'll discuss your legal matter in detail, explain your options, and provide a clear understanding of how we can help. There's no obligation, and all consultations are confidential."
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "To make the most of your first consultation, please bring any relevant documents related to your case. This may include court documents, contracts, police reports, medical records (for personal injury cases), financial statements (for family law matters), or any other paperwork that relates to your legal situation. If you're unsure what to bring, don't worry - just bring what you have, and we'll guide you through the process. It's also helpful to prepare a list of questions you'd like to ask during the consultation."
  },
  {
    question: "How are legal fees structured?",
    answer: "Our fee structure is transparent and tailored to the type of legal service you need. We offer several payment arrangements: hourly rates for ongoing legal work, flat fees for specific services (like estate planning or uncontested divorces), and contingency fees for personal injury cases (where we only get paid if we win your case). During your initial consultation, we'll provide a clear explanation of our fees and payment options. We also offer payment plans for certain services to make legal representation more accessible. All fee agreements are put in writing before we begin work on your case."
  },
  {
    question: "Do you handle cases outside of Franklin County?",
    answer: "Yes, we handle cases throughout North Carolina, though our primary service area is Franklin County and surrounding regions. Our attorneys are licensed to practice in all North Carolina state courts. We regularly represent clients in Wake, Nash, Vance, and other neighboring counties. For cases outside our immediate area, we may charge additional travel fees, which will be clearly explained during your initial consultation. We're committed to providing the same high-quality legal representation regardless of where your case is heard."
  },
  {
    question: "What makes Tickle Law Office different from other law firms?",
    answer: "Tickle Law Office stands out through our commitment to personalized service, local expertise, and family values. With over 20 years of experience in Franklin County, we have deep roots in the community and understand the local legal landscape. Our attorneys combine traditional legal expertise with modern technology to provide efficient, effective representation. We pride ourselves on being accessible to our clients, providing regular updates, and maintaining clear communication throughout your case. Our firm is also known for its compassionate approach to sensitive legal matters, particularly in family law and criminal defense cases."
  },
  {
    question: "How long does it typically take to resolve a case?",
    answer: "The timeline for resolving a case varies significantly depending on the type of legal matter and its complexity. Simple matters like traffic tickets or basic estate planning can be resolved in a few weeks. More complex cases like contested divorces or criminal trials may take several months to a year or more. During your initial consultation, we'll provide a realistic timeline based on your specific situation. We're committed to resolving your case as efficiently as possible while ensuring the best possible outcome. We'll keep you informed of progress and any changes to the expected timeline throughout the process."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we understand that legal services can be a significant investment, and we offer flexible payment options to make our services more accessible. We provide payment plans for many of our services, with terms that can be customized to your financial situation. For personal injury cases, we work on a contingency fee basis, meaning you don't pay unless we win your case. For other matters, we can discuss various payment arrangements during your initial consultation. We're committed to finding a payment solution that works for you while ensuring you receive the legal representation you need."
  }
];

const FAQ: React.FC = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'sectionBackground.light' }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <Typography variant="h6" component="h2" sx={{ fontWeight: 500 }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FAQ; 