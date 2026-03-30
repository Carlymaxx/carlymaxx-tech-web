import { Github, Twitter, Bot, Palette } from "lucide-react";

const team = [
  {
    name: "Carly Maxx",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer & IT specialist from Ruiru, Kenya. 5+ years building bots, websites, and digital solutions for clients worldwide.",
    skills: ["React", "Node.js", "Python", "WhatsApp Bots"],
    image: "https://files.catbox.moe/3716xg.jpg",
    twitter: "https://x.com/maxx1470",
    github: "https://github.com/Carlymaxx",
  },
  {
    name: "Cyrilix Chenuwo",
    role: "Backend Engineer",
    bio: "Expert in API development, databases, and server architecture. Builds scalable backends that power our most demanding applications.",
    skills: ["Node.js", "MongoDB", "PostgreSQL", "REST APIs"],
    icon: Bot,
    twitter: "#",
    github: "#",
  },
  {
    name: "Sein Patel",
    role: "UI/UX Designer",
    bio: "Creative designer who crafts beautiful, intuitive interfaces. Specializes in modern web design and mobile-first experiences.",
    skills: ["Figma", "CSS", "Animation", "Branding"],
    icon: Palette,
    twitter: "#",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-gray-500 text-sm">The passionate people behind Maxx Tech</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover ring-2 ring-emerald-400" />
              ) : (
                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-violet-100 flex items-center justify-center">
                  {member.icon && <member.icon className="h-8 w-8 text-emerald-600" />}
                </div>
              )}
              <h3 className="font-bold text-base mb-0.5">{member.name}</h3>
              <p className="text-emerald-600 text-xs font-semibold mb-2">{member.role}</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                {member.skills.map((skill) => (
                  <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">{skill}</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"><Twitter className="h-3.5 w-3.5" /></a>}
                {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"><Github className="h-3.5 w-3.5" /></a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
