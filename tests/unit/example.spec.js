import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'


describe('HelloWorld.vue', () => {

// jest.mock('@/components');
let wrapper;

  beforeEach(()=>{
     wrapper= shallowMount(HelloWorld,{
      data(){
        return{
          f:'kk'
        }
      }
    });
  
  }
  )

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    expect('new message').toMatch(msg)
  })

  it('testing',() => {
    expect(100).toBeGreaterThanOrEqual(12);
    expect(wrapper.html()).toContain('div');
    expect(wrapper.vm.f).toBe('kk')
  })
  it('check the method',()=>{
     
       expect(wrapper.vm.check()).toEqual(100);
      wrapper.vm.check=jest.fn();
      wrapper.vm.check();
      expect(wrapper.vm.check).toHaveBeenCalledTimes(1);
     
  })
})
