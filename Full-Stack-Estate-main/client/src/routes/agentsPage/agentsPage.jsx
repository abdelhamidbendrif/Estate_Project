// AgentsPage.jsx
import React from "react";
import "./agentsPage.scss";

function AgentsPage() {
  // Dummy agent data
  const agents = [
    {
      id: 1,
      name: "Abdeslam GOUNAICH",
      imageUrl: "/photo.jpg",
      email: "abdeslamgounaich@gmail.com",
      phone: "06 41 55 95 80",
    },
    {
      id: 2,
      name: "AbdelHamid Ben Drif",
      imageUrl: "/Abdelhamid.jpg",
      email: "AbdelHamid-Ben-Drif@gmail.com",
      phone: "06 41 55 95 80",
    },
    {
      id: 3,
      name: "Abdelouahed ID Boubrik",
      imageUrl: "/abdelouahed.png",
      email: "Abdelouahed-ID-Boubrik@gmail.com",
      phone: "06 41 55 95 80",
    },
  ];

  return (
    <div className="agentsPage">
      <div className="agentsContainer">
        <h1 className="title">Our Agents</h1>
        <div className="agentList">
          {agents.map((agent) => (
            <div key={agent.id} className="agentCard">
              <img src={agent.imageUrl} alt={agent.name} />
              <h2>{agent.name}</h2>
              <p>Email: {agent.email}</p>
              <p>Phone: {agent.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgentsPage;
