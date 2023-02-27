import Navigation from './navigation';

const Header = () => {
  return (
    <header className="u-container u-grid">
      <div>
        <div>
          <h1>Evgenii Grigorev</h1>
        </div>
        <div>Social links</div>
        <div>Search</div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
