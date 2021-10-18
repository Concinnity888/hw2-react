import style from './style.module.css';

const Layout = ({ children }) => {
  return (
    <div className={ style.Layout }>
      { children }
    </div>
  );
}

export default Layout;
