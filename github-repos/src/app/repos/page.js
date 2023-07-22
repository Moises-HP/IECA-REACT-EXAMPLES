import Link from "next/link";

const ReposPage = async () => {
  const repos = await getRepos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1>Repos Page</h1>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <Link href={`/repos/${repo.name}`}>{repo.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

const getRepos = async () => {
  const response = await fetch("https://api.github.com/users/ur13l/repos");
  const repos = await response.json();
  return repos;
};

export default ReposPage;