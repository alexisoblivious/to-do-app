
import NestedNav from '../../components/NestedNav';
import { Outlet } from 'react-router-dom';
export default function HelpPage() {

    
      return  (
        <>
            <div className='helpPage'>
                <h1>Help Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet odio quis odio ornare tempor. Phasellus gravida faucibus nibh, sit amet elementum enim interdum vitae. Cras et consectetur sapien, id scelerisque quam. Ut bibendum, sem et varius semper, felis urna maximus turpis, sit amet molestie leo neque id enim</p>
                <Outlet />
                <NestedNav />
            
              </div>
        <div>
            </div>
        </>
    );
}