import React, {useState} from "react";
import arrow_right from '../../img/right-arrow.png'
import arrow_left from '../../img/left-arrow.png'


const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionSize = 6;
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className='page-numbers'>
        {
            portionNumber === 1  ?

                <img src={arrow_left}  /> :
                portionNumber > 0 &&
                <img src={arrow_left} onClick={() => { setPortionNumber(portionNumber - 1) }} />
             }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                let currentClass = props.currentPage === p ? 'page-number active' : 'page-number';
                return <span key={p} className={currentClass} onClick={(e) => {props.onPageChanged(p)}} >{p}</span>
            })}
    { portionCount > portionNumber &&
        <img  src={arrow_right} onClick={() => { setPortionNumber(portionNumber + 1) }} />
     }
</div>
}

export default Paginator;


//     return <div className='page-numbers'>
//         {
//             pages.map( p => {
//
//                 let currentClass = props.currentPage === p ? 'page-number active' : 'page-number';
//                 return <span className={currentClass} onClick={(e) => {props.onPageChanged(p)}} >{p}</span>
//             })
//         }
//     </div>
// }