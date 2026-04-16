import { faker } from '@faker-js/faker';

export const POData = {
    PONumber: faker.number.int({ min: 1, max: 999 }).toString(),
    customerPONumber: `CPO-${faker.number.int({ min: 1, max: 999 })}`,
    
}