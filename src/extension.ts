'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('crossword.show', () => {
			const panel = vscode.window.createWebviewPanel(
				'crossword',
				'Crossword',
				vscode.ViewColumn.One
			);
			panel.webview.html = getWebviewContent();
		})
	);
}

function getWebviewContent() {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Cat Coding</title>
</head>
<body>
	
</body>
</html>`;
}

export function deactivate() {}
