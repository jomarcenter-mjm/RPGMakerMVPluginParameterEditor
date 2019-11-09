// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {pleWebviewer} from './pluginEditor';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Welcome to MJM RPG Maker MV Plugin Editor');
	let disposable = vscode.commands.registerCommand('rmmv.MVPluginEditor', () => {
		// The code you place here will be executed every time your command is executed
		const panel = vscode.window.createWebviewPanel('rmmvPluginEditor', 'RPG Maker MV Plugin Editor by MJM', vscode.ViewColumn.One,
		{});
		// Display a message box to the user
		vscode.window.showInformationMessage('RPG Maker MV Plugin Editor open');
		vscode.window.showInformationMessage('Plugin is in development: Please backup your Plugin.js file before proceeding');

		panel.webview.html = pleWebviewer();
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
