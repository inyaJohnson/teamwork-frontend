import Store from '../store';
import { LoginDispatch } from '../__test__/reduxAction';

describe("login", () => {
    let store;
    beforeAll(() => {
        store = Store;
        store.dispatch(LoginDispatch())
    })

    it('Number of users',  () => {
        console.log(store.getState())
        expect(store.getState().userLogin.user.name).toBe("johnson");
    })
})

