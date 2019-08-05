'use strict';
import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('crossword.show', () => {
			const panel = vscode.window.createWebviewPanel(
				'crossword',
				'Crossword',
				vscode.ViewColumn.One
			);

			// Get path to resource on disk
			const onDiskPath = vscode.Uri.file(
				path.join(context.extensionPath, 'public', 'crossword.css')
			  );
		
			// And get the special URI to use with the webview
			const stylesheet = onDiskPath.with({ scheme: 'vscode-resource' });
			console.log(stylesheet);
			panel.webview.html = getWebviewContent(stylesheet);
		})
	);
}

function getWebviewContent(stylesheet: vscode.Uri) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="${stylesheet}">
	<title>Cat Coding</title>
</head>
<body>
<input type="checkbox" name="checkvaliditems" id="checkvaliditems" />
<label for="checkvaliditems">Check for valid squares</label>

<div class="crossword-board-container">

	<div class="crossword-board">
		<!-- ROW 1 -->
		<input id="item1-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[sS]{1}$" required="required" value="" />
		<input id="item1-2" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[hH]{1}$" required="required" value="" />
		<input id="item1-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<input id="item1-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[oO]{1}$" required="required" value="" />
		<input id="item1-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[uU]{1}$" required="required" value="" />
		<input id="item1-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[dD]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item1-7"></span>
		<span class="crossword-board__item--blank" id="item1-8"></span>
		<input id="item1-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item1-10"></span>
		<input id="item1-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item1-12"></span>
		<input id="item1-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[fF]{1}$" required="required" value="" />
		<!-- ROW 1 -->

		<!-- ROW 2 -->
		<input id="item2-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item2-2"></span>
		<span class="crossword-board__item--blank" id="item2-3"></span>
		<input id="item2-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item2-5"></span>
		<input id="item2-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item2-7" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[dD]{1}$" required="required" value="" />
		<input id="item2-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item2-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[mM]{1}$" required="required" value="" />
		<input id="item2-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[sS]{1}$" required="required" value="" />
		<input id="item2-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item2-12" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<input id="item2-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<!-- ROW 2 -->

		<!-- ROW 3 -->
		<input id="item3-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item3-2"></span>
		<input id="item3-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[sS]{1}$" required="required" value="" />
		<input id="item3-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item3-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<input id="item3-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item3-7"></span>
		<span class="crossword-board__item--blank" id="item3-8"></span>
		<input id="item3-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item3-10"></span>
		<input id="item3-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item3-12"></span>
		<input id="item3-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<!-- ROW 3 -->

		<!-- ROW 4 -->
		<input id="item4-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[gG]{1}$" required="required" value="" />
		<input id="item4-2" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<input id="item4-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item4-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<input id="item4-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<input id="item4-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[sS]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item4-7"></span>
		<input id="item4-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[oO]{1}$" required="required" value="" />
		<input id="item4-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<input id="item4-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[pP]{1}$" required="required" value="" />
		<input id="item4-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[hH]{1}$" required="required" value="" />
		<input id="item4-12" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item4-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[nN]{1}$" required="required" value="" />
		<!-- ROW 4 -->

		<!-- ROW 5 -->
		<input id="item5-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[hH]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item5-2"></span>
		<input id="item5-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[nN]{1}$" required="required" value="" />
		<input id="item5-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[oO]{1}$" required="required" value="" />
		<input id="item5-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[dD]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item5-6"></span>
		<input id="item5-7" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[fF]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item5-8"></span>
		<input id="item5-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item5-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<input id="item5-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<input id="item5-12" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<input id="item5-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<!-- ROW 5 -->

		<!-- ROW 6 -->
		<input id="item6-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<input id="item6-2" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<input id="item6-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<input id="item6-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item6-5"></span>
		<input id="item6-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[jJ]{1}$" required="required" value="" />
		<input id="item6-7" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<input id="item6-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<input id="item6-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<input id="item6-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[yY]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item6-11"></span>
		<input id="item6-12" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item6-13"></span>
		<!-- ROW 6 -->

		<!-- ROW 7 -->
		<span class="crossword-board__item--blank" id="item7-1"></span>
		<input id="item7-2" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[nN]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item7-3"></span>
		<span class="crossword-board__item--blank" id="item7-4"></span>
		<input id="item7-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[dD]{1}$" required="required" value="" />
		<input id="item7-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item7-7" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<input id="item7-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<input id="item7-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[dD]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item7-10"></span>
		<span class="crossword-board__item--blank" id="item7-11"></span>
		<input id="item7-12" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item7-13"></span>
		<!-- ROW 7 -->

		<!-- ROW 8 -->
		<span class="crossword-board__item--blank" id="item8-1"></span>
		<input id="item8-2" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item8-3"></span>
		<input id="item8-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[hH]{1}$" required="required" value="" />
		<input id="item8-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item8-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[bB]{1}$" required="required" value="" />
		<input id="item8-7" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<input id="item8-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item8-9"></span>
		<input id="item8-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[vV]{1}$" required="required" value="" />
		<input id="item8-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<input id="item8-12" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[sS]{1}$" required="required" value="" />
		<input id="item8-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<!-- ROW 8 -->

		<!-- ROW 9 -->
		<input id="item9-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<input id="item9-2" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[nN]{1}$" required="required" value="" />
		<input id="item9-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[fF]{1}$" required="required" value="" />
		<input id="item9-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[uU]{1}$" required="required" value="" />
		<input id="item9-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[nN]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item9-6"></span>
		<input id="item9-7" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[dD]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item9-8"></span>
		<input id="item9-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[bB]{1}$" required="required" value="" />
		<input id="item9-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<input id="item9-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[dD]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item9-12"></span>
		<input id="item9-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[wW]{1}$" required="required" value="" />
		<!-- ROW 9 -->

		<!-- ROW 10 -->
		<input id="item10-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[sS]{1}$" required="required" value="" />
		<input id="item10-2" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<input id="item10-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<input id="item10-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<input id="item10-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[cC]{1}$" required="required" value="" />
		<input id="item10-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item10-7"></span>
		<input id="item10-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[nN]{1}$" required="required" value="" />
		<input id="item10-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<input id="item10-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[gG]{1}$" required="required" value="" />
		<input id="item10-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item10-12" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<input id="item10-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<!-- ROW 10 -->

		<!-- ROW 11 -->
		<input id="item11-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item11-2"></span>
		<input id="item11-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[oO]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item11-4"></span>
		<input id="item11-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item11-6"></span>
		<span class="crossword-board__item--blank" id="item11-7"></span>
		<input id="item11-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item11-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<input id="item11-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[oO]{1}$" required="required" value="" />
		<input id="item11-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[mM]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item11-12"></span>
		<input id="item11-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[lL]{1}$" required="required" value="" />
		<!-- ROW 11 -->

		<!-- ROW 12 -->
		<input id="item12-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item12-2" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[cC]{1}$" required="required" value="" />
		<input id="item12-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[cC]{1}$" required="required" value="" />
		<input id="item12-4" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[uU]{1}$" required="required" value="" />
		<input id="item12-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<input id="item12-6" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[aA]{1}$" required="required" value="" />
		<input id="item12-7" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[cC]{1}$" required="required" value="" />
		<input id="item12-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[yY]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item12-9"></span>
		<input id="item12-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[uU]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item12-11"></span>
		<span class="crossword-board__item--blank" id="item12-12"></span>
		<input id="item12-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[vV]{1}$" required="required" value="" />
		<!-- ROW 12 -->

		<!-- ROW 13 -->
		<input id="item13-1" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[mM]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item13-2"></span>
		<input id="item13-3" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[kK]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item13-4"></span>
		<input id="item13-5" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[sS]{1}$" required="required" value="" />
		<span class="crossword-board__item--blank" id="item13-6"></span>
		<span class="crossword-board__item--blank" id="item13-7"></span>
		<input id="item13-8" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[sS]{1}$" required="required" value="" />
		<input id="item13-9" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[oO]{1}$" required="required" value="" />
		<input id="item13-10" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[rR]{1}$" required="required" value="" />
		<input id="item13-11" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[tT]{1}$" required="required" value="" />
		<input id="item13-12" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[iI]{1}$" required="required" value="" />
		<input id="item13-13" class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[eE]{1}$" required="required" value="" />

		<div class="crossword-board crossword-board--highlight crossword-board--highlight--across">
			<span id="across-1" class="crossword-board__item-highlight crossword-board__item-highlight--across-1"></span>
			<span id="across-7" class="crossword-board__item-highlight crossword-board__item-highlight--across-7"></span>
			<span id="across-8" class="crossword-board__item-highlight crossword-board__item-highlight--across-8"></span>
			<span id="across-10" class="crossword-board__item-highlight crossword-board__item-highlight--across-10"></span>
			<span id="across-11" class="crossword-board__item-highlight crossword-board__item-highlight--across-11"></span>
			<span id="across-14" class="crossword-board__item-highlight crossword-board__item-highlight--across-14"></span>
			<span id="across-16" class="crossword-board__item-highlight crossword-board__item-highlight--across-16"></span>
			<span id="across-17" class="crossword-board__item-highlight crossword-board__item-highlight--across-17"></span>
			<span id="across-19" class="crossword-board__item-highlight crossword-board__item-highlight--across-19"></span>
			<span id="across-21" class="crossword-board__item-highlight crossword-board__item-highlight--across-21"></span>
			<span id="across-22" class="crossword-board__item-highlight crossword-board__item-highlight--across-22"></span>
			<span id="across-23" class="crossword-board__item-highlight crossword-board__item-highlight--across-23"></span>
			<span id="across-26" class="crossword-board__item-highlight crossword-board__item-highlight--across-26"></span>
			<span id="across-28" class="crossword-board__item-highlight crossword-board__item-highlight--across-28"></span>
			<span id="across-29" class="crossword-board__item-highlight crossword-board__item-highlight--across-29"></span>
			<span id="across-30" class="crossword-board__item-highlight crossword-board__item-highlight--across-30"></span>
			<span id="across-31" class="crossword-board__item-highlight crossword-board__item-highlight--across-31"></span>
			<span id="across-32" class="crossword-board__item-highlight crossword-board__item-highlight--across-32"></span>
			<span id="across-33" class="crossword-board__item-highlight crossword-board__item-highlight--across-33"></span>
		</div>

		<div class="crossword-board crossword-board--highlight crossword-board--highlight-down">
			<span id="down-1" class="crossword-board__item-highlight crossword-board__item-highlight--down-1"></span>
			<span id="down-2" class="crossword-board__item-highlight crossword-board__item-highlight--down-2"></span>
			<span id="down-3" class="crossword-board__item-highlight crossword-board__item-highlight--down-3"></span>
			<span id="down-4" class="crossword-board__item-highlight crossword-board__item-highlight--down-4"></span>
			<span id="down-5" class="crossword-board__item-highlight crossword-board__item-highlight--down-5"></span>
			<span id="down-6" class="crossword-board__item-highlight crossword-board__item-highlight--down-6"></span>
			<span id="down-8" class="crossword-board__item-highlight crossword-board__item-highlight--down-8"></span>
			<span id="down-9" class="crossword-board__item-highlight crossword-board__item-highlight--down-9"></span>
			<span id="down-12" class="crossword-board__item-highlight crossword-board__item-highlight--down-12"></span>
			<span id="down-13" class="crossword-board__item-highlight crossword-board__item-highlight--down-13"></span>
			<span id="down-15" class="crossword-board__item-highlight crossword-board__item-highlight--down-15"></span>
			<span id="down-18" class="crossword-board__item-highlight crossword-board__item-highlight--down-18"></span>
			<span id="down-19" class="crossword-board__item-highlight crossword-board__item-highlight--down-19"></span>
			<span id="down-20" class="crossword-board__item-highlight crossword-board__item-highlight--down-20"></span>
			<span id="down-21" class="crossword-board__item-highlight crossword-board__item-highlight--down-21"></span>
			<span id="down-22" class="crossword-board__item-highlight crossword-board__item-highlight--down-22"></span>
			<span id="down-23" class="crossword-board__item-highlight crossword-board__item-highlight--down-23"></span>
			<span id="down-24" class="crossword-board__item-highlight crossword-board__item-highlight--down-24"></span>
			<span id="down-25" class="crossword-board__item-highlight crossword-board__item-highlight--down-25"></span>
			<span id="down-26" class="crossword-board__item-highlight crossword-board__item-highlight--down-26"></span>
			<span id="down-27" class="crossword-board__item-highlight crossword-board__item-highlight--down-27"></span>
			<span id="down-28" class="crossword-board__item-highlight crossword-board__item-highlight--down-28"></span>
			<span id="down-30" class="crossword-board__item-highlight crossword-board__item-highlight--down-30"></span>
		</div>

		<div class="crossword-board crossword-board--labels">
			<span id="label-1" class="crossword-board__item-label crossword-board__item-label--1"><span class="crossword-board__item-label-text">1</span></span>
			<span id="label-2" class="crossword-board__item-label crossword-board__item-label--2"><span class="crossword-board__item-label-text">2</span></span>
			<span id="label-3" class="crossword-board__item-label crossword-board__item-label--3"><span class="crossword-board__item-label-text">3</span></span>
			<span id="label-4" class="crossword-board__item-label crossword-board__item-label--4"><span class="crossword-board__item-label-text">4</span></span>
			<span id="label-5" class="crossword-board__item-label crossword-board__item-label--5"><span class="crossword-board__item-label-text">5</span></span>
			<span id="label-6" class="crossword-board__item-label crossword-board__item-label--6"><span class="crossword-board__item-label-text">6</span></span>
			<span id="label-7" class="crossword-board__item-label crossword-board__item-label--7"><span class="crossword-board__item-label-text">7</span></span>
			<span id="label-8" class="crossword-board__item-label crossword-board__item-label--8"><span class="crossword-board__item-label-text">8</span></span>
			<span id="label-9" class="crossword-board__item-label crossword-board__item-label--9"><span class="crossword-board__item-label-text">9</span></span>
			<span id="label-10" class="crossword-board__item-label crossword-board__item-label--10"><span class="crossword-board__item-label-text">10</span></span>
			<span id="label-11" class="crossword-board__item-label crossword-board__item-label--11"><span class="crossword-board__item-label-text">11</span></span>
			<span id="label-12" class="crossword-board__item-label crossword-board__item-label--12"><span class="crossword-board__item-label-text">12</span></span>
			<span id="label-13" class="crossword-board__item-label crossword-board__item-label--13"><span class="crossword-board__item-label-text">13</span></span>
			<span id="label-14" class="crossword-board__item-label crossword-board__item-label--14"><span class="crossword-board__item-label-text">14</span></span>
			<span id="label-15" class="crossword-board__item-label crossword-board__item-label--15"><span class="crossword-board__item-label-text">15</span></span>
			<span id="label-16" class="crossword-board__item-label crossword-board__item-label--16"><span class="crossword-board__item-label-text">16</span></span>
			<span id="label-17" class="crossword-board__item-label crossword-board__item-label--17"><span class="crossword-board__item-label-text">17</span></span>
			<span id="label-18" class="crossword-board__item-label crossword-board__item-label--18"><span class="crossword-board__item-label-text">18</span></span>
			<span id="label-19" class="crossword-board__item-label crossword-board__item-label--19"><span class="crossword-board__item-label-text">19</span></span>
			<span id="label-20" class="crossword-board__item-label crossword-board__item-label--20"><span class="crossword-board__item-label-text">20</span></span>
			<span id="label-21" class="crossword-board__item-label crossword-board__item-label--21"><span class="crossword-board__item-label-text">21</span></span>
			<span id="label-22" class="crossword-board__item-label crossword-board__item-label--22"><span class="crossword-board__item-label-text">22</span></span>
			<span id="label-23" class="crossword-board__item-label crossword-board__item-label--23"><span class="crossword-board__item-label-text">23</span></span>
			<span id="label-24" class="crossword-board__item-label crossword-board__item-label--24"><span class="crossword-board__item-label-text">24</span></span>
			<span id="label-25" class="crossword-board__item-label crossword-board__item-label--25"><span class="crossword-board__item-label-text">25</span></span>
			<span id="label-26" class="crossword-board__item-label crossword-board__item-label--26"><span class="crossword-board__item-label-text">26</span></span>
			<span id="label-27" class="crossword-board__item-label crossword-board__item-label--27"><span class="crossword-board__item-label-text">27</span></span>
			<span id="label-28" class="crossword-board__item-label crossword-board__item-label--28"><span class="crossword-board__item-label-text">28</span></span>
			<span id="label-29" class="crossword-board__item-label crossword-board__item-label--29"><span class="crossword-board__item-label-text">29</span></span>
			<span id="label-30" class="crossword-board__item-label crossword-board__item-label--30"><span class="crossword-board__item-label-text">30</span></span>
			<span id="label-31" class="crossword-board__item-label crossword-board__item-label--31"><span class="crossword-board__item-label-text">31</span></span>
			<span id="label-32" class="crossword-board__item-label crossword-board__item-label--32"><span class="crossword-board__item-label-text">32</span></span>
			<span id="label-33" class="crossword-board__item-label crossword-board__item-label--33"><span class="crossword-board__item-label-text">33</span></span>

		</div>

		<div class="crossword-clues">

			<dl class="crossword-clues__list crossword-clues__list--across">
				<dt class="crossword-clues__list-title">Across</dt>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-1" data-number="1">Cover (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-7" data-number="7">Water (5,3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-8" data-number="8">Indian Dress (4)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-10" data-number="10">Without payment (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-11" data-number="11">Parentless child (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-14" data-number="14">Signal agreement (3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-16" data-number="16">Vigilant (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-17" data-number="17">Row (4)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-19" data-number="19">Wobbly dessert (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-21" data-number="21">Unfashionable (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-22" data-number="22">Nun's outfit (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-23" data-number="23">Singlet (4)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-26" data-number="26">As a joke (2,3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-28" data-number="28">Offer (3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-29" data-number="29">Choose (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-30" data-number="30">Nullify (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-31" data-number="31">Particle of matter (4)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-32" data-number="32">Precision (8)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--across-33" data-number="33">A sally (6)</dd>
			</dl>

			<dl class="crossword-clues__list crossword-clues__list--down">
				<dt class="crossword-clues__list-title">Down</dt>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-1" data-number="1">Slim (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-2" data-number="2">Public speaker (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-3" data-number="3">Podium (4)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-4" data-number="4">Gemstone (7)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-5" data-number="5">Turning tool (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-6" data-number="6">Mock attack (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-8" data-number="8">Sound of mind (4)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-9" data-number="9">To free (3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-12" data-number="12">Fold (3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-13" data-number="13">Regions (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-15" data-number="15">Stinking (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-18" data-number="18">Senseless (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-19" data-number="19">Quick short punch (3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-20" data-number="20">Permit (3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-21" data-number="21">Ballerinas (7)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-22" data-number="22">Shade (3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-23" data-number="23">Vitality (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-24" data-number="24">Dutch cheese (4)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-25" data-number="25">Dozen (6)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-26" data-number="26">Muslim religion (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-27" data-number="27">Group of sheep (5)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-28" data-number="28">Wager (3)</dd>
				<dd class="crossword-clues__list-item crossword-clues__list-item--down-30" data-number="30">No votes (4)</dd>
			</dl>

		</div>

		<div class="crossword-complete">
		well done, champ!
		</div>

	</div>

</div>

</body>
</html>`;
}

export function deactivate() {}
