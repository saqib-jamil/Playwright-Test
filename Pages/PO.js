class PO {
    constructor(page) {
        this.page = page;
    }

    async clickNew() {
        await this.page.getByRole('button', { name: 'New' }).click();
    }

    async fillCompanyDetails() {
        await this.page.getByRole('combobox', { name: 'Create on behalf of *' }).click();
        await this.page.getByRole('combobox', { name: 'Create on behalf of *' }).fill('new company');
        await this.page.getByRole('option', { name: 'New Company 24 March' }).click();
    }

    async fillUserDetails() {
        await this.page.getByRole('combobox', { name: 'User' }).click();
        await this.page.getByRole('combobox', { name: 'User' }).fill('c');
        await this.page.getByRole('option', { name: 'Company User Two - cu2@' }).click();
    }

    async fillPONumbers() {
        await this.page.getByRole('textbox', { name: 'PO #', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'PO #', exact: true }).fill('56');
        await this.page.getByRole('textbox', { name: 'Customer PO #' }).click();
        await this.page.getByRole('textbox', { name: 'Customer PO #' }).press('CapsLock');
        await this.page.getByRole('textbox', { name: 'Customer PO #' }).fill('CPO');
        await this.page.getByRole('textbox', { name: 'Customer PO #' }).press('CapsLock');
        await this.page.getByRole('textbox', { name: 'Customer PO #' }).fill('CPO-56');
    }

    async fillPhoneAndDOT() {
        await this.page.locator('.MuiAutocomplete-root.MuiAutocomplete-fullWidth.MuiAutocomplete-hasClearIcon.mui-1ay1063 > .MuiFormControl-root > .MuiInputBase-root').click();
        await this.page.getByRole('combobox', { name: 'Phone' }).fill('9');
        await this.page.getByRole('option', { name: '+1 (234) 567-8913' }).click();
        await this.page.getByRole('textbox', { name: 'DOT Number' }).click();
        await this.page.getByRole('textbox', { name: 'DOT Number' }).fill('1234567');
    }

    async clickNextButton() {
        await this.page.getByRole('button', { name: 'Next' }).click();
    }

    async fillPickupDetails() {
        await this.page.getByRole('button', { name: 'Choose date' }).click();
        await this.page.getByRole('gridcell', { name: '16' }).click();
        await this.page.getByRole('combobox', { name: 'Timezone' }).click();
        await this.page.getByRole('option', { name: 'Eastern Time' }).click();
        await this.page.locator('div').filter({ hasText: /^Pick-Up Address$/ }).click();
        await this.page.getByRole('textbox', { name: 'Pick-Up Address' }).fill('karachi');
        await this.page.getByText('Karachi, Pakistan', { exact: true }).click();
    }

    async fillDropoffDetails() {
        await this.page.getByRole('button', { name: 'Choose date' }).click();
        await this.page.getByRole('gridcell', { name: '23' }).click();
        await this.page.getByRole('combobox', { name: 'Timezone' }).click();
        await this.page.getByRole('option', { name: 'Eastern Time' }).click();
        await this.page.getByRole('textbox', { name: 'Drop-off Address' }).click();
        await this.page.getByRole('textbox', { name: 'Drop-off Address' }).fill('lahore');
        await this.page.getByRole('option', { name: 'Lahore, Pakistan', exact: true }).click();
    }

    async clickFinish() {
        await this.page.getByRole('button', { name: 'Finish' }).click();
    }

    async completePOFlow() {
        await this.clickNew();
        await this.fillCompanyDetails();
        await this.fillUserDetails();
        await this.fillPONumbers();
        await this.fillPhoneAndDOT();
        await this.clickNextButton();
        await this.fillPickupDetails();
        await this.clickNextButton();
        await this.fillDropoffDetails();
        await this.clickNextButton();
        await this.clickFinish();
    }
}
export default PO;