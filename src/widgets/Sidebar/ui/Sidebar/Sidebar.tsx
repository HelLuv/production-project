import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  function onToggle() {
    setCollapsed(prev => !prev);
  }

  return (
    <div
      className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </div>
  );
};