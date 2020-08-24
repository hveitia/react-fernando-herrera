import React from 'react'
const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('Test on <GifGridItem/>', () => {
    
    const url = '';
    const title = '';
    const wrapper = shallow(<GifGridItem url={url} title={title}/>);

    test('Should be render the component.', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Should have one paragraph with tittle.', () => {      
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Should have one image with source and alt.', () => {   
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Should have animate__animated class', () => {      
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__animated')).toBe(true);
    })
        
})
