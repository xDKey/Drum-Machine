import { mount, shallow } from 'enzyme';
import DrumMachine from '../DrumMachine/DrumMachine';
import PowerToggle from './PowerToggle';

const setUp = (props) => shallow(<PowerToggle {...props} />);

describe('PowerToggle', () => {
  it('Should render correctly', () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it('Should contain .toggle', () => {
    const component = setUp();
    const wrapper = component.find('.toggle');
    expect(wrapper.length).toBe(1);
  });

  it('Should .toggle_outer style be {justifyContent: "flex-start"}', () => {
    const component = setUp({ isPowerOn: true });
    const wrapper = component.find('.toggle_outer');
    expect(wrapper.props().style).toEqual({ justifyContent: 'flex-start' });
  });

  it('Changed the props "isPowerOn" on clicked', () => {
    const container = mount(<DrumMachine />);
    const child = container.find(PowerToggle);
    const button = child.find('.toggle');

    expect(container.find(PowerToggle).prop('isPowerOn')).toBeTruthy();
    button.simulate('click');
    expect(container.find(PowerToggle).prop('isPowerOn')).toBeFalsy();
  });
});
