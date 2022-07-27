// ==UserScript==
// @name Abema 区域限制
// @description 区域限制
// @version 1.0.0
// @run-at document-start
// @namespace Violentmonkey Scripts
// @match https://abema.tv/*
// @grant none
// ==/UserScript==

Object.defineProperty(__CLIENT_REGION__, 'isAllowed', {
  get: () => true
});
Object.defineProperty(__CLIENT_REGION__, 'status', {
  get: () => false
});