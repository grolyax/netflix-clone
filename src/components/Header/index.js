import { Root, Logo, NavList, NavListItem, NavListItemLink, ProfileImg } from './styles';

const navItems = [
  { title: 'Home', active: true, href: '#' },
  { title: 'TV Show', active: false, href: '#' },
  { title: 'Movies', active: false, href: '#' },
  { title: 'Latest', active: false, href: '#' },
  { title: 'My List', active: false, href: '#' }
]

const Header = () => {
  return (
    <Root>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png" />

      <NavList>
        {navItems.map((navItem, title) => (
          <NavListItem key={navItem.title}>
            <NavListItemLink active={navItem.active}>
              {navItem.title}
            </NavListItemLink>
          </NavListItem>
        ))}
      </NavList>

      <ProfileImg src="https://lh3.googleusercontent.com/ogw/ADGmqu-8kRa7p9_Ct5a3vnhG-3-voePwIc5doEWGLZP7=s32-c-mo" />
    </Root>
  );
};

export default Header;