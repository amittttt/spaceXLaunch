import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './navbar';

describe('Navbar',()=>{
    const navHeading = 'Appication Name';
    const navbar = shallow(<Navbar navHeading={navHeading}/>);
    
    it('renders the Navbar component',()=>{
        expect(navbar.find('nav').text()).toEqual(navHeading);
    })
})

