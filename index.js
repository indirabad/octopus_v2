import "bootstrap/dist/css/bootstrap.min.css";
import "./public/assets/scss/main.scss";
import "bootstrap";
import { initHeaderAnimation, initTitleBrush } from "./src/header";
import "velocity-animate";
import "jquery";
import { initPointer } from "./src/header/pointer";

initHeaderAnimation();
initTitleBrush();
initPointer();