import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'How do I order?',
    answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed."
  },
  {
    id: 2,
    question: 'How can I make the payment?',
    answer: 'We accept various payment methods including credit/debit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway.'
  },
  {
    id: 3,
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee for all our services. If you are not satisfied with our service, please contact our customer support team for assistance with the refund process.'
  },
  {
    id: 4,
    question: 'How can I contact customer support?',
    answer: 'Our customer support team is available 24/7 through multiple channels. You can reach us via email at support@Tick.AI.com, through our live chat feature, or by calling our toll-free number.'
  },
  {
    id: 5,
    question: 'Do you offer bulk discounts?',
    answer: 'Yes, we offer special pricing for bulk orders and enterprise customers. Please contact our sales team to discuss your requirements and get a customized quote.'
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgColor: '#F8F9FA', py: 5 }}>        
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 1, fontWeight: 'bold' }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do
        </Typography>

        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          {faqData.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === `panel${faq.id}`}
              onChange={handleChange(`panel${faq.id}`)}
              sx={{
                mb: 2,
                '&:before': {
                  display: 'none',
                },
                boxShadow: 'none',
                bgcolor: '#fff',
                '&:not(:last-child)': {
                  borderBottom: '1px solid #E0E0E0'
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    my: 1.5
                  },
                  '& .MuiAccordionSummary-expandIconWrapper': {
                    color: '#9E9E9E'
                  }
                }}
              >
                <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 500, color: '#2B3445' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pb: 3 }}>
                <Typography color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
    </Box>
  );
};

export default FAQ;