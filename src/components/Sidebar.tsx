import home from '../assets/home.svg';
import SideBarButton from './SideBarButton';
import clipboard from '../assets/clipboard.png';
import dashboard from '../assets/dashboard.png';
import truck  from '../assets/truck.png';
import speaker from '../assets/speaker.png';
import analytics from '../assets/analytics.png';
import payout from '../assets/payout.png';
import discount from '../assets/discount.png';
import audience from '../assets/audience.png';
import color from '../assets/audience.png';
import plugin from '../assets/plugin.png';
import logo from '../assets/logo.png';
import arrow from '../assets/arrow.png';
import Credits from './Credits';

const Sidebar = () => {
    return (
    <div className='flex flex-col justify-between h-full'>
        <div>
            <div className='flex items-center'>
            <img src={logo} alt="" className='h-10 rounded m-2'/>
            <div className='w-7/12'>
                <div className='font-bold text-sm'>Nishyan</div>
                <button onClick={() => alert('You cisited store')} className='text-xs underline text-gray-300'>Visit store</button>
            </div>
            <img src={arrow} alt="" className='h-6'/>
            </div>
            <ul>
                <li>
                    <SideBarButton img={home} name="Home" />
                </li>
                <li>
                    <SideBarButton img={clipboard} name='Orders' />
                </li>
                <li>
                    <SideBarButton img={dashboard} name="Products" />
                </li>
                <li>
                    <SideBarButton img={truck} name='Delivery' />
                </li>
                <li>
                    <SideBarButton img={speaker} name='Marketing'/>
                </li>
                <li>
                    <SideBarButton img={analytics} name='Analytics'/>
                </li>
                <li>
                    <SideBarButton img={payout} name='Payouts'/>
                </li>
                <li>
                    <SideBarButton img={discount} name='Discounts'/>
                </li>
                <li>
                    <SideBarButton img={audience} name='Audience'/>
                </li>
                <li>
                    <SideBarButton img={color} name='Apperance'/>
                </li>
                <li>
                    <SideBarButton img={plugin} name='Plugins'/>
                </li>
            </ul>
        </div>
        <Credits />
    </div>
    );
};
export default Sidebar;
