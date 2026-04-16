import { POData } from "../Utils/POData";
class PO {
    constructor(page) {
        this.page = page;
        this.newPO = page.getByRole('button', { name: 'New' });
        this.company = page.getByRole('combobox', { name: 'Create on behalf of *' });
        this.myCompany = page.getByRole('option', { name: 'New Company 24 March' });
        this.user = page.getByRole('combobox', { name: 'User' });
        this.myUser = page.getByRole('option', { name: 'Company User Two - cu2@' });
        this.poNumber = page.getByRole('textbox', { name: 'PO #', exact: true });
        this.customerPONumber = page.getByRole('textbox', { name: 'Customer PO #' });
        this.phone = page.getByRole('combobox', { name: 'Phone' });
        this.dotNumber = page.getByRole('textbox', { name: 'DOT Number' });
        this.nextBtn = page.getByRole('button', { name: 'Next' });
        this.date=page.getByRole('button', { name: 'Choose date' });
        this.startDate = page.getByRole('gridcell', { name: '16' });
        this.timezone = page.getByRole('combobox', { name: 'Timezone' });
        this.easTime = page.getByRole('option', { name: 'Eastern Time' });
        this.pickAddress = page.locator('div').filter({ hasText: /^Pick-Up Address$/ });
        this.selectPickAddress = page.getByRole('textbox', { name: 'Pick-Up Address' });
        this.selectCity = page.getByText('Karachi, Pakistan', { exact: true });
        this.selectDropDate = page.getByRole('button', { name: 'Choose date' });
        this.endDate = page.getByRole('gridcell', { name: '23' });
        this.dropAddress = page.getByRole('textbox', { name: 'Drop-off Address' });
        this.selectDropAddress = page.getByRole('textbox', { name: 'Drop-off Address' });
        this.selectDropCity = page.getByText('Lahore, Pakistan', { exact: true });
        this.finishBtn = page.getByRole('button', { name: 'Finish' });
        this.phoneOption = page.getByRole('option', { name: '+1 (234) 567-8913' });
    }

    async clickNew() {
        await this.newPO.click();
    }

    async fillCompanyDetails() {
        await this.company.fill('new company');
        await this.myCompany.click();
    }

    async fillUserDetails() {
        await this.user.fill('c');
        await this.myUser.click();
    }

    async fillPONumbers() {
        await this.poNumber.fill(POData.PONumber);
        await this.customerPONumber.fill(POData.customerPONumber);
    }

    async fillPhoneAndDOT() {
        await this.phone.fill('9');
        await this.phoneOption.click();
        await this.dotNumber.fill('1234567');
    }

    async clickNextButton() {
        await this.nextBtn.click();
    }

    async fillPickupDetails() {
        await this.date.click();
        await this.startDate.click();
        await this.timezone.click();
        await this.easTime.click();
        await this.pickAddress.click();
        await this.selectPickAddress.fill('karachi');
        await this.selectCity.click();
    }

    async fillDropoffDetails() {
        await this.selectDropDate.click();
        await this.endDate.click();
        await this.timezone.click();
        await this.easTime.click();
        await this.dropAddress.click();
        await this.selectDropAddress.fill('lahore');
        await this.selectDropCity.click();
    }

    async clickFinish() {
        await this.finishBtn.click();
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