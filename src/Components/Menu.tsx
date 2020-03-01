import React, { FC, Fragment, MouseEvent, MouseEventHandler } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

const MainMenu: FC<{}> = ({}) => {
  const [selectedItem, setSelectedItem] = React.useState<string | undefined>();

  const handleEvent: MouseEventHandler = (event: MouseEvent) => {
    setSelectedItem(event.currentTarget.innerHTML);
    console.log("event happened");
  };

  return (
    <Menu pointing secondary vertical>
      <Menu.Item
        name="자리찾기"
        onMouseEnter={handleEvent}
        active={selectedItem === "자리찾기"}
      />
      <Menu.Item
        name="자리사용"
        onMouseEnter={handleEvent}
        active={selectedItem === "자리사용"}
      />
      <Menu.Item
        name="사용방법"
        onMouseEnter={handleEvent}
        active={selectedItem === "사용방법"}
      />
      <Menu.Item
        name="피드백"
        onMouseEnter={handleEvent}
        active={selectedItem === "피드백"}
      />
    </Menu>
  );
};

export default MainMenu;
