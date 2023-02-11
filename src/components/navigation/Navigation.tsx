import { Link, Outlet } from 'react-router-dom';

const Navigation: React.FC = (): JSX.Element => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="page1">Page 1</Link>
          </li>
          <li>
            <Link to="page2">Page 2</Link>
          </li>
          <li>
            <Link to="page3">Page 3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
