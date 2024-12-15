This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Example with input {
  "questions": [
    {
      "id": "gender",
      "type": "choice",
      "question": "Select your gender:",
      "options": ["Male", "Female"],
      "next": {
        "Male": "relationship-status",
        "Female": "relationship-status"
      }
    },
    {
      "id": "relationship-status",
      "type": "choice",
      "question": "So we can get to know you better, tell us about your relationship status.",
      "options": ["Single", "In a relationship"],
      "next": {
        "Single": "single-parent",
        "In a relationship": "relationship-problem"
      }
    },
    {
      "id": "hear-about-us",
      "type": "choice",
      "question": "Where did you hear about us?",
      "options": [
        "Poster or Billboard",
        "Friend or Family",
        "Direct Mail or Package Insert",
        "Online TV or Streaming TV",
        "TV",
        "Radio",
        "Search Engine (Google, Bing, etc.)",
        "Newspaper or Magazine",
        "Facebook",
        "Blog Post or Website Review",
        "Podcast",
        "Influencer",
        "Youtube",
        "Pinterest",
        "Other"
      ],
      "next": null
    },
    {
      "id": "relationship-problem",
      "type": "choice",
      "question": "Are you a parent?",
      "options": ["Yes", "No"],
      "next": {
        "Yes": "who-have-children-relationship",
        "No": "who-have-children-relationship"
      }
    },
    {
      "id": "who-have-children-relationship",
      "type": "choice",
      "question": "Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
      "options": [
        "I was unhappy with how things were going in my relationship",
        "I was unhappy with parts of my relationship, but some things were working",
        "I was generally happy with my relationship",
        "I’ve never been in a relationship"
      ],
      "next": {
        "I was unhappy with how things were going in my relationship": "partner-an-introvert-or-extrovert",
        "I was unhappy with parts of my relationship, but some things were working": "partner-an-introvert-or-extrovert",
        "I was generally happy with my relationship": "partner-an-introvert-or-extrovert",
        "I’ve never been in a relationship": "partner-an-introvert-or-extrovert"
      }
    },
    {
      "id": "partner-an-introvert-or-extrovert",
      "type": "choice",
      "question": "Is your partner an introvert or extrovert?",
      "options": ["Introvert", "Extrovert", "A bit of both"],
      "next": {
        "Introvert": "partner-gender",
        "Extrovert": "partner-gender",
        "A bit of both": "partner-gender"
      }
    },
    {
      "id": "partner-gender",
      "type": "choice",
      "question": "What is your partner’s gender?",
      "options": ["Male", "Female"],
      "next": {
        "Male": "statement-below",
        "Female": "statement-below"
      }
    },
    {
      "id": "statement-below",
      "type": "choice",
      "question": "Do you agree with the statement below?",
      "options": ["Strongly agree", "Agree", "Neutral", "Disagree", "Strongly disagree"],
      "next": {
        "Strongly agree": "relationship-goals",
        "Agree": "relationship-goals",
        "Neutral": "relationship-goals",
        "Disagree": "relationship-goals",
        "Strongly disagree": "relationship-goals"
      }
    },
    {
      "id": "relationship-goals",
      "type": "choice",
      "question": "When you think about your relationship goals, you feel...?",
      "options": [
        "Optimistic! They are totally doable, with some guidance.",
        "Cautious. I’ve struggled before, but I’m hopeful.",
        "I’m feeling a little anxious, honestly."
      ],
      "next": {
        "Optimistic! They are totally doable, with some guidance.": "hear-about-us",
        "Cautious. I’ve struggled before, but I’m hopeful.": "hear-about-us",
        "I’m feeling a little anxious, honestly.": "hear-about-us"
      }
    },
    {
      "id": "single-parent",
      "type": "choice",
      "question": "Are you a single parent?",
      "options": ["Yes", "No"],
      "next": {
        "Yes": "who-have-children",
        "No": "who-have-children"
      }
    },
    {
      "id": "who-have-children",
      "type": "choice",
      "question": "{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?",
      "options": [
        "I’m very unhappy with how things are going in my relationship",
        "I’m unhappy with parts of my relationship, but some things are working well",
        "I’m generally happy in my relationship"
      ],
      "next": {
        "I’m very unhappy with how things are going in my relationship": "traits-tend-to-overthink",
        "I’m unhappy with parts of my relationship, but some things are working well": "traits-tend-to-overthink",
        "I’m generally happy in my relationship": "traits-tend-to-overthink"
      }
    },
    {
      "id": "traits-tend-to-overthink",
      "type": "choice",
      "question": "Do you tend to overthink?",
      "options": ["Yes", "No"],
      "next": {
        "Yes": "age-of-children",
        "No": "how-does-it-work"
      }
    },
    {
      "id": "age-of-children",
      "type": "input",
      "inputType": "number",
      "question": "What is the age of your youngest child?",
      "placeholder": "Enter a number",
      "next": "how-does-it-work"
    },
    {
      "id": "how-does-it-work",
      "type": "infoQuestion",
      "title": "So how does it work?",
      "description": "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
      "options": null,
      "nextOptions": ["what-is-most-important-to-you", "is-emotional-control-tricky-for-you"]
    },
    {
      "id": "what-is-most-important-to-you",
      "type": "choice",
      "question": "What is most important to you?",
      "options": ["Success", "Romance", "Stability", "Freedom"],
      "showInfo": true,
      "next": {
        "Success": "biggest-challenge",
        "Romance": "biggest-challenge",
        "Stability": "biggest-challenge",
        "Freedom": "biggest-challenge"
      }
    },
    {
      "id": "biggest-challenge",
      "type": "input",
      "inputType": "text",
      "question": "What do you think is your biggest challenge right now?",
      "placeholder": "Type your answer here...",
      "next": "hear-about-us"
    },
    {
      "id": "is-emotional-control-tricky-for-you",
      "type": "choice",
      "question": "Is emotional control tricky for you?",
      "options": ["Yes", "Sometimes", "Rarely", "Not at all"],
      "showInfo": true,
      "next": {
        "Yes": "hear-about-us",
        "Sometimes": "hear-about-us",
        "Rarely": "hear-about-us",
        "Not at all": "hear-about-us"
      }
    }
  ]
}

