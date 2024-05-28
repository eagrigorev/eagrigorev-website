import styles from './SpotifyEmbed.module.scss';

const SpotifyEmbed = ({ src, layout }) => {
  const height = layout === 'big' ? '352' : '152';
  return (
    <iframe
      className={styles['wrapper']}
      style={{ borderRadius: '12px' }}
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;
