import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {
  Grid,
  CssBaseline,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
import HttpsIcon from '@material-ui/icons/Https';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {encrypt, decrypt} from "../store/thunkCreators";

const styles = theme => ({
  root: {
    width: "80%",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    [theme.breakpoints.up('sm')]: {
      marginRight: "10px",
    },
  },
  output: {
    marginTop: "20px",
    backgroundColor: "current-color"
  }
});

class Home extends Component {

  constructor(props) {
    super(props);
    this.submitForm = React.createRef();
    this.input = React.createRef();
    this.output = React.createRef();
    this.status = "Result";
  }

  handleEncrypt = async () => {
    if (this.submitForm.current.reportValidity()) {
      await this.props.encrypt({"input": this.input.current.value});
      this.status = "Encrypted";
    }
  }

  handleDecrypt = async () => {
    if (this.submitForm.current.reportValidity()) {
      await this.props.decrypt({"input": this.input.current.value});
      this.status = "Decrypted";
    }
  }

  handleClear = () => {
    this.input.current.value = "";
  }

  handleCopy = () => {
    this.output.current.select();
    this.output.current.setSelectionRange(0, -1); /*For mobile devices*/
    document.execCommand("copy");
  }

  render() {
    const {classes} = this.props;

    return (
      <>
        <Grid className={classes.root}>
          <CssBaseline/>
          <Typography component="h1" variant="h4">
            Encrypter {this.props.version.encrypter}
          </Typography>
          <form ref={this.submitForm}>
            <Grid>
              <TextField
                aria-label="input"
                name="input"
                type="text"
                label="Enter either some text or a cypher"
                multiline
                rows={5}
                fullWidth
                margin="normal"
                variant="outlined"
                required
                inputRef={this.input}
              />
            </Grid>
            <Grid>
              <Button
                className={classes.button}
                onClick={this.handleEncrypt}
                variant="contained"
                color="primary"
                startIcon={<HttpsIcon/>}
              >
                Encrypt
              </Button>
              <Button
                className={classes.button}
                onClick={this.handleDecrypt}
                variant="contained"
                color="secondary"
                startIcon={<LockOpenIcon/>}
              >
                Decrypt
              </Button>
              <Button
                className={classes.button}
                onClick={this.handleClear}
                variant="contained"
                startIcon={<ClearAllIcon/>}
              >
                Clear
              </Button>
            </Grid>
          </form>
          {this.props.result &&
          <Grid>
            <Grid>
              <TextField
                className={classes.output}
                aria-label="result"
                name="result"
                type="text"
                label={this.status}
                multiline
                rowsMax={20}
                fullWidth
                margin="normal"
                variant="filled"
                readOnly
                inputRef={this.output}
                value={this.props.result}
              />
            </Grid>
            <Grid>
              <Button
                onClick={this.handleCopy}
                variant="contained"
                startIcon={<FileCopyIcon/>}
              >
                Copy
              </Button>
            </Grid>
          </Grid>
          }
        </Grid>
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    version: state.version,
    result: state.result,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    encrypt: (input) => {
      dispatch(encrypt(input));
    },
    decrypt: (cypher) => {
      dispatch(decrypt(cypher));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));

