const RepoPage = async ({ params: { name } }) => {
    const repo = await getRepo(name);
  
    if (repo.message === "Not Found" || !repo) {
      return <h1>404</h1>;
    }
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
        <h1 className="text-3xl font-bold">{repo.name}</h1>
        <p>{repo.description}</p>
        <p>Acceso: {repo.private ? "Privado" : "Público"}</p>
      </main>
    );
  };
  
  const getRepo = async (name) => {
    const response = await fetch(`https://api.github.com/repos/ur13l/${name}`);
    const repo = await response.json();
    console.log(repo);
    return repo;
  };
  
  export async function generateStaticParams() {
    const response = await fetch("https://api.github.com/users/ur13l/repos");
    const repos = await response.json();
  
    return repos.map((repo) => ({
      name: repo.name,
    }));
  }
  
  export default RepoPage;