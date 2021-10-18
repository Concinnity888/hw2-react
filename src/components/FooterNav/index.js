import style from './style.module.css';

const FooterNav = ({ links }) => {
  return (
    <nav className={ style.FooterNav }>
      <ul className={ style.FooterNav__list }>
        {
          links && links.map((link) =>
            <li className={ style.FooterNav__item } key={ link.id }>
              <a className={ style.FooterNav__link } href={ link.path }>{ link.label }</a>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default FooterNav;
