const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {

  construct() {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
  }
  middleware() {
    this.express.use(express.urlencoded({
      extended: false
    }))
  }

  view() {
    nunjucks.configure('views', path.resolve(__dirname, 'app', 'view'), {
      watch: this.isDev,
      express: this.express,
      autoscape: true
    })

    this.express.set('view engine', 'njk')
  }
}

module.exports = new App().express
