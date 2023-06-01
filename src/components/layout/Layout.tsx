import { ReactNode } from 'react';

type LayoutProps = {
  navigation: ReactNode;
  content: ReactNode;
};

export const Layout = ({ navigation, content }: LayoutProps) => {
  return (
    <div>
      <div>{navigation}</div>
      <div>{content}</div>
    </div>
  );
};
