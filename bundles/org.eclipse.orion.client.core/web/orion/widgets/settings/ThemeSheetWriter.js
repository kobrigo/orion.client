/*******************************************************************************
 * @license
 * Copyright (c) 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: Anton McConville - IBM Corporation - initial API and implementation
 ******************************************************************************/
/*global dojo dijit widgets orion  window console define localStorage*/
/*jslint browser:true*/

define(['i18n!orion/settings/nls/messages', 'require', 'dojo', 'dijit', 'orion/util', 'orion/commands', 'orion/globalCommands', 'orion/PageUtil', 'orion/widgets/settings/ThemeClass'], 
	function(messages, require, dojo, dijit, mUtil, mCommands, mGlobalCommands, PageUtil, ThemeClass) {
		
		var navbar = '#333';
		var button = '#777777';
		var location = '#EFEFEF';
		var selection = 'FEC';
		var sidepanel = '#FBFBFB';
		var navtext = '#bfbfbf';
		var content = '#3087B3';
		var search = '#444';
		
		function ThemeSheetWriter(){
		}
		
		ThemeSheetWriter.prototype.navbar = navbar;
		ThemeSheetWriter.prototype.button = button;
		ThemeSheetWriter.prototype.location = location;
		ThemeSheetWriter.prototype.selection = selection;
		ThemeSheetWriter.prototype.sidepanel = sidepanel;
		ThemeSheetWriter.prototype.navtext = navtext;
		ThemeSheetWriter.prototype.content = content;
		ThemeSheetWriter.prototype.search = search;
		
		function writeNavigationStyle(){
		
			var styleBlock = '';
		
			var styles = [];
		
			var orionPage = new ThemeClass.ThemeClass( 'orionPage' );
			orionPage.style.backgroundColor = '#fdfdfd';
			orionPage.style.width = '100%';
			orionPage.style.height = '100%';
			
			styles.push( orionPage );
			
			var topRowBanner = new ThemeClass.ThemeClass( 'topRowBanner' );
			topRowBanner.style.margin = '0';
			topRowBanner.style.border = '0';
			topRowBanner.style.backgroundColor = this.navbar;
			topRowBanner.style.background = '-webkit-gradient(linear, left top, left bottom, color-stop(0%,' + this.navbar + '), color-stop(100%,' + this.navbar + '))';
			topRowBanner.style.background = '-moz-linear-gradient(top,' + this.navbar + '0%,' + this.navbar + '100%)';
			topRowBanner.style.height = '28px';
			
			styles.push( topRowBanner );
			
			var a = new ThemeClass.ThemeClass( 'a' );
			a.style.cursor = 'hand';
			a.style.textDecoration = 'none';
			a.style.color = this.navtext;
			
			styles.push( a );

			var aVisited = new ThemeClass.ThemeClass( 'a:visited' );
			aVisited.style.color = this.content;
			
			styles.push( aVisited );
			
			var aActive = new ThemeClass.ThemeClass( 'a:active' );
			aActive.style.color = this.content;
			
			styles.push( aActive );
			
			var aHover = new ThemeClass.ThemeClass( 'a:hover' );
			aHover.style.textDecoration = 'underline';
			aHover.style.color = this.content;
			
			styles.push( aHover );
			
			var primaryNav = new ThemeClass.ThemeClass( 'primaryNav' );
			primaryNav.style.color = this.navtext;
			primaryNav.style.fontSize = '8pt';
			primaryNav.style.fontWeight = 'normal';
			primaryNav.style.paddingTop = '6px';
			primaryNav.style.verticalAlign = 'baseline';
			
			styles.push( primaryNav );
			
			var primaryNavA = new ThemeClass.ThemeClass( 'primaryNav a' );
			primaryNavA.style.fontSize = '8pt'; 
			primaryNavA.style.color = this.navtext;
			primaryNavA.style.marginRight = '6px';
			primaryNavA.style.marginLeft = '6px'; 
			primaryNavA.style.verticalAlign = 'baseline';
			primaryNavA.style.textDecoration = 'none';
			
			styles.push( primaryNavA );
			
			var primaryNavAhover = new ThemeClass.ThemeClass( 'primaryNav a:hover' );
			primaryNavAhover.style.color = '#bfbfbf';
			primaryNavAhover.style.cursor = 'hand';
			primaryNavAhover.style.color = 'white';
			primaryNavAhover.style.fontWeight = 'normal';

			styles.push( primaryNavAhover );
			
			for( var s in styles ){
				styleBlock = styleBlock + styles[s].toString();
			}
						     
			return styleBlock;
		}
		
		ThemeSheetWriter.prototype.writeNavigationStyle = writeNavigationStyle;
		
		function writeLocationStyle(){
		
			var styleBlock = '';
		
			var styles = [];
			
			var titleArea = new ThemeClass.ThemeClass( 'titleArea' );
			titleArea.style.margin = '0';
			titleArea.style.paddingTop = '5px';
		    titleArea.style.border = '0';
		    titleArea.style.background = this.location;
			titleArea.style.background = '-webkit-gradient(linear, left top, left bottom, color-stop(0%,' + this.location + '), color-stop(100%,' + this.location + '))';
//		    titleArea.style.background = '-moz-linear-gradient(top, ' + this.location + ' 0%, ' + this.location + ' 100%)';
		    titleArea.style.borderBottom = '1px solid ' + this.location ;
		    titleArea.style.minHeight = '20px';
		    
		    styles.push( titleArea );

			var breadcrumb = new ThemeClass.ThemeClass( 'breadcrumb' );
			breadcrumb.style.fontSize = '8pt';
			breadcrumb.style.textDecoration = 'none';
			breadcrumb.style.color = this.content;
			breadcrumb.style.paddingTop = '2px';
			
			styles.push( breadcrumb );
			
			var aBreadcrumbHover = new ThemeClass.ThemeClass( 'a.breadcrumb:hover' );
			aBreadcrumbHover.style.textDecoration = 'none';
			aBreadcrumbHover.style.borderBottom = '1px dotted';
			aBreadcrumbHover.style.color = '#F58B0F';
			aBreadcrumbHover.style.cursor = 'pointer';
			
			styles.push( aBreadcrumbHover );
			
			var aBreadcrumbVisited = new ThemeClass.ThemeClass( 'a.breadcrumb:visited' );
			aBreadcrumbVisited.style.color = this.content;
			
			styles.push( aBreadcrumbVisited );

			var breadcrumbSeparator = new ThemeClass.ThemeClass( 'breadcrumbSeparator' );
			breadcrumbSeparator.style.fontSize = '8pt';
			breadcrumbSeparator.style.textDecoration = 'none';
			breadcrumbSeparator.style.color = this.navbar;
			breadcrumbSeparator.style.fontWeight = 'bold';
			
			styles.push( breadcrumbSeparator );
			
			var currentLocation = new ThemeClass.ThemeClass( 'currentLocation' );
			currentLocation.style.fontWeight = 'bold';
			currentLocation.style.fontSize = '8pt';
			currentLocation.style.color = '#444'; // should be a separate themeable item but hard coded for now.
			currentLocation.style.textDecoration = 'none';
			currentLocation.style.textWrap = 'normal';
			currentLocation.style.lineHeight = '10pt';
			
			styles.push( currentLocation );
			
			var currentLocationHover = new ThemeClass.ThemeClass( 'a.currentLocation:hover' );
			currentLocationHover.style.fontWeight = 'bold';
			currentLocationHover.style.fontSize = '10pt';
			currentLocationHover.style.color = '#666666';
			currentLocationHover.style.textDecoration = 'none';
			currentLocationHover.style.borderBottom = '0';
			
			styles.push( currentLocationHover );
			
			for( var s in styles ){
				styleBlock = styleBlock + styles[s].toString();
			}
			
			return styleBlock;
		}
		
		ThemeSheetWriter.prototype.writeLocationStyle = writeLocationStyle;
		
		function writeSidePanelStyle(){
		
		}
		
		function writeButtonStyle(){
		
			var styleBlock = '';
			var styles = [];
		
			var commandButton = new ThemeClass.ThemeClass( 'commandButton' );
			commandButton.style.color = '#222';
			commandButton.style.border = '1px solid #dedede'; // see https://bugs.eclipse.org/bugs/show_bug.cgi?id=386702#c2 
			commandButton.style.backgroundColor = '#efefef';
			commandButton.style.textAlign = 'center';
			commandButton.style.verticalAlign = 'baseline';
			commandButton.style.cursor = 'pointer';
		    commandButton.style.display = 'inline-block';
		    commandButton.style.padding = '6px';
			commandButton.style.paddingTop = '4px'; /* To align with Command Menu */
		    commandButton.style.borderRadius = '1px';
		    commandButton.style.lineHeight = '12px';
			commandButton.style.fontSize = '8pt';
			commandButton.style.userSelect = 'none';
			//	-webkit-touch-callout: none;
			//	-webkit-user-select: none;
			//	-khtml-user-select: none;
			//	-moz-user-select: none;
			//	-ms-user-select: none;
			styles.push( commandButton );
			
			var commandButtonOver = new ThemeClass.ThemeClass( 'commandButton:over' );
			commandButtonOver.style.backgroundColor = '#e6e6e6';
			commandButtonOver.style.border = '1px solid #808080';
			styles.push( commandButtonOver );

			var commandMenu = new ThemeClass.ThemeClass( 'commandMenu' );
			commandMenu.style.color = '#222';
			commandMenu.style.display = 'inline-block';
			commandMenu.style.verticalAlign = 'baseline';
			commandMenu.style.margin = '0';
			commandMenu.style.fontSize = '8pt';
			commandMenu.style.fontWeight = 'normal';
			commandMenu.style.border = '1px solid #dedede'; // see https://bugs.eclipse.org/bugs/show_bug.cgi?id=386702#c2
			commandMenu.style.backgroundColor = '#efefef';
		    commandMenu.style.cursor = 'pointer';
		    commandMenu.style.borderRadius = '1px';
			styles.push( commandMenu );
	
			var commandMenuItem = new ThemeClass.ThemeClass( 'commandMenuItem' );
			commandMenuItem.style.border = '0';
			commandMenuItem.style.padding = '0';
			commandMenuItem.style.margin = '0';
			styles.push( commandMenuItem );
			
			for( var s in styles ){
				styleBlock = styleBlock + styles[s].toString();
			}
			
			return styleBlock;
		}
		
		ThemeSheetWriter.prototype.writeButtonStyle = writeButtonStyle;
		
		function writeMainStyle(){
		
			var styleBlock = '';
		
			var styles = [];
			
			var searchbox = new ThemeClass.ThemeClass( 'searchbox' );
			searchbox.style.backgroundImage = 'url(../images/core_sprites.png)';
		    searchbox.style.backgroundRepeat = 'no-repeat'; 
		    searchbox.style.backgroundPosition = '4px -297px'; 
			searchbox.style.width = '12px'; 
			searchbox.style.height = '12px';
		    searchbox.style.backgroundColor = this.search;
			searchbox.style.border = '1px solid #222';
			searchbox.style.fontSize = '11px';
			searchbox.style.width = '15em';
			searchbox.style.height = '16px';
			searchbox.style.borderRadius = '10px'; /* 10px */
			searchbox.style.color = '#999';
			searchbox.style.padding = '0';
			searchbox.style.paddingLeft = '20px';
			searchbox.style.marginLeft = '5px';
			searchbox.style.marginTop = '6px !important';
			searchbox.style.font = '7pt Lucida Sans Unicode,Lucida Grande,Verdana,Arial,Helvetica,Myriad,Tahoma,clean,sans-serif !important';
			
			styles.push( searchbox );
			
			var searchboxFocus = new ThemeClass.ThemeClass( 'searchbox:focus' );
			searchboxFocus.style.color = 'white';
			searchboxFocus.style.outline = 'none';
			
			styles.push( searchboxFocus );
			
			var checkedRow = new ThemeClass.ThemeClass( 'checkedRow' );
			checkedRow.style.background = this.selection; /* was e3e3e3 */
			
			styles.push( checkedRow );
			
			var navItemSelected = new ThemeClass.ThemeClass( 'navbar-item-selected' );
			navItemSelected.style.background = this.selection;
			navItemSelected.style.color = this.content;
			
			styles.push( navItemSelected );
			
			var auxpane = new ThemeClass.ThemeClass( 'auxpane' );
			auxpane.style.border = '0';
			auxpane.style.background = this.sidepanel;
			auxpane.style.background = '-webkit-gradient(linear, left top, left bottom, color-stop(0%,' + this.sidepanel + '), color-stop(100%,' + this.sidepanel + '))';
			auxpane.style.background ='-moz-linear-gradient(top, ' + this.sidepanel + ' 0%, ' + this.sidepanel + ' 100%)';
			auxpane.style.overflowX = 'auto';
			auxpane.style.minWidth = '200px';
			auxpane.style.paddingTop = '16px';
			
			styles.push( auxpane );

			for( var s in styles ){
				styleBlock = styleBlock + styles[s].toString();
			}
			
			return styleBlock;
		}
		
		ThemeSheetWriter.prototype.writeMainStyle = writeMainStyle;
		
		function render( anchor ){
			console.log( this.writeNavigationStyle() );
			console.log( this.writeLocationStyle() );
			console.log( this.writeMainStyle() );
			console.log( this.writeButtonStyle() );
		}
		
		ThemeSheetWriter.prototype.render = render;
		
		function getSheet( settings ){
		
			if( settings.navbar.value ){	
				this.navbar = settings.navbar.value;
				this.button = settings.button.value;
				this.location = settings.location.value;
				this.selection = settings.selection.value;
				this.sidepanel = settings.sidepanel.value;
				this.navtext = settings.navtext.value;
				this.search = settings.search.value;
				this.content = settings.content.value;
			}else{
				this.navbar = settings.navbar;
				this.button = settings.button;
				this.location = settings.location;
				this.selection = settings.selection;
				this.sidepanel = settings.sidepanel;
				this.navtext = settings.navtext;
				this.search = settings.search;
				this.content = settings.content;
			}
			
			var sheet = this.writeNavigationStyle() + this.writeLocationStyle() + this.writeMainStyle() + this.writeButtonStyle();
			
			return sheet;
		}
		
		ThemeSheetWriter.prototype.getSheet = getSheet;

		return{
			ThemeSheetWriter:ThemeSheetWriter
		};

	}
);