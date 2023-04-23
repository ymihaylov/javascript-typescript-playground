abstract class Dialog {
	public abstract createButton(): Button

	public render() {
		const okButton: Button = this.createButton();
		okButton.render();
	}
}

class WindowsDialog extends Dialog {
	public createButton(): Button {
		return new WindowsButton();
	}
}

class WebDialog extends Dialog {
	public createButton(): Button {
		return new HTMLButton();
	}
}

interface Button {
	render(): void;
	onClick(): void;
}

class WindowsButton {
	public render(): void {
		console.log("Rendering Windows button");
	}

	public onClick() {
		console.log("Windows button clicked");
	}
}

class HTMLButton {
	public render(): void {
		console.log("Rendering HTML button");
	}

	public onClick() {
		console.log("HTML button clicked");
	}
}

// ===
type Config = {
	OS: string,
};

const config: Config = {
	OS: "Windows",
	// OS: "Web",
}

class Application {
	private dialog: Dialog;

	constructor() {
		if (config.OS === "Windows") {
			this.dialog = new WindowsDialog()
		} else if (config.OS === "Web") {
			this.dialog = new WebDialog();
		} else {
			throw "Error! Unknown operating system."
		}
	}

	public main() {
		this.dialog.render();
	}
}

const application = new Application();
application.main();
