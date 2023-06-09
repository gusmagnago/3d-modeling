import { ReactNode } from 'react';
import { ContentWrapper, LayoutWrapper } from './Layout.styles';

type LayoutProps = {
  navigation: ReactNode;
  content: ReactNode;
};

export const Layout = ({ navigation, content }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <div>{navigation}</div>
      <ContentWrapper>{content}</ContentWrapper>
    </LayoutWrapper>
  );
};
