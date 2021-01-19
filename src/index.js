import WebpackLogo from './assets/webpack-logo.png'
import * as $ from 'jquery'
import Post from './models/post.js'
import json from './assets/json.json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'


const post = new Post('Webpack Post Title', WebpackLogo)
console.log(post)
console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)
$('pre').addClass('code').html(post.toString())