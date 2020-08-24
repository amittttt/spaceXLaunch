import React from 'react';
import { shallow } from 'enzyme';
import UnderLineHeading from './underlineheading';

describe('Navbar',()=>{
    const heading='welcome';
    const subtitle = shallow(<UnderLineHeading heading={heading}/>);
    it('renders the underline heading component',()=>{
        expect(subtitle.find('span').text()).toEqual(heading);
    })
})

