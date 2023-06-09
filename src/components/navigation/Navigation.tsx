import { Link, NavigationWrapper } from '../layout/Layout.styles';

export const Navigation = () => {
  const navItems: { name: string; link: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'Model', link: '/' },
  ];

  return (
    <NavigationWrapper>
      {navItems.map(({ name, link }) => (
        <Link key={name}>
          <a href={link}>{name}</a>
        </Link>
      ))}
    </NavigationWrapper>
  );
};
