const static_di = "build/static/di/";

module.exports = {
  config: {
		port: 3000
  },
  routes: {
    root: "./",
    paths: {
      src: "src/",
      build: "build/"
    },
    build: {
      html: "build/html",
      css: static_di + "css",
      js: static_di + "js",
      img: static_di + "images"
    },
    html: {
      watch: "src/html",
      src: "src/html",
      dest: "build/html"
    },
    img: {
      src: "src/img",
      dest: static_di + "img"
    },
    scss: {
      watch: "src/scss",
      watch_components: "src/_scss",
      src: "src/scss",
      dest: static_di + "css"
    },
    css: {
      src: static_di + "css"
    },
    js: {
      watch: "src/js",
      src: "src/js",
      dest: static_di + "js"
    }
  }
}