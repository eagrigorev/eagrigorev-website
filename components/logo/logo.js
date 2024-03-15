import styles from './logo.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link className={`${styles['wrapper']} link`} href={'/'}>
      <Image
        className={styles['image']}
        src={'/images/logo.png'}
        width={60}
        height={60}
        alt="Evgenii Grigorev Website Logo"
      />
      <p className="paragraph paragraph--medium-m-100">Evgenii Grigorev</p>
    </Link>
  );
};

export default Logo;
