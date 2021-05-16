import React, {Component} from 'react';
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import {
  Grid,
  CssBaseline,
  Paper,
  Typography,
  Link
} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'

const styles = {
  root: {
    width: "75%",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  table: {
    marginTop: "20px",
  },
  changelogText: {
    marginTop: "20px",
    marginBottom: "20px",
    borderBottom: "1px solid lightgrey"
  },
};

class About extends Component {

  render() {
    const {classes} = this.props;
    return (
      <>
        <Grid className={classes.root}>
          <CssBaseline/>
          <Grid>
            <Typography component="h1" variant="h4">
              {process.env.REACT_APP_TITLE}
            </Typography>
            <Typography variant="subtitle1">
              By <Link href="https://www.shangruli.com/">Shangru Li</Link>
            </Typography>
          </Grid>
          <Grid>
            <TableContainer component={Paper} className={classes.table}>
              <Table aria-label="info table">
                <TableHead>
                  <TableRow>
                    <TableCell>Server status</TableCell>
                    <TableCell>Webapp version</TableCell>
                    <TableCell>Script version</TableCell>
                    <TableCell>API version</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{this.props.status}</TableCell>
                    <TableCell>{process.env.REACT_APP_VERSION}</TableCell>
                    <TableCell>{this.props.version.encrypter}</TableCell>
                    <TableCell>{this.props.version.api}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid>
            <Typography component="h2" variant="h5" className={classes.changelogText}>
              Changelog
            </Typography>
            <div>
              <Typography component="h5" variant="h6">
                Version 1.0.0 <small>(5/16/2021)</small>
              </Typography>
              <ul>
                <li>
                  Initial release.
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    status: state.status,
    version: state.version,
  };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(About));

