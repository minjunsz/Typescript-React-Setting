import React, { FC, Fragment } from "react";
import { Menu } from "semantic-ui-react";

const TopMenu: FC<{}> = ({}) => {
  return (
    <Fragment>
      <Menu fixed="top" inverted>
        <Menu.Item header>POSTECH</Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
        <Menu.Item as="a">자리찾기</Menu.Item>
        <Menu.Item as="a">사용방법</Menu.Item>
        <Menu.Item as="a">피드백</Menu.Item>
      </Menu>
    </Fragment>
  );
};

export default TopMenu;
