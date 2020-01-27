import LoginHoc from '../admin_user/LoginHoc';
import { mount } from 'enzyme';

describe("Hoc functionality", () =>{
    let props,
    wrapper,
    ComposedComponent,
    MockedComponent = ({userName, password, onChangeHandler}) => {
        return (
            <div>
                <input placeholder='password' onChange={onChangeHandler} />
                {
                    (userName && password) ? "Yes" : "No"
                }  
            </div>
        )
    }


    describe("Render UI", () => {
        beforeAll(() =>{
            ComposedComponent = LoginHoc(MockedComponent);
            wrapper = mount(<ComposedComponent />);
            props = wrapper.find(MockedComponent).props();
            console.log(props);
        })

        it("check for password props", () =>{
            expect(props.password).toBe("");
        })

        it("Check for onChangeHandler Function", () =>{
            expect(typeof props.onChangeHandler).toBe("function");
        })
    })

    describe("Check Functionality", () =>{
        let instance;
        beforeAll(()=>{
            ComposedComponent = LoginHoc(MockedComponent);
            wrapper = mount(<ComposedComponent age="24" />);
            instance = wrapper.instance();
        })

        it("check if Mocked component is exist", () =>{
            expect(wrapper.first().is(MockedComponent));
        })

        it("check Login fucntionality", ()=>{
            expect(instance.state.userName).toBe('');
        })

        it("check Login fucntionality", ()=>{
            expect(instance.props.age).toBe('24')
        })
    })
})