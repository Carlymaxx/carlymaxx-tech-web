import { Github, Linkedin, Twitter, Bot, Palette } from "lucide-react";

const team = [
  { name: "Carly Maxx", role: "Founder & Lead", bio: "Full-stack developer with 5+ years experience.", image: "https://files.catbox.moe/3716xg.jpg", twitter: "https://x.com/maxx1470", github: "https://github.com/Carlymaxx" },
  { name: "Alex Kimani", role: "Backend Engineer", bio: "Expert in API development and databases.", icon: Bot, twitter: "#", github: "#" },
  { name: "Sarah Wanjiku", role: "UI/UX Designer", bio: "Creative designer for beautiful interfaces.", icon: Palette, twitter: "#", linkedin: "#" },
];

const Team = () => {
  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-muted-foreground text-sm">The passionate people behind Maxx Tech</p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-background rounded-xl p-4 text-center shadow-md">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-primary/10 flex items-center justify-center">
                  {member.icon && <member.icon className="h-8 w-8 text-primary" />}
                </div>
              )}
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-primary text-xs mb-2">{member.role}</p>
              <div className="flex justify-center gap-2">
                {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="h-6 w-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Twitter className="h-3 w-3" /></a>}
                {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="h-6 w-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Github className="h-3 w-3" /></a>}
                {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="h-6 w-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin className="h-3 w-3" /></a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
