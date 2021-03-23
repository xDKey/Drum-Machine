import { shallow } from 'enzyme';
import DrumPad from './DrumPad';

describe('DrumPad', () => {
  const initProps = {
    id: 'q',
    playSound: () => jest.fn(),
    pressedKey: 'q',
  };
  
  it('Should change classname on played', () => {
    const container = shallow(<DrumPad {...initProps} />);
    const audio = container.find('.clip');
    expect(container.find('#q').prop('className')).toBe('drum-pad');
    audio.simulate('play');
    expect(container.find('#q').prop('className')).toBe('drum-pad onpress');
  });

  it('Should call "playSound" on clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<DrumPad playSound={mockFn} id='q' />);
    const component = wrapper.find('#q');
    component.simulate('click');
    expect(mockFn).toBeCalled();
  });

});
