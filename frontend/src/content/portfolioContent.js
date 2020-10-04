const portfolioContent = [
  {
    title: "This Site",
    content: `This site is my portfolio and blog, I built it using MongoDB, Express, Node.js and
      React. The site includes authentication allowing me to create and edit blog posts.`,
    links: {
      site: "http://www.jamiebarrett.co.uk/",
      source: "https://github.com/jb-0/site-react",
    },
  },
  {
    title: "UK Property API",
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
    title: "Data Science: Twitter NLP",
    content: `Using NLP and unsupervised learning I was able to predict a number of key events 
      in a football match using tweets. This work was performed using Python and packages included: 
      pandas, matplotlib, sklearn, nltk and wordcloud.`,
    links: {
      source: "https://github.com/jb-0/twitter-nlp",
    },
  },
  {
    title: "Books",
    content: `Using Node.js, HTML and CSS I built a site that interacts with the nytimes books api 
        and allows users to select a genre and view charting books in the selected genre.`,
    links: {
      site: "https://bookcharts.herokuapp.com/",
      source: "https://github.com/jb-0/books",
    },
  },
  {
    title: "Continuous Deployment Cloud Function",
    content: `To achieve continuous deployment for a static website hosted in a Google Cloud Storage 
        Bucket, I developed a Cloud Function in Python. The Google Cloud Function is triggered via 
        pushes to the GitHub repo (using a webhook).`,
    links: {
      source: "https://github.com/jb-0/gcs-continuous-deployment",
    },
  },
];

export default portfolioContent;
