import {
  FaPython,
  FaGoogleDrive,
  FaAws,
  FaCloudflare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaSass,
} from "react-icons/fa";
import { BsTwitch, BsReddit, BsYoutube, BsSpotify } from "react-icons/bs";
import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiHeroku,
  SiTwilio,
  SiVercel,
  SiGit,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const radiofetcher = {
  title: "radiofetcher",
  description:
    "A Python bot that automatically uploads songs played on a radio station. It uses bs4 to web scrape song data, then uploads the songs using Spotify API, records the data using Google Drive API, and runs in a GCP VM instance. Later, the project was upgraded to use MongoDB as its database instead of Google Drive and the script is now hosted using AWS Lambda functions + AWS EventBridge (CloudWatch Events)",
  features: [
    "running since 2020",
    "WiLD 94.9",
    "95.3 KUIC",
    "Alice @ 97.3",
    "1,000+ followers",
  ],
  techstack: [
    <FaPython key={"python"} />,
    <BsSpotify key={"spotify"} />,
    <FaGoogleDrive key={"googledrive"} />,
    <SiMongodb key={"mongodb"} />,
    <DiGoogleCloudPlatform key={"gcp"} />,
    <FaAws key={"aws"} />,
  ],
  github: "https://github.com/stephen-ip/radiofetcher",
  external: "https://open.spotify.com/user/stephenip10?si=4e4fc9700845498e",
  img: "./radiofetcher.jpg",
  assets: [
    <img key={"radiofetcher"} src="./radiofetcher.jpg" alt="project img" />,
    <iframe
      key={"radiofetcher2"}
      title="Spotifyiframe"
      src="https://open.spotify.com/embed/playlist/1I0G9xjsHyypBjQDMrG04l?utm_source=generator"
      // width="240"
      // height="300"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>,
    <iframe
      key={"radiofetcher3"}
      title="Spotifyiframe"
      src="https://open.spotify.com/embed/playlist/2aKFnLcwzbHRuVSoFpKW2x?utm_source=generator"
      // width="240"
      // height="300"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>,
    <iframe
      key={"radiofetcher4"}
      title="Spotifyiframe"
      src="https://open.spotify.com/embed/playlist/7HaIcQA6sZjL7xGaxsyNP2?utm_source=generator"
      // width="240"
      // height="300"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>,
  ],
};

const twitchclipbot = {
  title: "Twitch Clip Bot",
  description:
    "A Python bot that automatically uploads the top Twitch clips to its YouTube channel. It uses Twitch API and Reddit API (PRAW) to get the the most popular content, then downloads it locally using youtube-dl, and uploads it using Youtube API. The script is deployed in a VM Instance on Google Cloud Platform",
  features: [
    "fully autonomous",
    "top clips from LSF subreddit",
    "YouTube quota supports 5 uploads per day",
    "28,000+ views",
  ],
  techstack: [
    <FaPython key={"python"} />,
    <DiGoogleCloudPlatform key={"gcp"} />,
    <BsTwitch key={"twitch"} />,
    <BsReddit key={"reddit"} />,
    <BsYoutube key={"youtube"} />,
  ],
  github: "https://github.com/stephen-ip/Twitch-Clip-Bot",
  external: "https://github.com/stephen-ip/Twitch-Clip-Bot",
  img: "./mrdestructoid.jpg",
  assets: [
    <img key={"twitchclipbot"} src="./mrdestructoid.jpg" alt="project img" />,
    <img
      key={"twitchclipbot2"}
      src="./TwitchClipBot2021.png"
      alt="project img"
    />,
  ],
};

const cloudpost = {
  title: "Cloudpost",
  description:
    "A full stack web application where users can upload and share various content. It uses Cloudflare Wrangler to build Cloudflare Workers for the backend. Cloudinary was used as a file storage system to handle the various file content types. React was used for the frontend. User authentication was made possible using JWT Authentication and MongoDB. This app is deployed on Heroku",
  features: [
    "supports uploads of various file types",
    "post ratings",
    "user authentication",
  ],
  techstack: [
    <FaCloudflare key={"cloudflare"} />,
    <SiMongodb key={"mongodb"} />,
    <SiExpress key={"express"} />,
    <FaReact key={"react"} />,
    <FaNodeJs key={"nodejs"} />,
    <SiJsonwebtokens key={"jwt"} />,
    <SiHeroku key={"heroku"} />,
  ],
  github: "https://github.com/stephen-ip/Cloudpost",
  external: "https://cloudpost-2zh.pages.dev/",
  img: "./cloudpost.png",
  assets: [
    <img key={"cloudpost"} src="./cloudpost.png" alt="project img" />,
    <img key={"cloudpost2"} src="./cloudpost2.jpg" alt="project img" />,
    <img key={"cloudpost3"} src="./cloudpost3.png" alt="project img" />,
    <img key={"cloudpost4"} src="./cloudpost4.jpg" alt="project img" />,
  ],
};

