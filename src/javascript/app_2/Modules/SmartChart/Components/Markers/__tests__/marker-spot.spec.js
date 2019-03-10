import React                  from 'react';
import { expect }             from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter                from 'enzyme-adapter-react-16';
import MarkerSpot             from '../marker-spot.jsx';

configure({ adapter: new Adapter() });

describe('MarkerSpot', () => {
    it('should render one <MarkerSpot /> component', () => {
        const wrapper = shallow(<MarkerSpot />);
        expect(wrapper).to.have.length(1);
    });
    it('should have class .chart-spot__spot--won if status won is passed in props', () => {
        const wrapper = shallow(<MarkerSpot status={'won'} />);
        expect(wrapper.find('.chart-spot__spot--won').exists()).to.be.true;
    });
    it('should have class .chart-spot__spot--lost if status lost is passed in props', () => {
        const wrapper = shallow(<MarkerSpot status={'lost'} />);
        expect(wrapper.find('.chart-spot__spot--lost').exists()).to.be.true;
    });
    it('should not have class .chart-spot__spot--lost or .chart-spot__spot--won if no status is passed in props', () => {
        const wrapper = shallow(<MarkerSpot />);
        expect(wrapper.find('.chart-spot__spot--lost').exists()).to.be.false;
        expect(wrapper.find('.chart-spot__spot--lost').exists()).to.be.false;
        expect(wrapper.find('.chart-spot').exists()).to.be.true;
    });
});

