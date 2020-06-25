import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './Dnd.css';
import { Button } from '@material-ui/core';
import { AddFieldBtn } from './AddFieldBtn';
import { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statuses } from "../data";
import '../style/index.css';
import Homepage from "../pages/Homepage";
import '../style/index.css';


class Menu extends React.Component {
  onDragStart = (event, fieldName) => {
    event.dataTransfer.setData("fieldName", fieldName);
  }
  onDragOver = (event) => {
    event.preventDefault();
  }
  onDropDown = (event) => {
    var display = document.getElementById("dropdown-container").style.display;
    display === 'none' ? document.getElementById("dropdown-container").style.display = 'block' : document.getElementById("dropdown-container").style.display = 'none';
  }

  onDrop2 = (item, monitor, status) => {
    const mapping = statuses.find(si => si.status === status);

    let items = this.state.items.filter(i => i.id !== item.id).concat({ ...item, status, icon: mapping.icon });
    this.setState(state => ({ items: items }))
  };

  // Open drawer when screen width is small enough
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  // Add new element to fields when submit is pressed
  handleAddField = (name) => {
    this.setState(state => ({
      fields: [...state.fields,
      { fieldName: `${name}`, type: "atTheSide", backgroundColor: "red" }]
    }));
  };

  state = {
    mobileOpen: false,
    fields: [
      { fieldName: "Name", type: "atTheSide", backgroundColor: "red" },
      { fieldName: "Email", type: "inForm", backgroundColor: "blue" },
    ],
  };


  render() {

    var fields = {
      atTheSide: [],
      inForm: []
    }

    // Loops thru each field element and return div
    this.state.fields.forEach((field) => {
      if (field.type === 'atTheSide') {
        fields[field.type].push(
          <div onDragStart={(event) => this.onDragStart(event, field.fieldName)}
            draggable
            className="draggable"
            style={{ backgroundColor: field.backgroundColor }}>
            {field.fieldName}
          </div>
        );
      }
      else {
        fields[field.type].push(
          <div onDragStart={(event) => this.onDragStart(event, field.fieldName)}
            draggable
            className="draggable"
            style={{ backgroundColor: field.backgroundColor }}>
            <div>
              <label for={field.fieldName}>{field.fieldName}</label>
              <input type="text" id={field.fieldName} name={field.fieldName} placeholder="Please enter your name" required />
            </div>
          </div>
        );
      }

    });


    const { classes, theme } = this.props;

    // Contains elements of drawer
    const drawer = (

      <div class="sidenav">
        <div className={classes.toolbar} />
        <div className="drag-container">
          <h2 class="formbuilder-head">Form Builder</h2>
          <div className="atTheSide"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => { this.onDrop(event, "atTheSide") }}>
            <Homepage status="Sidebar" />
            <AddFieldBtn handleAddField={this.handleAddField}></AddFieldBtn>

          </div>

          <button class="dropdown-btn" onClick={this.onDropDown}>Fields</button>
          <div id="dropdown-container">
            <Homepage status="Sidebar" />
          </div>

        </div>

        <Divider />
        {fields.atTheSide}
        <List>
          {['Saved Forms', 'Help'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>

    );

    const newDrawer = (

      <div class="sidenav">
        <h2 className="formBuilderHead">Form Builder</h2>
        <button class="dropdown-btn" onClick={this.onDropDown}>Fields
        <i class="fa fa-caret-down">🔽</i></button>
        <div id="dropdown-container">
          <Homepage status="Sidebar" />
        </div>

        <a href="#about">Saved forms</a>
        <a href="#about">Help</a>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Instant Pay Form
            </Typography>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {newDrawer}
            </Drawer>
          </Hidden>

          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {newDrawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <Homepage status="Form" />

          <div className={classes.toolbar} />
          <div className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "inForm")}>
            {fields.inForm}
          </div>
        </main>
      </div>
    );
  }
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});


export default withStyles(styles, { withTheme: true })(Menu);