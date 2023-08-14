import { shallowMount } from '@vue/test-utils';
import Playground from './PlaygroundIndex.vue';

describe('<Playground />', () => {
  it('should component render correctly', () => {
    const wrapper = shallowMount(Playground);
    expect(wrapper).toMatchSnapshot();
  });
});
