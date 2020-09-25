const portfolioContent = [
  {
    title: "UK Property API",
    content: `This is a Node.js project that utilises web scraping (of home.co.uk) to generate an API 
      response, it also allows the API functionality to be tested on the home page as well as 
      providing the user with an equivalent API call.`,
    links: {
      Site: "https://uk-property-api.herokuapp.com/",
      Demo: "https://youtu.be/LlalqkidxSo",
      Source: "https://github.com/jb-0/uk-property-api",
    },
  },
  {
    title: "Books",
    content: `Using Node.js, HTML and CSS I built a site that interacts with the nytimes books api 
        and allows users to select a genre and view charting books in the selected genre.`,
    links: {
      Site: "https://bookcharts.herokuapp.com/",
      Source: "https://github.com/jb-0/books",
    },
  },
  {
    title: "Continuous Deployment Cloud Function",
    content: `To achieve continuous deployment for a static website hosted in a Google Cloud Storage 
        Bucket, I developed a Cloud Function in Python. The Google Cloud Function is triggered via 
        pushes to the GitHub repo (using a webhook).`,
    links: {
      Source: "https://github.com/jb-0/gcs-continuous-deployment",
    },
  },
];

export default portfolioContent;
