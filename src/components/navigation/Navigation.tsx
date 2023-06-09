export const Navigation = () => {
  const navItems: { name: string; link: string }[] = [
    { name: 'item 1', link: '' },
    { name: 'item 2', link: '' },
  ];

  return (
    <div>
      {navItems.map(({ name, link }) => (
        <div key={name}>
          <a href={link}>{name}</a>
        </div>
      ))}
    </div>
  );
};
