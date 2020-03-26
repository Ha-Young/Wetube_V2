/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./assets/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoPlayer */ \"./assets/js/videoPlayer.js\");\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_videoPlayer__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/videoPlayer.js":
/*!**********************************!*\
  !*** ./assets/js/videoPlayer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var videoContainer = document.getElementById(\"jsVideoPlayer\");\nvar videoPlayer, playBtn, volumnBtn, fullScreenBtn, currentTime, totalTime, volumeRange, controls;\nvar timeout;\n\nfunction handlePlayClick() {\n  if (videoPlayer.paused) {\n    videoPlayer.play();\n    playBtn.innerHTML = '<i class=\"fas fa-pause\"></i>';\n  } else {\n    videoPlayer.pause();\n    playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\n  }\n}\n\nfunction handleVolumnClick() {\n  if (videoPlayer.muted) {\n    videoPlayer.muted = false;\n    volumnBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\n    volumeRange.value = videoPlayer.volume;\n  } else {\n    videoPlayer.muted = true;\n    volumnBtn.innerHTML = '<i class=\"fas fa-volume-mute\"></i>';\n    volumeRange.value = 0;\n  }\n}\n\nfunction exitFullScreen() {\n  fullScreenBtn.innerHTML = '<i class=\"fas fa-expand\"></i>';\n  fullScreenBtn.addEventListener(\"click\", handleFullScreenClick);\n  document.webkitExitFullscreen();\n}\n\nfunction handleFullScreenClick() {\n  if (videoContainer.webkitRequestFullscreen) {\n    videoContainer.webkitRequestFullscreen();\n  } else if (videoContainer.mozRequestFullscreen) {\n    videoContainer.mozRequestFullscreen();\n  } else if (videoContainer.requestFullscreen) {\n    videoContainer.requestFullscreen();\n  } else if (videoContainer.msRequestFullscreen) {\n    videoContainer.msRequestFullscreen();\n  }\n\n  fullScreenBtn.innerHTML = '<i class=\"fas fa-compress\"></i>';\n  fullScreenBtn.removeEventListener(\"click\", handleFullScreenClick);\n  fullScreenBtn.addEventListener(\"click\", exitFullScreen);\n}\n\nvar formatDate = function formatDate(seconds) {\n  var secondsNumber = parseInt(seconds, 10);\n  var hours = Math.floor(secondsNumber / 3600);\n  var minutes = Math.floor((secondsNumber - hours * 3600) / 60);\n  var totalSeconds = secondsNumber - hours * 3600 - minutes * 60;\n\n  if (hours < 10) {\n    hours = \"0\".concat(hours);\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\".concat(minutes);\n  }\n\n  if (totalSeconds < 10) {\n    totalSeconds = \"0\".concat(totalSeconds);\n  }\n\n  return \"\".concat(hours, \":\").concat(minutes, \":\").concat(totalSeconds);\n};\n\nfunction setTotalTime() {\n  var totalTimeString = formatDate(videoPlayer.duration);\n  totalTime.innerHTML = totalTimeString;\n  setInterval(getCurrentTime, 1000);\n}\n\nfunction getCurrentTime() {\n  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));\n}\n\nfunction handleEnded() {\n  videoPlayer.currentTime = 0;\n  playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\n}\n\nfunction handleVolumeRange(event) {\n  var value = event.target.value;\n  videoPlayer.volume = value;\n\n  if (value >= 0.6) {\n    volumnBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\n  } else if (value >= 0.2) {\n    volumnBtn.innerHTML = '<i class=\"fas fa-volume-down\"></i>';\n  } else {\n    volumnBtn.innerHTML = '<i class=\"fas fa-volume-off\"></i>';\n  }\n}\n\nfunction handleMouseMove(event) {\n  clearTimeout(timeout);\n  videoContainer.style.cursor = \"auto\";\n  controls.style.display = \"grid\";\n  timeout = setTimeout(function () {\n    videoContainer.style.cursor = \"none\";\n    controls.style.display = \"none\";\n  }, 2000);\n}\n\nfunction handleKeyDown(event) {\n  var code = event.code;\n  if (code === \"Space\") handlePlayClick();\n}\n\nfunction init() {\n  document.addEventListener(\"mousemove\", handleMouseMove);\n  videoPlayer = videoContainer.querySelector(\"video\");\n  videoPlayer.volume = 0.5;\n  playBtn = document.getElementById(\"jsPlayButton\");\n  volumnBtn = document.getElementById(\"jsVolumeBtn\");\n  fullScreenBtn = document.getElementById(\"jsFullScreen\");\n  currentTime = document.getElementById(\"currentTime\");\n  totalTime = document.getElementById(\"totalTime\");\n  volumeRange = document.getElementById(\"jsVolume\");\n  controls = videoContainer.querySelector(\".videoPlayer__controls\");\n  videoPlayer.addEventListener(\"loadeddata\", setTotalTime);\n  videoPlayer.addEventListener(\"ended\", handleEnded);\n  playBtn.addEventListener(\"click\", handlePlayClick);\n  volumnBtn.addEventListener(\"click\", handleVolumnClick);\n  fullScreenBtn.addEventListener(\"click\", handleFullScreenClick);\n  volumeRange.addEventListener(\"input\", handleVolumeRange);\n  document.addEventListener(\"keydown\", handleKeyDown);\n}\n\nif (videoContainer) {\n  init();\n}\n\n//# sourceURL=webpack:///./assets/js/videoPlayer.js?");

/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/scss/styles.scss?");

/***/ })

/******/ });