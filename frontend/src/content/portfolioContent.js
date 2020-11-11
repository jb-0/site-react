const portfolioContent = [
  {
    title: "Skill Search - Full Stack",
    content: `This site helps job seekers track skill demand in their area. The site includes Passport 
    authentication via Google and Facebook allowing user's to save searches relevant to them. It was 
    built using MongoDB, Express, React and Node.js. Backend tests created using Mocha and Chai, 
    with frontend tests created using Jest and React Testing Library.`,
    links: {
      site: "https://the-skills-tracker.herokuapp.com/",
      source: "https://github.com/jb-0/skill-search",
    },
  },
  {
    title: "This Site - Full Stack",
    content: `This site is my portfolio and blog, I built it using MongoDB, Express, React and
    Node.js. Tests created using Mocha and Chai. The site includes authentication allowing me to
    create and edit blog posts. I've also implemented rate limiting to prevent undesired activity.`,
    links: {
      site: "http://www.jamiebarrett.co.uk/",
      source: "https://github.com/jb-0/site-react",
    },
  },
  {
    title: "UK Property API - Full Stack",
    content: `This is a Node.js project that utilises web scraping (of home.co.uk) to generate an API
      response, it also allows the API functionality to be tested on the home page as well as
      providing the user with an equivalent API call. Currently hosted on Heroku but previously
      containerised and hosted on GCP.`,
    links: {
      site: "https://uk-property-api.herokuapp.com/",
      demo: "https://youtu.be/LlalqkidxSo",
      source: "https://github.com/jb-0/uk-property-api",
    },
  },
  {
    title: "Twitter NLP - Data Science",
    content: `Using NLP and unsupervised learning I was able to predict a number of key events
      in a football match using tweets. This work was performed using Python, Jupyter, Anaconda and
      packages such as: pandas, matplotlib, sklearn, nltk and wordcloud.`,
    links: {
      source: "https://github.com/jb-0/twitter-nlp",
    },
  },
  {
    title: "Continuous Deployment - Cloud Function",
    content: `To achieve continuous deployment for a static website hosted in a Google Cloud Storage
        Bucket, I developed a Cloud Function in Python. The Google Cloud Function is triggered via
        pushes to the GitHub repo (using a webhook).`,
    links: {
      source: "https://github.com/jb-0/gcs-continuous-deployment",
    },
  },
];

export default portfolioContent;
