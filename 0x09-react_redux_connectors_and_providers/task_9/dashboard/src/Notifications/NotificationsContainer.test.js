import { NotifContainer } from "./NotificationsContainer";
import { shallow } from 'enzyme';
import React from 'react';


it("calls fetctNotifications actioncreator when component is mounted", ()=>{
    const fetchNotifications = jest.fn()
    const wrapper = shallow(<NotifContainer fetchNotifications={fetchNotifications}/>);
    expect(fetchNotifications).toHaveBeenCalled()
})