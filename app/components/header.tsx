import { styled } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import WebsiteLogo from '../../public/images/logo.png';

const Header = () => {
  return (
    <StyledNav>
      <Link href={'/'}>
        <Image
          src={WebsiteLogo}
          alt="Website logo"
          style={{
            width: 'var(--space-l-4xl)',
            height: 'var(--space-l-4xl)',
          }}
        />
      </Link>
      <StyledList>
        <li>
          <Link href={'/work'}>Work</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/contact'}>Contact</Link>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default Header;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-l-xl);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: var(--space-m);
  list-style: none;
  font-family: 'Jost';
  font-size: var(--step-0);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
