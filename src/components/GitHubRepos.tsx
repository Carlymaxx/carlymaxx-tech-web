import { useState, useEffect } from "react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

interface Repo { name: string; description: string; stargazers_count: number; forks_count: number; html_url: string; language: string; updated_at: string; }

const langColors: Record<string, string> = { JavaScript: "bg-yellow-400", TypeScript: "bg-blue-500", Python: "bg-green-500", HTML: "bg-orange-500", CSS: "bg-blue-400", Shell: "bg-gray-500" };

const GitHubRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Carlymaxx/repos?sort=updated&per_page=6")
      .then(r => r.json())
      .then(data => { setRepos(data.filter((r: Repo) => !r.description?.includes("fork")).slice(0, 6)); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Github className="h-8 w-8" />
            <h2 className="font-display text-3xl font-bold tracking-wider">Open Source</h2>
          </div>
          <p className="text-gray-400">Latest repositories from our GitHub</p>
        </div>
        {loading ? (
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[...Array(6)].map((_, i) => <div key={i} className="h-32 bg-gray-700 rounded-xl animate-pulse" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {repos.map((repo) => (
              <a key={repo.name} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm text-emerald-400 group-hover:text-emerald-300">{repo.name}</h3>
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-emerald-400" />
                </div>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">{repo.description || "No description"}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {repo.language && <span className="flex items-center gap-1"><span className={`h-2.5 w-2.5 rounded-full ${langColors[repo.language] || 'bg-gray-500'}`}></span>{repo.language}</span>}
                  <span className="flex items-center gap-1"><Star className="h-3 w-3" />{repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3" />{repo.forks_count}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default GitHubRepos;
