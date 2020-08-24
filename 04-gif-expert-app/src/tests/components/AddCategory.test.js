import React from 'react';
import { shallow }  from  'enzyme';
import {AddCategory} from '../../components/AddCategory';

describe('Testin on AddCategory component', () => {
    
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    test('AddCategory should be render', () => {  
        expect(wrapper).toMatchSnapshot();
    })

    test('Should change the input element.', () => {
       
        const input = wrapper.find('input');
        const value = 'Test';
        input.simulate('change',{ target: {value} });
    })
    
    
})
