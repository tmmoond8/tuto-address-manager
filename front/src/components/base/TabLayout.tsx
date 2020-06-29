/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, useState, useCallback, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Color, tablet, desktop } from '../../styles';

interface TabLayoutProps {
  children: ReactNode;
}

interface Tab {
  path: string;
  name: string;
}

interface TabLinkProps extends Tab {
  active?: boolean;
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
}

const tabs: Tab[] = [
  { path: '/profile', name: '프로필' },
  { path: '/account', name: '계정' },
  { path: '/paymethod', name: '결제수단' },
  { path: '/address', name: '배송지' },
  { path: '/notification', name: '알림' },
];

const TabLink = (props: TabLinkProps) => {
  const { path, name, active = false, onClick } = props;
  return (
    <TabItem active={active} onClick={onClick}>
      <Link to={path}>{name}</Link>
    </TabItem>
  );
};

export default function TabLayout(props: TabLayoutProps) {
  const { children } = props;
  const [tabIndex, setTabIndex] = useState(3);
  const handleClickTab = useCallback((index: number) => {
    setTabIndex(index);
  }, []);
  return (
    <div>
      <Title>설정</Title>
      <Nav>
        <Tabs>
          {tabs.map((tab: Tab, index) => (
            <TabLink
              active={tabIndex === index}
              path={tab.path}
              name={tab.name}
              key={tab.name}
              onClick={() => handleClickTab(index)}
            />
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
  margin: 26px 28px 50px 28px;
`;

const Nav = styled.nav`
  text-align: center;
`;

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 28px;
  border-bottom: solid 1px ${Color.Greyce};
  list-style: none;
`;

const TabItem = styled.li<{ active: boolean }>`
  color: ${(p) => (p.active ? `${Color.Grey3e}` : `${Color.Grey99}`)};
  font-size: 20px;
  font-weight: ${(p) => (p.active ? 'bold' : 'normal')};
  padding: 10px 0 8px;
  border-bottom: 3px solid
    ${(p) => (p.active ? `${Color.Grey3e}` : `${Color.Transparent}`)};
`;
