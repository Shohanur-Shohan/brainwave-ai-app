import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className, href, children, onClick, px, white }) => {
  const classes = `button h-11 relative inline-flex items-center justify-center transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-1' : 'text-n-2'} ${className || ''}`;

  const spanClasses = 'relative z-10';

  const renderButton = () => (
    //for nav button
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  //for card component
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
