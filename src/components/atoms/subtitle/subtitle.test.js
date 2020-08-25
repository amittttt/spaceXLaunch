import React from 'react';
import { shallow } from 'enzyme';
import SubTitle from './subtitle';

describe('Navbar',()=>{
    const subHeading='welcome';
    const subtitle = shallow(<SubTitle subHeading={subHeading}/>);
    it('renders the subtitle component',()=>{
        expect(subtitle.find('div').text()).toEqual(subHeading);
    })
})

