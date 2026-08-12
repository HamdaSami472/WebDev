import React from 'react'
import './App.css';
import Card from './components/card';
const jobPostings = [
  {
    id: 1,
    company: "Amazon",
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Lahore, Pakistan"
  },
  {
    id: 2,
    company: "Google",
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/11/google-logo.jpg",
    datePosted: "2 days ago",
    post: "Frontend React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Microsoft",
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/04/Microsoft-Logo.png",
    datePosted: "1 day ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Seattle, WA"
  },
  {
    id: 4,
    company: "Meta",
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "London, UK"
  },
  {
    id: 5,
    company: "Apple",
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    datePosted: "4 days ago",
    post: "iOS Application Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Cupertino, CA"
  },
  {
    id: 6,
    company: "Netflix",
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
    datePosted: "6 days ago",
    post: "UI/UX Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Los Gatos, CA"
  },
  {
    id: 7,
    company: "Spotify",
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.png",
    datePosted: "3 days ago",
    post: "Visual Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Stockholm, Sweden"
  },
  {
    id: 8,
    company: "Adobe",
    brandLogo: "https://1000logos.net/wp-content/uploads/2020/02/Adobe-Logo.png",
    datePosted: "5 days ago",
    post: "Design Systems Specialist",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "San Jose, CA"
  },
  {
    id: 9,
    company: "Uber",
    brandLogo: "https://1000logos.net/wp-content/uploads/2020/05/Uber-Logo.png",
    datePosted: "2 days ago",
    post: "Mobile UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Amsterdam, Netherlands"
  },
  {
    id: 10,
    company: "Airbnb",
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg",
    datePosted: "4 days ago",
    post: "Lead Experience Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "San Francisco, CA"
  }
];
const App = () => {
  return (
    <div className='parent'>
    {jobPostings.map(function(elem)
      {
        return <Card company={elem.company} logo={elem.brandLogo} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}    />
      }
    )}
      
    </div>
  )
}

export default App
