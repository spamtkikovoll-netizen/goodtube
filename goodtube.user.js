// ================================================================================
//      ______                ________      __
//     / ____/___  ____  ____/ /_  __/_  __/ /_  ___
//    / / __/ __ \/ __ \/ __  / / / / / / / __ \/ _ \
//   / /_/ / /_/ / /_/ / /_/ / / / / /_/ / /_/ /  __/
//   \____/\____/\____/\____/ /_/  \____/_____/\___/
//
//
//	Hello friend, welcome to GoodTube.
//
//	This automatically loads the latest minified version using the "@require" tag below.
//	This means you will never need to manually update :)
//
//	To view the full source code go here:
//	https://github.com/goodtube4u/goodtube/blob/main/goodtube.js
//
// ================================================================================

// ==UserScript==
// @name         GoodTube (loader, CSP-safe)
// @namespace    http://tampermonkey.net/
// @version      3.02
// @description  Loader that pulls the real script via @require (bypasses YouTube CSP)
// @author       you
// @updateURL    https://raw.githubusercontent.com/goodtube4u/goodtube/main/goodtube.user.js
// @downloadURL  https://raw.githubusercontent.com/goodtube4u/goodtube/main/goodtube.user.js
// @require      https://raw.githubusercontent.com/goodtube4u/goodtube/main/goodtube.js
// @match        *://youtube.com/*
// @match        *://www.youtube.com/*
// @match        *://m.youtube.com/*
// @match        *://music.youtube.com/*
// @match        *://consent.youtube.com/*
// @run-at       document-start
// @inject-into  content
// ==/UserScript==
