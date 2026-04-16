class LoadRequest {
    constructor(page) {
        this.page = page;
        this.lr = page.getByText('Load Requests')
        this.newLr = page.getByRole('button', { name: 'New' })
    }
}