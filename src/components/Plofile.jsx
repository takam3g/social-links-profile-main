import Card from './Card';
import Avater from '../assets/img/avatar-jessica.jpeg';

const profile = {
  avaterImg: Avater,
  name: "Jessica Randall",
  location: "London, United Kingdom",
  subline: "Front-end developer and avid reader",
  sns: [
    {
      platform: "GitHub",
      link: "https://github.com/",
    },
    {
      platform: "Frontend Mentor",
      link: "https://www.frontendmentor.io/",
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      platform: "Twitter",
      link: "https://x.com/",
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/",
    },
  ]   
}

function Plofile() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card key={profile.name} profile={profile}/>
    </div>
  )
}

export default Plofile