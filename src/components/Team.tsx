import { useState } from "react";
import { Github, Twitter } from "lucide-react";

const team = [
  {
    name: "Carly Maxx",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer & IT specialist from Ruiru, Kenya. 5+ years building bots, websites, and digital solutions.",
    skills: ["React", "Node.js", "Python", "WhatsApp Bots"],
    image: "https://files.catbox.moe/3716xg.jpg",
    twitter: "https://x.com/maxx1470",
    github: "https://github.com/Carlymaxx",
  },
  {
    name: "Cyrilix Chenuwo",
    role: "Backend Engineer",
    bio: "Expert in API development, databases, and server architecture.",
    skills: ["Node.js", "MongoDB", "PostgreSQL", "REST APIs"],
    image: "https://files.catbox.moe/i6mhnk.jpg",
    twitter: "#",
    github: "#",
  },
  {
    name: "Ibrahim Adams",
    role: "UI/UX Designer",
    bio: "Creative designer specializing in modern web design and mobile-first experiences.",
    skills: ["Figma", "CSS", "Animation", "Branding"],
    image: "https://files.catbox.moe/dtul0r.jpg",
    twitter: "#",
  },
];

const Team = () => (
  <div className="max-w-3xl mx-auto">
    <p className="text-gray-500 text-xs text-center mb-4">The passionate people behind Maxx Tech</p>
    <div className="grid grid-cols-3 gap-3">
      {team.map((member, index) => (
        <div key={index} className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all">
          <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full mx-auto mb-2 object-cover ring-2 ring-emerald-400" />
          <h3 className="font-bold text-xs mb-0.5">{member.name}</h3>
          <p className="text-emerald-600 text-[10px] font-semibold mb-1">{member.role}</p>
          <p className="text-gray-500 text-[10px] leading-relaxed mb-2">{member.bio}</p>
          <div className="flex flex-wrap justify-center gap-1 mb-2">
            {member.skills.map((skill) => (
              <span key={skill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">{skill}</span>
            ))}
          </div>
          <div className="flex justify-center gap-1.5">
            {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"><Twitter className="h-2.5 w-2.5" /></a>}
            {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"><Github className="h-2.5 w-2.5" /></a>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
