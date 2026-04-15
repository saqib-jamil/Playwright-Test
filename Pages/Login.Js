class Login {
    constructor(page) {
        this.page = page;
        this.url = "https://stage.loadsecuresystems.com/login";
        this.username = page.getByRole('textbox', { name: 'Email' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign in' });

    }

    async goto() {
        await this.page.goto(this.url);
    }
    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async saveSession() {
        await this.page.context().storageState({ path: 'auth.json' });
    }

   
}

export default Login;