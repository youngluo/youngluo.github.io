/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ed2733d2d80879f3ccf70c14c2b2dbaf"
  },
  {
    "url": "articles/centos-configure-ftp.html",
    "revision": "9f4bce4ae2f9333b5d29e2337efd81c6"
  },
  {
    "url": "articles/develop-angularjs-application-with-typescript.html",
    "revision": "a092aeeeaa90c9f98fee1165efbef528"
  },
  {
    "url": "articles/index.html",
    "revision": "3bf8693744bee370c69f7416742e6433"
  },
  {
    "url": "articles/vuepress-quick-start-guide.html",
    "revision": "61d7e28503c29c10e2f72b66570b2a1e"
  },
  {
    "url": "assets/css/1.styles.5a665903.css",
    "revision": "749ee8bf62352f89ccbdf1a90e6e807c"
  },
  {
    "url": "assets/css/2.styles.cbd24eb2.css",
    "revision": "ce7b74d69e825f7fb7fb8b4367ff88a5"
  },
  {
    "url": "assets/css/styles.38bd08f8.css",
    "revision": "f228bfd330a7816e908cce40f50d24b9"
  },
  {
    "url": "assets/img/20180513-181657.7fda0c75.png",
    "revision": "7fda0c75d4a3217ae012d3c2b36bab7c"
  },
  {
    "url": "assets/img/20180513-181919.75d0057e.png",
    "revision": "75d0057e8890a2170c1bed2b83339ee8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5a665903.js",
    "revision": "009539b614cf1f23bcee12135f94ed09"
  },
  {
    "url": "assets/js/2.cbd24eb2.js",
    "revision": "0c191ff380079c64f9a1f7fba059d81f"
  },
  {
    "url": "assets/js/3.0fffe53e.js",
    "revision": "55da6db99ee9b010be5de96c7cd71a38"
  },
  {
    "url": "assets/js/4.8faeaebd.js",
    "revision": "ff05a31c582956733ed4dfcfb26123cf"
  },
  {
    "url": "assets/js/5.ad7cfea2.js",
    "revision": "f338b127890a94e68f3fc673ef956088"
  },
  {
    "url": "assets/js/6.e3e92c0b.js",
    "revision": "b52d88bfc02ebac0e0feb1da9a2b7008"
  },
  {
    "url": "assets/js/7.faa0b71a.js",
    "revision": "fb7bd7be8acd242e82e399e2f7223753"
  },
  {
    "url": "assets/js/app.38bd08f8.js",
    "revision": "a570f373fd0e50671a77a34fcfce4cb4"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "ec739fc0aecfec16d73115351cb6fee6"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "3ebd69caa4519e8fa4505a1367f3a38c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "e3ca597e5ffa0eff57560bd490aacd6a"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "521b761d35bbdededcf8de531d4b53a4"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "0309af0252d38238bb1586b5536eaa64"
  },
  {
    "url": "index.html",
    "revision": "37b0b5cb2ac3685361a147d967773a35"
  },
  {
    "url": "logo.png",
    "revision": "15d9a073869a8e608d1fbe62e9119c55"
  },
  {
    "url": "logo.svg",
    "revision": "ca1e34c8efcf1d183b107795fcf19dfd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
