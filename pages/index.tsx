import ThemeToggle from "../components/theme-toggle";

const HomePage = () => {
  return (
    <div id="main">
      <nav>
        <ThemeToggle />
      </nav>
      <div id="main-content">
        <h1>Hello</h1>
      </div>

      <style jsx>{`
        #main {
          display: flex;
          flex-direction: column;
        }
        #main-content {
          width: 100%;
          flex-grow: 1;
          display: grid;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
