import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className, href, children, onClick, px, white }) => {
  const classes = `button h-11 relative inline-flex items-center font-grotesk justify-center transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

  const spanClasses = 'relative z-10';

  const renderButton = () => (
    //for nav button
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    //for card component
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