const memora = {
  title: "Memora",
  description:
    "A full stack web application built with NextJS that aims to slow the progression of Alzheimers through various memory games. The games were built using Javascript and CSS, and their scores are tracked using a MySQL database hosted with AWS RDS. User authentication is handled using JWT and MongoDB. Twilio API is also used to send daily reminders to users to play their games. This app is deployed to Vercel",
  features: [
    "4 memory games",
    "user authentication",
    "user dashboard",
    "custom profile picture upload",
    "match history",
    "daily notification reminders",
    "player leaderboards",
    "MMSE score algorithm",
  ],
  techstack: [
    <FaReact key={"react"} />,
    <SiMongodb key={"mongodb"} />,
    <GrMysql key={"mysql"} />,
    <FaAws key={"aws"} />,
    <SiJsonwebtokens key={"jwt"} />,
    <SiTwilio key={"twilio"} />,
    <SiVercel key={"vercel"} />,
  ],
  github: "https://github.com/stephen-ip/Memora",
  external: "https://memora-zeta.vercel.app/",
  img: "./memora.png",
  assets: [
    <img key={"memora"} src="./memora.png" alt="project img" />,
    <img key={"memora2"} src="./memora2.png" alt="project img" />,
    <img key={"memora3"} src="./memora3.png" alt="project img" />,
    <img key={"memora4"} src="./memora4.jpg" alt="project img" />,
  ],
};

const personal_website = {
  title: "Portfolio Website",
  description:
    "A personal portfolio website built using NextJS and Sass. Google Drive API is used to make sure that the resume on this site is always up to date. This site is deployed to Vercel",
  features: [
    "fully responsive",
    "automatic updated resume fetching",
    "contact form",
  ],
  techstack: [
    <FaReact key={"react"} />,
    <FaSass key={"sass"} />,
    <DiGoogleCloudPlatform key={"gcp"} />,
    <FaGoogleDrive key={"googledrive"} />,
    <SiVercel key={"vercel"} />,
  ],
  github: "https://github.com/stephen-ip/next-portfolio-website",
  external: "https://portfolio-stephen-ip.vercel.app/",
  img: "./website.png",
  assets: [<img key={"portfolio"} src="./website.png" alt="project img" />],
};

const gitlet = {
  title: "gitlet",
  description:
    "A miniature version control system based on Git built for a CS 61B project in Java",
  features: [
    "commits",
    "checkouts",
    "branching",
    "merging",
    "pushing",
    "fetching",
    "pulling",
  ],
  techstack: [<FaJava key={"java"} />, <SiGit key={"git"} />],
  github: "https://github.com/stephen-ip/gitlet",
  external:
    "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj3/index.html",
  img: "./gitlet.png",
  assets: [<img key={"gitlet"} src="./gitlet.png" alt="project img" />],
};

export const ProjectsData = [
  memora,
  cloudpost,
  radiofetcher,
  twitchclipbot,
  personal_website,
  gitlet,
];

export const Keywords = [
  "python",
  "aws",
  "react",
  "bs4",
  "spotify",
  "api,",
  "google",
  "drive",
  "gcp",
  "vm",
  "instance.",
  "mongodb",
  "lambda",
  "eventbridge",
  "(cloudwatch",
  "events).",
  "twitch",
  "api",
  "reddit",
  "(praw)",
  "youtube-dl,",
  "instance",
  "cloud",
  "platform.",
  "youtube",
  "api.",
  "full",
  "stack",
  "cloudflare",
  "wrangler",
  "workers",
  "cloudinary",
  "jwt",
  "mongodb.",
  "heroku",
  "nextjs",
  "javascript",
  "css,",
  "mysql",
  "rds.",
  "twilio",
  "vercel",
  "version",
  "control",
  "system",
  "git",
  "java",
  "scss",
  "sass.",
];
