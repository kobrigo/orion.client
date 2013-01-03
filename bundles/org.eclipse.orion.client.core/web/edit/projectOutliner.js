/*******************************************************************************
 * Copyright (c) <date> <contributor name> and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 * Contributors: HP Corporation - initial API and implementation
 ******************************************************************************/

/*global window define setTimeout */
/*jslint forin:true*/

//TODO: Add documentation headers to the functions here.

define(['i18n!orion/search/nls/messages', 'require',  'orion/section', 'orion/commands', 'orion/selection', 'orion/explorers/explorer', 'orion/EventTarget'],
	function(messages, require,  mSection, mCommands, mSelection, mExplorer, EventTarget) {

		//---Start--- The Model -----
		function MyDirectoryModel() {
			this._directoryList = ['foo', 'goo', 'bar'];
		}

		MyDirectoryModel.prototype = {
			getDirectories: function() {
				return this._directoryList;
			}
		};
		//---End---The Model -----

		//---Start--- The View -----
		function ProjectDirectoryRenderer() {
		}

		ProjectDirectoryRenderer.prototype = {
			render: function(model) {
				var ulElement = document.createElement('ul');
				for(var i; i < model._direcotryList.length; i++){
					var liElement = document.createElement('li');
					liElement.text = model._direcotryList[i];
					ulElement.appendChild(liElement);
				}
			}
		};
		//---End--- The View -----

		function ProjectDirecotryOutliner(options) {
			this._directoryModel = new MyDirectoryModel();
			this._outlineRenderer = new ProjectDirectoryRenderer();

			if (!options.serviceRegistry) {
				//TODO shout somehow about it.
			}

			//register this service as the outliner
			options.serviceRegistry.registerService('orion.edit.outliner', this, {
				contentType: ["application/javascript", "text/html"], // TODO separate out HTML outline
				nameKey: "Project Direcotry Outliner",
				nls: "orion/editor/nls/messages",
				id: "orion.edit.outliner.projectDirecotryOutliner"
			});
		}

		ProjectDirecotryOutliner.prototype = /** @lends orion.navoutliner.ProjectDirecotryOutliner.prototype */ {

			// this function returns the ouline model that has to fit the tree model that is used
			// in the editor generic outliner.
			getOutline: function(contents, title) {
				return [
					{ label: "foo1", children: null, line: 1, text: "a" },
					{ label: "foo2",
						children: [
							{ label: "goo1", children: null, line: 1, text: "a" },
							{ label: "goo2", children: null, line: 1, text: "a" }
						], line: 0, text: "a" },
					{ label: "foo3", children: null, line: 1, text: "a" },
					{ label: "foo4", children: null, line: 1, text: "a" }

				];
			},

			render: function(model) {
				this._outlineRenderer.render(this._directoryModel);
			},

			init: function() {
				//register this as an outliner in the page.
			}
		};

		ProjectDirecotryOutliner.prototype.constructor = ProjectDirecotryOutliner;

		return { ProejctDirecotryOutliner: ProjectDirecotryOutliner };

	});