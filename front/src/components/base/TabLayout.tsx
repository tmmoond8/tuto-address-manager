/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Color, tablet, desktop } from '../../styles';

interface TabLayoutProps {
  children: ReactNode;
}

interface Tab {
  path: string;
  name: string;
}

const tabs: Tab[] = [
  { path: '/profile', name: '프로필' },
  { path: '/account', name: '계정' },
  { path: '/paymethod', name: '결제수단' },
  { path: '/address', name: '배송지' },
  { path: '/notification', name: '알림' },
];

const TabLink = (props: Tab) => {
  const { path, name } = props;
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );
};

export default function TabLayout(props: TabLayoutProps) {
  const { children } = props;
  return (
    <div>
      <Title>설정</Title>
      <Nav>
        <Tabs>
          {tabs.map((tab: Tab) => (
            <TabLink path={tab.path} name={tab.name} key={tab.name} />
          ))}
        </Tabs>
      </Nav>
      {children}
    </div>
  );
}

const Title = styled.h1`
  color: ${Color.Black};
  font-size: 36px;
  font-weight: bold;
  margin: 26px 0 50px 28px;
`;

const Nav = styled.nav``;

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
