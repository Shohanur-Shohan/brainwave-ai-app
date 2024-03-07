import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useState } from 'react';

import { brainwave } from '../assets';
import { navigation } from '../constants';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';

const Header = () => {
  const pathName = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    if (openNavigation === true) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* logo */}
        <a href="/" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="logo" />
        </a>
        {/* menu desktop */}
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item?.id}
                href={item?.url}
                onClick={handleClick}
                className={`relative block text-2xl uppercase transition-colors font-code text-n-1 hover:text-color-1 ${
                  item?.onlyMobile ? 'lg:hidden' : ''
                } px-6 py-4 md:py-6 lg:-mr-0.25 lg:text-[14px] lg:font-semibold ${
                  item?.url === pathName.hash
                    ? 'z-2 lg:text-n-1'
                    : 'lg:text-n-1/50'
                } leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item?.title}
              </a>
            ))}
            {/*my extra btn*/}
            <Button
              className="flex lg:hidden text-2xl lg:text-[14px] mt-3"
              href="#login"
            >
              Sign in
            </Button>
            {/*my extra btn*/}
          </div>

          {/* mobile */}
          <HamburgerMenu />
          {/* mobile */}
        </nav>
        {/* menu desktop */}

        {/* signup  */}
        <a
          href="#signup"
          className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        {/* signup */}

        {/*navicon mobile */}
        <Button
          className="ml-auto lg:hidden "
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        {/*navicon mobile */}
      </div>
    </div>
  );
};

export default Header;
