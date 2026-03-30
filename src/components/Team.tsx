import { Github, Twitter, Bot, Palette, Shield, Globe } from "lucide-react";

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
    name: "Alex Kimani",
    role: "Backend Engineer",
    bio: "Expert in API development, databases, and server architecture. Builds scalable backends that power our most demanding applications.",
    skills: ["Node.js", "MongoDB", "PostgreSQL", "REST APIs"],
    icon: Bot,
    twitter: "#",
    github: "#",
  },
  {
    name: "Sarah Wanjiku",
    role: "UI/UX Designer",
    bio: "Creative designer who crafts beautiful, intuitive interfaces. Specializes in modern web design and mobile-first experiences.",
    skills: ["Figma", "CSS", "Animation", "Branding"],
    icon: Palette,
    twitter: "#",
  },
  {
    name: "Kevin Omondi",
    role: "Security Specialist",
    bio: "Cybersecurity expert focused on account protection and secure deployments. Keeps our clients' data safe and systems hardened.",
    skills: ["Security", "Encryption", "Audits", "Compliance"],
    icon: Shield,
  },
  {
    name: "Diana Mwangi",
    role: "Digital Marketing",
    bio: "Growth strategist who helps clients boost their online presence through YouTube, TikTok, and social media optimization.",
    skills: ["YouTube", "TikTok", "SEO", "Analytics"],
    icon: Globe,
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover ring-2 ring-emerald-400" />
              ) : (
                <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-gradient-to-br from-emerald-100 to-violet-100 flex items-center justify-center">
                  {member.icon && <member.icon className="h-7 w-7 text-emerald-600" />}
                </div>
              )}
              <h3 className="font-bold text-sm mb-0.5">{member.name}</h3>
              <p className="text-emerald-600 text-[10px] font-semibold mb-2">{member.role}</p>
              <p className="text-gray-500 text-[10px] leading-relaxed mb-3 hidden md:block">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {member.skills.map((skill) => (
                  <span key={skill} className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">{skill}</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"><Twitter className="h-3 w-3" /></a>}
                {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"><Github className="h-3 w-3" /></a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
