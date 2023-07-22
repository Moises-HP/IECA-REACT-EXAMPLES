const LayoutRepos = ({ children }) => {
    return (
      <main className="w-full min-h-screen flex flex-col">
        <nav className="h-20 bg-black">
          <span className="text-white">Github Repos</span>
        </nav>
        {children}
      </main>
    );
  };
  
  export default LayoutRepos;