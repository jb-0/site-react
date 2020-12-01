import awsRegionsImg from '../images/awsRegions.png';
import awsRegionsTableImg from '../images/awsRegionsIPTable.png';
import skillsTrackerImg from '../images/skillsTracker.png';

const portfolioContent = [
  {
    title: 'Skill Search - Full Stack',
    shortContent: `This responsive site helps job seekers track skill demand in their area. The site 
    includes authentication allowing user's to save searches relevant to them. I built the site using 
    MongoDB, Express, React, Node.js and AWS Lambda. Backend tests created using Mocha and Chai, 
    with frontend tests created using Jest and React Testing Library.`,
    content: (
      <>
        <p>
          To implement authentication I used Passport.js for Google and Facebook 
          OAuth. I used AWS Lambda and CloudWatch to create a serverless daily job that 
          runs a count for all saved searches, this provides the necessary data to present back to 
          users using Chart.js.
        </p>
        <img className="portfolio-image" src={skillsTrackerImg} />
      </>
    ),
    links: {
      site: 'https://the-skills-tracker.herokuapp.com/',
      source: 'https://github.com/jb-0/skill-search',
    },
  },
  {
    title: 'AWS Region IP Finder - Front End',
    shortContent: `Built using React this site presents user's with a map and allows them to select an
    AWS region, on selecting a region the user is presented with a comprehensive list of IPs for 
    the chosen region. This site leverages AWS's publicly available IP JSON file. Tests created 
    using Jest and React Testing Library.`,
    content: (
      <>
        <img className="portfolio-image" src={awsRegionsImg} />
        <img className="portfolio-image" src={awsRegionsTableImg} />
      </>
    ),
    links: {
      site: 'https://jb-0.github.io/aws-regions/',
      source: 'https://github.com/jb-0/aws-regions',
    },
  },
  {
    title: 'UK Property API - Full Stack',
    shortContent: `This is a Node.js project that utilises web scraping (of home.co.uk) to generate an API
      response, it also allows the API functionality to be tested on the home page as well as
      providing the user with an equivalent API call. Currently hosted on Heroku but previously
      containerised and hosted on GCP.`,
    links: {
      site: 'https://uk-property-api.herokuapp.com/',
      demo: 'https://youtu.be/LlalqkidxSo',
      source: 'https://github.com/jb-0/uk-property-api',
    },
  },
  {
    title: 'Twitter NLP - Data Science',
    shortContent: `Using NLP and unsupervised learning I was able to predict a number of key events
      in a football match using tweets. This work was performed using Python, Jupyter, Anaconda and
      packages such as: pandas, matplotlib, sklearn, nltk and wordcloud.`,
    links: {
      source: 'https://github.com/jb-0/twitter-nlp',
    },
  },
  {
    title: 'GCP Continuous Deployment - Cloud Function',
    shortContent: `To achieve continuous deployment for a static website hosted in a Google Cloud Storage
        Bucket, I developed a Cloud Function in Python. The Google Cloud Function is triggered via
        pushes to the GitHub repo (using a webhook).`,
    links: {
      source: 'https://github.com/jb-0/gcs-continuous-deployment',
    },
  },
];

export default portfolioContent;
