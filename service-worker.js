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
    "revision": "44b26f081580ff0f3276d5ecb5b58aa0"
  },
  {
    "url": "about/index.html",
    "revision": "e4edddb0b92bc28756ad50a541c28b32"
  },
  {
    "url": "assets/css/0.styles.7dfd0c4f.css",
    "revision": "cb34ed961f9e52055b344e7238a248b2"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.cc682177.js",
    "revision": "8928e67a1238ce2055df99d2934f762c"
  },
  {
    "url": "assets/js/11.47642b5b.js",
    "revision": "eaca2fe76a4e6895aa59ebd3b80b5c73"
  },
  {
    "url": "assets/js/12.3f25b8aa.js",
    "revision": "c2e0c7af71215da71aa1c94d9a3d740a"
  },
  {
    "url": "assets/js/13.fac59334.js",
    "revision": "26b6fde45f7328968b7a5a53d0479990"
  },
  {
    "url": "assets/js/14.e5c16d6a.js",
    "revision": "e2afad9a5c08b0220f8c5c4f6e8e8fcb"
  },
  {
    "url": "assets/js/15.e0fc1782.js",
    "revision": "e27ac1433db13d892ddb955a1d6d9665"
  },
  {
    "url": "assets/js/16.75162181.js",
    "revision": "dac0b1159936b5c23d4eafc15d689d5a"
  },
  {
    "url": "assets/js/17.e6a1e870.js",
    "revision": "3a076dd2c8234dc5bdaa450dc97866bc"
  },
  {
    "url": "assets/js/18.f4d03e21.js",
    "revision": "cea3db396f1f18f084ee3d2c2f8f0b86"
  },
  {
    "url": "assets/js/19.e22187ee.js",
    "revision": "a58623548df83125f4a2a81e31bc15b8"
  },
  {
    "url": "assets/js/2.99851fc7.js",
    "revision": "943314c1b0634310911c4492a70197b9"
  },
  {
    "url": "assets/js/20.5645eb85.js",
    "revision": "3cd72d2cf61d6905166da30141acaeb2"
  },
  {
    "url": "assets/js/21.f98b5dc7.js",
    "revision": "874695c0571980a7549bb18891c3899e"
  },
  {
    "url": "assets/js/22.ffbcb595.js",
    "revision": "431f68d3823700f9c6bbd7beba33c9e5"
  },
  {
    "url": "assets/js/23.3a54d90f.js",
    "revision": "6463a972b1d4f65e279d232f092a6be2"
  },
  {
    "url": "assets/js/3.14ac67ba.js",
    "revision": "38bbba97d9817a165462251baf311b6e"
  },
  {
    "url": "assets/js/4.21c4c4b0.js",
    "revision": "0cacecc4c48948d829812838ca6ffdf8"
  },
  {
    "url": "assets/js/5.340cf26a.js",
    "revision": "bf88f771d4588c22b5ed9f2970be909d"
  },
  {
    "url": "assets/js/6.4cd6951d.js",
    "revision": "edb0412955c4ef6c7966f58106c28cc8"
  },
  {
    "url": "assets/js/7.7059d05c.js",
    "revision": "4ef54a734e201faf5ecf861b775b6d50"
  },
  {
    "url": "assets/js/8.aaf9a9e3.js",
    "revision": "fe184042d8f7c99a9e72103a9033b2dc"
  },
  {
    "url": "assets/js/9.a2f5ca16.js",
    "revision": "d8802437c1d3b343bb7bc064365496c5"
  },
  {
    "url": "assets/js/app.5adc1e86.js",
    "revision": "be52776c7f4ce3bfb788afdd897293ff"
  },
  {
    "url": "img/java/jdk.jpg",
    "revision": "d60d414747ec83aeb164f09136b5759c"
  },
  {
    "url": "img/java/jre.jpg",
    "revision": "afef14488636da3749bae2ebd6d8130d"
  },
  {
    "url": "img/java/jvm_architecture.jpg",
    "revision": "1c5593c05bcb2563524f8148aabd19a3"
  },
  {
    "url": "img/java/JVM.jpg",
    "revision": "a09ec142e80f9e7446bf91139c9772b2"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "e05c577b62d37335b25bc493b45b9058"
  },
  {
    "url": "index.html",
    "revision": "fdca5b3d8ccba7e69d9bf461292e1349"
  },
  {
    "url": "life/2019-05-26.html",
    "revision": "8a2f81f63d8f5f06fa4883a40c173eb1"
  },
  {
    "url": "life/index.html",
    "revision": "97a844203f4eaf89c6735070c7d543d0"
  },
  {
    "url": "massage/index.html",
    "revision": "9cdb829f002e8c4d9c9a5f9855600740"
  },
  {
    "url": "ponder/index.html",
    "revision": "916821cbdb196be353a92d9cc9451483"
  },
  {
    "url": "tags/index.html",
    "revision": "9ebdfc3791ec0d4f1cfffb5d7a7c068d"
  },
  {
    "url": "technology/index.html",
    "revision": "fb59241a4468ac3aa08dc9327c6f90ec"
  },
  {
    "url": "technology/java/tutorials/first-java-program.html",
    "revision": "ceffb3c48b3161da963b8bf903c80c8d"
  },
  {
    "url": "technology/java/tutorials/introduction-to-java.html",
    "revision": "e45a920e97e17b499719c85d140ce082"
  },
  {
    "url": "technology/java/tutorials/java-tutorial-for-beginners-with-examples.html",
    "revision": "83bc776e0563d9f3ce77277f5c6daf76"
  },
  {
    "url": "technology/java/tutorials/jvm.html",
    "revision": "bffc07f3170ecd2425e2a8725e95aa43"
  },
  {
    "url": "technology/java/tutorials/variables-in-java.html",
    "revision": "60cfd0e78f216e4b9adb95d75ba6bf75"
  },
  {
    "url": "timeLine/index.html",
    "revision": "3db8020648d75b2e5b7cc037767a718a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
