import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="l-center l-max-width footer__inner">
        <div className="footer__company">
          <Link className="footer__logo" to="/">
            itda
          </Link>
          <p>@ All Right Reserved.</p>
        </div>
        <ul className="footer__info">
          <li>
            <Link to="/">소개</Link>
          </li>
          <li>
            <Link to="/">이용약관</Link>
          </li>
          <li>
            <Link to="/">개인정보처리방침</Link>
          </li>
        </ul>
        <div className="footer__addr">
          <p>
            이메일: <a href="mailto:itda@osci.com">itda@osci.com</a>
          </p>
          <p>대표자명: 장용훈</p>
          <p>상호명: 오픈소스컨설팅</p>
        </div>
        <p>사업자등록번호: 00000-0000000</p>
      </div>
    </footer>
  );
}
