/*******************************************************************************
 * Copyright (c) 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*global __dirname console require*/
var fs = require('fs');
var path = require('path');

/* Sadly, Orion client code requires Dojo 1.6.1, which contains a package.json file that cannot be consumed 
 * by npm due to a missing "version" identifier [1] which was only added in the 1.7 stream [2].
 *
 * As a workaround, this script can be run post-install. It downloads version 1.6.1 of dojo, dijit and dojox,
 * and installs them into a node_modules/org.dojotoolkit/ directory.
 *
 * [1] https://github.com/dojo/dojo/tree/0dddc5a0bfe3708e4ba829434602da51cbb041b7/package.json
 * [2] http://bugs.dojotoolkit.org/ticket/12673
 */
var repos = ['dojo', 'dijit', 'dojox'];
var tag = '1.6.1';

function printErr(err) {
	if (err) { console.log(err); }
}

function find_node_modules_dir(callback) {
	function has_node_modules(dir, cb) {
		console.log('Checking ' + dir);
		fs.stat('node_modules', function(err, stats) {
			printErr(err);
			cb(stats.isDirectory(), path.normalize(path.join(dir, 'node_modules/')));
		});
	}
	console.log('Looking for "node_modules" directory...');
	var dir = __dirname;
	has_node_modules(dir, function(found, nodeModulesDir) {
		if (found) {
			console.log('Found it! ' + nodeModulesDir);
			callback(dir);
		} else {
			has_node_modules(dir.resolve(dir, '../'), callback);
		}
	});
}

function download(node_modules_dir) {
	
}

function run() {
	console.log('Installing dojo ' + tag + '...');
	find_node_modules_dir(function(node_modules_dir) {
		download_junk(node_modules_dir).then(
		extract_junk(node_modules_dir)
	});
}

// start here
run();
