import React from 'react'
import "./About.css";

const people = [
  {
    id: 1,
    name: "Eric Erickson",
    title: "Founder & CEO",
    description:
      "Eric Erickson has worked in technology and finance since 1989. Engagements include consulting for Motorola, Intel, Chase Manhattan Bank, Gillette, and others. He has a B.S. in Finance and an M.B.A. in Finance and is an Oracle Certified DBA.",
    image: "https://gns.tv/files/eric.jpg",
  },
  {
    id: 2,
    name: "Chris Smith",
    title: "Chief Editor",
    description:
      "Chris Smith is a publishing consultant, editor, and author. He holds a B.A. in English from UC Berkeley and an M.A. in Journalism from the University of Colorado. He has published 300+ technical articles and multiple books.",
    image: "https://gns.tv/files/smith.jpg",
  },
  {
    id: 3,
    name: "Steve Staloch",
    title: "Chief Advisor",
    description:
      "Steve Staloch has over 40 years in journalism and newspaper management, with experience in M&A and working with private equity. He holds a B.S. in Journalism from Thief River Falls College.",
    image: "https://gns.tv/files/steve.jpg",
  },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      {/* Mission & Vision */}
      <section className="about-section">
        <h3>Our Mission</h3>
        <p>
          Expand our newspaper circulations. Our deepest purpose as an
          organization are newspaper industries, people—customers, team members,
          and business organizations.
        </p>

        <h3>Our Vision</h3>
        <p>
          Our vision is to be the earth's most valuable newspaper company, where
          people can find the latest news, classifieds, and events.
        </p>
      </section>

      {/* Team Profiles (small cards) */}
      <div className="profile-list">
        {people.map((person) => (
          <div key={person.id} className="profile-card">
            <img src={person.image} alt={person.name} className="profile-img" />
            <h4>{person.name}</h4>
            <p className="profile-title">{person.title}</p>
          </div>
        ))}
      </div>

      {/* Detailed Cards */}
      <div className="details-list">
        {people.map((person) => (
          <div key={person.id} className="details-card">
            <img src={person.image} alt={person.name} className="details-img" />
            <h3>{person.name}</h3>
            <p className="title">{person.title}</p>
            <p className="description">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
