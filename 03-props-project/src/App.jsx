import React from "react";
import "./App.css";
import Card from "./components/card";

const jobs = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    logo: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651091.jpg",
    title: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    posted: "2 days ago",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRG_VyHRhF4JPe1d9Q4G80Xyj4rxPb9dH6efj79ysqgni2hK4cZTTMgg&s=10",
    title: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    posted: "1 day ago",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTcGdtn9wpg6gZyUUPJCIWzpsDZm-F_rQ5n_ufcX-Hw&s=10",
    title: "React Developer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Netflix",
    posted: "3 days ago",
    logo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
    title: "Product Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Mumbai, India",
  },
  {
    id: 5,
    company: "Apple",
    posted: "4 days ago",
    logo: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logo.png",
    title: "UI Designer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$115/hr",
    location: "Delhi, India",
  },
  {
    id: 6,
    company: "Meta",
    posted: "6 days ago",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzChlzw4_AmFlEk86g0TiPq7s9vBGzBlpw7N6U6Dp-muzJ4FH9Dm3Ee0&s=10",
    title: "Frontend Engineer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Gurgaon, India",
  },
  {
    id: 7,
    company: "Adobe",
    posted: "2 days ago",
    logo: "https://logos-world.net/wp-content/uploads/2025/04/Adobe-Acrobat-Logo.png",
    title: "UX Researcher",
    type: "Part-Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Noida, India",
  },
  {
    id: 8,
    company: "Spotify",
    posted: "7 days ago",
    logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/3840px-Spotify_App_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    title: "Web Developer",
    type: "Full-Time",
    level: "Junior Level",
    salary: "$85/hr",
    location: "Pune, India",
  },
  {
    id: 9,
    company: "Flipkart",
    posted: "3 days ago",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIu7-y7GFyb6XBqKPYFwW3-d_BP0BRaubQ0JodOE1TdOfh3nVt6oe0JtE&s=10",
    title: "UI/UX Designer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$90/hr",
    location: "Bangalore, India",
  },
  {
    id: 10,
    company: "TCS",
    posted: "1 day ago",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaqBimiU40nIz5pLpegfCPkoQTp9_70-fLQS4PQa1sA&s=10",
    title: "Software Developer",
    type: "Full-Time",
    level: "Junior Level",
    salary: "$75/hr",
    location: "Noida, India",
  },
];

const App = () => {
  return (
    <div className="parent">
    {jobs.map(function(elem, idx){
      return <div key={idx}>
        <Card company = {elem.company} title = {elem.title} posted = {elem.posted} logo = {elem.logo} type = {elem.type} level = {elem.level} salary ={elem.salary} location = {elem.location} />
      </div>
    })}
    </div>
  );
};

export default App;
