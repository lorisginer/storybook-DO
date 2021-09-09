import React, { useState } from "react";
import "./sidebar.css";
import CSS from "csstype";
import { FaHome, FaLayerGroup, FaCog, FaCloud, FaBars } from 'react-icons/fa';
import { IconType } from "react-icons";

function stretchedCSS(
  b: boolean,
  background: string,
  color: string
): CSS.Properties {
  return b
    ? { width: "240px", background: background, color: color }
    : { width: "64px", background: background, color: color };
}

function stretchedItemCSS(b: boolean): CSS.Properties {
  return b ? { width: "240px" } : { width: "64px" };
}

function stretchedMenuCSS(b: boolean): CSS.Properties {
  return b ? { display: "none" } : { display: "inline-block" };
}

function stretchedCroixCSS(b: boolean): CSS.Properties {
  return b ? { display: "inline-block" } : { display: "none" };
}

export type SideBarElement = {
  label: string;
  link: string;
  icon: string;
};

export type SideBarProps = {
  elements: SideBarElement[];
  color: string;
  background: string;
  stretched: boolean;
};

export const SideBar: React.FC<SideBarProps> = (props) => {
  const { elements, color, background, stretched } =
    props;

  function ElementsList() {

    const listDiv = elements.map((element) => (
      <div className="icon-sidebar" style={stretchedItemCSS(stretched)}>
        <a href={element.link}>
          {switchIcon(element.icon)}
          <div className="text" style={stretchedCroixCSS(stretched)}>
            {element.label}
          </div>
        </a>
      </div>
    ));
    return <div>{listDiv}</div>;
  }

  function switchIcon(icon: string) : IconType{
    let getIcon : any;
    switch (icon.toLowerCase()) {
      case "home": 
        getIcon = <FaHome className="element"/>

        break;
      case "stack": 
        getIcon = <FaLayerGroup className="element"/>

        break;
      case "cloud":
        getIcon = <FaCloud className="element"/>

        break; 
      case "cog": 
        getIcon = <FaCog className="element"/>

        break; 
      default:
        break;
    }
    return getIcon;
  }

  return (
    <nav
      className="storybook-sidebar"
      style={stretchedCSS(stretched, background, color)}
      {...props}
    >
      <i className={`fas fa-user-house`}></i>
      {/* {label} */}
      <button className="button-sidebar">
        <FaBars/>
      </button>
      <div className="main-div-sidebar">
        <ElementsList />
      </div>
    </nav>
  );
};
