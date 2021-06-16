"use strict";

import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	return {
		extendMarkdownIt(md: any) {

			md.use(require('markdown-it-replace-link'), {
				replaceLink: function (link: string, env: any) {
					if (link && link.match("http")) {
						return link;
					} else {
						const exists = fs.existsSync(link);
						if (fs.existsSync(link)) {
							return link;
						}
						return `..${link}`;
					}
				}
			});
			return md;
		}
	};
}

export function deactivate() { }
