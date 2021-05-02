import React, { useContext } from "react";
import "./Toggle.css";
import "./Tool.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ThemeContext } from "./ThemeProvider";
import AppBar from "./AppBar";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function Tool() {
  const state = useContext(ThemeContext);

  const classes = useStyles();

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  const toolContainer = {
    backgroundColor: state.theme.primary,
    height: "100%",
    padding: "6%",
  };
  const bottom = {
    backgroundColor: state.theme.primary,
    height: "20vh",
    padding: "6%",
  };
  const text = {
    color: state.theme.text,
  };
  const title = {
    color: state.theme.text,
    fontSize: "2.5em",
    fontFamily: "Work Sans",
  };
  const btn = {
    borderRadius: "25px",
    padding: "3px",
    width: "150px",
    fontFamily: "Work Sans",
    background: state.theme.primary,
    color: "#c5347d",
    border: "1px solid #c5347d",
    fontSize: "16px",
    transition: "1.5s",
    borderRadius: "100px",
    marginTop: "20%",
  };

  const scan = () => {};
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={toolContainer}>
        <div className="tool-container">
          <p style={title}>
            Harness the Power of
            <span className="rainbow-text"> Machine Learning</span> with
            Holographic Imaging
          </p>
          <div className="button-container">
            <button className="button" style={btn} onClick={scan}>
              start scanning
            </button>
            <button className="button" style={btn} onClick={openModal}>
              check setup
            </button>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Check Set Up</h2>
                <p id="transition-modal-description"></p>
              </div>
            </Fade>
          </Modal>

          <div className="frame">
            <div className="left">
              <blockquote
                cite="https://onlinelibrary.wiley.com/doi/full/10.1002/aisy.201900153"
                style={text}
              >
                "Microplastics (MPs) are a major environmental concern due to
                their possible impact on water pollution, wildlife, and the food
                chain. Reliable, rapid, and high‐throughput screening of MPs
                from other components of a water sample after sieving and/or
                digestion is still a highly desirable goal to avoid cumbersome
                visual analysis by expert users under the optical microscope."
              </blockquote>
            </div>
            <div className="right">
              <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/temp/lf20_iRxzMr.json"
                style={{ height: "500px", width: "500px", paddingTop: "6px" }}
              ></Player>
            </div>
          </div>
        </div>
        <div className="bottom-section" style={bottom}>
          <Carousel width={300} autoPlay={true} infiniteLoop={true}>
            <div className="bottom-section">
              <img src="./1.png" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="./2.png" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="./3.png" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="./4.png" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="./5.png" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
