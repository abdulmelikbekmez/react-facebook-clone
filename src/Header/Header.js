import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActive from "@material-ui/icons/NotificationsActive";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfMTz-VzY1FLzOJSP9iJcxVNhJc7LwZ-MT7Q&usqp=CAU"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large"></HomeIcon>
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large"></FlagIcon>
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large"></SubscriptionsOutlinedIcon>
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large"></StorefrontOutlinedIcon>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large"></SupervisedUserCircleIcon>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL}></Avatar>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon></AddIcon>
        </IconButton>
        <IconButton>
          <ForumIcon></ForumIcon>
        </IconButton>
        <IconButton>
          <NotificationsActive></NotificationsActive>
        </IconButton>
        <IconButton>
          <ExpandMore></ExpandMore>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
