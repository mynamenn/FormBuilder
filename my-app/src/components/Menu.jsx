import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import '../style/index.css';
import DrawerElements from './DrawerElements';
import NewDnd from './newDnd';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../data/initial-data';
import DndImage from './DndImage';


class Menu extends React.Component {
  onDragStart = (event, fieldName) => {
    event.dataTransfer.setData("fieldName", fieldName);
  }
  onDragOver = (event) => {
    event.preventDefault();
  }

  // Open drawer when screen width is small enough
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  btnSetState = (newData) => {
    this.setState(state => ({ data: newData }));
  };

  state = {
    mobileOpen: false,
    data: initialData
  };

  onDragEnd = result => {
    // droppableId = 'column-1'
    const { destination, source, draggableId } = result;

    // Break if no destination
    if (!destination) {
      return;
    }

    // Break if same column and index
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = this.state.data.columns[source.droppableId];
    const finish = this.state.data.columns[destination.droppableId];

    // Same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);  // [task-1, task-2, ...]
      newTaskIds.splice(source.index, 1);     // Remove task from dragged index
      newTaskIds.splice(destination.index, 0, draggableId);  // Add taskId to destination index

      const newColumn = {    // 'çolumn-1': { id: , title: , taskIds: [] }
        ...finish,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state.data,
        columns: {
          ...this.state.data.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(state => ({ data: newState }));
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newStats = (destination.droppableId === 'column-1') ?
      'main' : 'Sidebar';

    const newTasks = {
      ...this.state.data.tasks,
      [draggableId]: { ...this.state.data.tasks[draggableId], stats: newStats }
    };

    const newState = {
      ...this.state.data,
      tasks: newTasks,
      columns: {
        ...this.state.data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(state => ({ data: newState }));
    console.log(this.state.data);
  };


  render() {

    const { classes, theme } = this.props;

    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <div className={classes.root}>

          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} id="appBar" >
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
                💳 Instant Pay Form
            </Typography>
            </Toolbar>
          </AppBar>

          <nav className={classes.drawer} id="drawer">
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
                <DrawerElements data={this.state.data} btnSetState={this.btnSetState}></DrawerElements>

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
                <DrawerElements data={this.state.data} btnSetState={this.btnSetState}></DrawerElements>
              </Drawer>
            </Hidden>
          </nav>

          <main className={classes.content} id="main">
            <DndImage></DndImage>
            <NewDnd status='main' data={this.state.data} btnSetState={this.btnSetState}></NewDnd>
          </main>
        </div>
      </DragDropContext>
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