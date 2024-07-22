import { episode1, episode2, episode3 } from "@/public/episodes";
import { radio1, radio2, radio3, radio4, radio5 } from "@/public/radio";

export const dataEpisodes = [
  {
    image: episode3,
    block: "Gear",
    episode: 3,
    title: "Should you get\noutboard audio gear?",
    info: "Is hardware really worth it when it comes to podcasting? The answer is...it\ndepends. Here’s our reasons on why you might want to consider picking\nsomething up.",
  },
  {
    image: episode2,
    block: "Tips & Tricks",
    episode: 2,
    title: "Mic tricks to take\nyou to the next level",
    info: "Stop rolling with those default settings on your mic. These small tweaks will\ntake you from sounding good to great.",
  },
  {
    image: episode1,
    block: "Gear",
    episode: 1,
    title: "The best microphone\nunder $200",
    info: "With so many microphones on the market, how are you supposed to know\nwhat’s the best? Take a look at our top picks.",
  },
];

export const dataComments = [
  {
    id: "comment1",
    star: 5,
    comment: "I can’t recommend this podcast enough",
    author: "Betty Lacey",
  },
  {
    id: "comment2",
    star: 5,
    comment: "Jacob is the best in the business",
    author: "Adam Driver",
  },
  {
    id: "comment3",
    star: 5,
    comment: "A wealth of audio knowledge",
    author: "Marcus Brown",
  },
  {
    id: "comment4",
    star: 5,
    comment: "Every episode is a gem!",
    author: "Jessica Knowl",
  },
  {
    id: "comment5",
    star: 5,
    comment: "Whoa whoa, let me take some notes!",
    author: "Scott Adams",
  },
  {
    id: "comment6",
    star: 5,
    comment: "I’ve upped my game considerably since I started listening",
    author: "Steven Blast",
  },
];

export const socialLinks = [
  {
    id: "instagram",
    path: "https://www.instagram.com/",
    name: "Instagram",
  },
  {
    id: "twitter",
    path: "https://twitter.com/",
    name: "Twitter",
  },
  {
    id: "facebook",
    path: "https://facebook.com/",
    name: "Facebook",
  },
];

export const navLinks = [
  { title: "Home", path: "#home" },
  { title: "Episodes", path: "#episodes" },
  { title: "About", path: "#about" },
  { title: "Contact", path: "#contact" },
];

export const navLinksSecondBlock = [
  { title: "Style Guide", path: "#styleguide" },
  { title: "Instructions", path: "#instructions" },
  { title: "Changelog", path: "#changelog" },
  { title: "Credit", path: "#credit" },
  { title: "Powered by Webflow", path: "#powered" },
  { title: "Licenses", path: "#licenses" },
];

export const radioIcons = [
  { name: radio1, icon: radio1 },
  { name: radio2, icon: radio2 },
  { name: radio3, icon: radio3 },
  { name: radio4, icon: radio4 },
  { name: radio5, icon: radio5 },
];
