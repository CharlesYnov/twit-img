#!/usr/bin/env node
const download = require('image-downloader')
const Twitter = require('twitter')
const config = require('./config')
const inquirer = require('inquirer')
const makeDir = require('make-dir')

var path
var count = 0

function getData(err, data, response) {
	var tweet = data.statuses


	for (var i = 0; i < tweet.length; i++) {
		if ( typeof tweet[i].entities.media !== 'undefined') {
			var URL = tweet[i].entities.media[0].media_url_https
			downloadImage(URL)
			count ++
		}
	}
	console.log(count+' images téléchargée(s)')
}

function downloadImage(URL) {
	const options = {
	  url: URL,
	  dest: path,
	  done: function(err, filename, image) {
	    if (err) {
	      throw err
	    }
	  }
	}
	download(options)
}

function promptText() {
	return inquirer.prompt([{
		type: 'input',
		message: 'Entrez le texte à chercher : ',
		name: 'text'},
	
	])
}

function promptNumber() {
	return inquirer.prompt([{
		type: 'input',
		message: 'Entrez le nombre d\'images à chercher : ',
		name: 'number'},
	
	])
}
		
async function launch(){
	let text = await promptText()
	let number = await promptNumber()	

	text = text.text
	number = number.number

	console.log(text)
	console.log(number)	

	var params = { 
			q: text+' filter:twimg -filter:retweets',
			lang: 'fr',
			count: number,
		}

	path = '../images/'+text

	makeDir(path)

	var T = new Twitter(config)
	T.get('search/tweets', params, getData)

	}


launch()





