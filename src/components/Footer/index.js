import FooterNav from '../FooterNav';
import style from './style.module.css';

const Footer = ({ links, copyright }) => {
  return (
    <footer className={ style.Footer }>
      <div className={ style.Footer__wrapper }>
        <FooterNav links={ links } />

        <p className={ style.Footer__copyright }>{ copyright && copyright }</p>
      </div>
    </footer>
  );
}

export default Footer;
