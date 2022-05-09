import advertisement from '../img/advertisement.png'
import member_1 from '../img/member-1.png'
import member_2 from '../img/member-2.png'
import member_3 from '../img/member-3.png'


const RightSidebar = () => {
    return (

            <div className="right-sidebar">
                <div className="sidebar-title">
                    <h4>Events</h4>
                    <a href="#">See All</a>
                </div>
                <div className="event">
                    <div className="left-event">
                        <h3>18</h3>
                        <span>March</span>
                    </div>
                    <div className="right-event">
                        <h4>Social Media</h4>
                        <p>Wilson Tech Park</p>
                        <a href="#">More Info</a>
                    </div>
                </div>
                <div className="event">
                    <div className="left-event">
                        <h3>22</h3>
                        <span>June</span>
                    </div>
                    <div className="right-event">
                        <h4>Mobile Marketing</h4>
                        <p>Wilson Tech Park</p>
                        <a href="#">More Info</a>
                    </div>
                </div>
                <div className="sidebar-title">
                    <h4>Advertisement</h4>
                    <a href="#">Close</a>
                </div>
                <img src={advertisement} alt="" className="ads"/>
                    <div className="sidebar-title">
                        <h4>Conversation</h4>
                        <a href="#">Hide Chat</a>
                    </div>

                    <div className="online-list">
                        <div className="online">
                            <img src={member_1}/>
                        </div>
                        <p>Alison Mina</p>
                    </div>
                    <div className="online-list">
                        <div className="online">
                            <img src={member_2}/>
                        </div>
                        <p>Jackson Aston</p>
                    </div>
                    <div className="online-list">
                        <div className="online">
                            <img src={member_3}/>
                        </div>
                        <p>Samona Rose</p>
                    </div>
            </div>

    )
}

export default RightSidebar;