import { shallow } from 'enzyme';
import DrumPad from '../DrumPad/DrumPad';
import DrumMachine from './DrumMachine';

const component = shallow(<DrumMachine />);
describe('<DrumMachine />', () => {
  it('Should rerender DrumPad on key pressed', () => {
    const wrapper = component.find('#drum-machine');
    expect(component.find(DrumPad).at(0).prop('pressedKey')).toBeNull();
    wrapper.simulate('keypress', { key: 'q' });
    expect(component.find(DrumPad).at(0).prop('pressedKey')).toBe('q');
  });
});
