import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Carly Maxx",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with 5+ years of experience in bot development and automation. Passionate about helping businesses scale through technology.",
    social: {
      twitter: "https://x.com/maxx1470",
      github: "https://github.com/Carlymaxx",
    },
  },
  {
    name: "Alex Kimani",
    role: "Backend Engineer",
    bio: "Expert in API development and database architecture. Specializes in building scalable server-side solutions.",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Wanjiku",
    role: "UI/UX Designer",
    bio: "Creative designer focused on creating beautiful, user-friendly interfaces that drive engagement and conversions.",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Otieno",
    role: "DevOps Engineer",
    bio: "Infrastructure specialist ensuring seamless deployments and 99.9% uptime for all client projects.",
    social: {
      github: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate people behind Maxx Tech, dedicated to delivering excellence in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
