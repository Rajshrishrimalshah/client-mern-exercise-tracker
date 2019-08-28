// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

// import { withStyles } from "@material-ui/core/styles";

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flex: 1
//   },
//   button: {
//     margin: theme.spacing(1),
//     padding: "10px"
//   }
// });

// function Navbar(props) {
//   const classes = props;

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             className={classes.title}
//             style={{ flex: 1 }}
//           >
//             Exercise Tracker
//           </Typography>

//           <div className={classes.container}>
//             <Link to="/">
//               <Button
//                 variant="text"
//                 color="primary"
//                 size="small"
//                 className={classes.button}
//               >
//                 Exercise Tracker
//               </Button>
//             </Link>

//             <Link to="/">
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="small"
//                 className={classes.button}
//               >
//                 Exercises
//               </Button>
//             </Link>

//             <Link to="/create">
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="small"
//                 className={classes.button}
//               >
//                 Create Exercise Log
//               </Button>
//             </Link>

//             <Link to="/user">
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="small"
//                 className={classes.button}
//               >
//                 Create User
//               </Button>
//             </Link>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// export default withStyles(styles)(Navbar);
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  "@global": {
    body: {
      //backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    // borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    marginRight: "0.4rem",
    listStyle: "none",
    textDecoration: "none"
  },
};

function Navbar(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Exercise Tracker
          </Typography>

          <Link to="/" className={classes.link}>
            <Button color="primary" variant="outlined" className={classes.link}>
              Exercise Tracker
            </Button>
          </Link>

          <Link to="/" className={classes.link}>
            <Button color="primary" variant="outlined" className={classes.link}>
              Exercises
            </Button>
          </Link>

          <Link to="/create" className={classes.link}>
            <Button
              color="primary"
              variant="outlined"
              className={(classes.link)}
            >
              Create Exercise Log
            </Button>
          </Link>

          <Link to="/user" className={classes.link}>
            <Button color="primary" variant="outlined" className={classes.link}>
              Create User
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Navbar);
