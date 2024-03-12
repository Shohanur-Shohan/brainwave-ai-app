import HeroButtonSvg from '../../assets/svg/HeroButtonSvg';

const HeroButton = ({ className, href, children, onClick, px, white }) => {
  const classes = `button h-11 relative inline-flex items-center font-grotesk justify-center transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

  const spanClasses = 'relative z-10';

  const renderButton = () => (
    //for nav button
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {HeroButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    //for card component
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {HeroButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default HeroButton;
