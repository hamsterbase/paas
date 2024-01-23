import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const hourlyReminder = setInterval(() => {
    remindUser();
  }, 1000 * 60 * 60);

  context.subscriptions.push({
    dispose: () => {
      clearInterval(hourlyReminder);
    },
  });
}

function remindUser() {
  vscode.window.showInformationMessage("(_*_) (_*_) (_*_) (_*_) (_*_)");
}

export function deactivate() {}
