import upload from "../../../img/upload.png";
import member_1 from "../../../img/member-1.png";
import member_2 from "../../../img/member-2.png";
import member_3 from "../../../img/member-3.png";
import member_4 from "../../../img/member-4.png";
import Scrollable from "../../../hoc/Scrollable";
import {retry} from "@reduxjs/toolkit/query";


const MyStories = () => {
    const items = [
        {
            title: 'Title 1',
            text: 'Text'
        },
        {
            title: 'Title 2',
            text: 'Text'
        },
        {
            title: 'Title 3',
            text: 'Text'
        },
        {
            title: 'Title 4',
            text: 'Text'
        },
        {
            title: 'Title 5',
            text: 'Text'
        },
        {
            title: 'Title 6',
            text: 'Text'
        },

    ]

    return ( <>
        <div className='stories__container'>
            <Scrollable _class="items">
                <div className="item story story1">
                    <img src={upload} alt=""/>
                    <p>Post Story</p>
                </div>

                <div className="item story story2">
                    <img src={member_1} alt=""/>
                    <p>Alison</p>
                </div>
                <div className="item story story3">
                    <img src={member_2} alt=""/>
                    <p>Jackson</p>
                </div>
                <div className="item story story4">
                    <img src={member_3} alt=""/>
                    <p>Samona</p>
                </div>
                <div className="item story story5">
                    <img src={member_4} alt=""/>
                    <p>John Doe</p>
                </div>


            </Scrollable>
        </div>



        {/*<div className="story-gallery">*/}
        {/*    <div className="story story1">*/}
        {/*        <img src={upload} alt=""/>*/}
        {/*        <p>Post Story</p>*/}
        {/*    </div>*/}
        {/*    <div className="story story2">*/}
        {/*        <img src={member_1} alt=""/>*/}
        {/*        <p>Alison</p>*/}
        {/*    </div>*/}
        {/*    <div className="story story3">*/}
        {/*        <img src={member_2} alt=""/>*/}
        {/*        <p>Jackson</p>*/}
        {/*    </div>*/}
        {/*    <div className="story story4">*/}
        {/*        <img src={member_3} alt=""/>*/}
        {/*        <p>Samona</p>*/}
        {/*    </div>*/}
        {/*    <div className="story story5">*/}
        {/*        <img src={member_4} alt=""/>*/}
        {/*        <p>John Doe</p>*/}
        {/*    </div>*/}

        {/*</div>*/}
        </>
    )
}

export default MyStories;