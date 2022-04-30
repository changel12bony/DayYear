import React, { useEffect, useState } from 'react'
import './View.css';
import data from './data.json'
import { IUser } from './type';
interface IProps {
    onUpdate: (data: IUser) => any;
}
// type Props = {}
// = () => 

Const View: React.FC< IProps > = (data: any[]) => {
    const [userDate, setUserdate] = useState(data)
    //     useEffect(() => {
    //         setUserdate(Props.userDate)
    //       }, [IProps]);

    // const dayOfYear = (date: Date): number => Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24));
    function onUpdate={
        = >{
            const dayOfYear : (userDate : Date), number => Math.floor((Date.valueOf() - new Date(userDate.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24));
    }
}
return (
    <><div>
        <div className='data'>
            {data.map(date => {
                return (
                    <div>
                        {date.name}
                        {date.birthday}
                    </div>
                );
            })}
        </div>
    </div><>
            <div className='update' >
                <input type="text" placeholder='enter year' className='year'></input><br></br>
                <div> <button type="submit" className="save" onClick={onUpdate}> ;

                    update
                </button></div>
                <div className='grid-container'>
                    <div className='card'>
                        <div className='Days'>Monday</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Tuesday</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Wednesday</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Thursday</div>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='card'>
                        <div className='Days'>Friday</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Saturday</div>
                    </div>
                    <div className='card'>
                        <div className='Days'>Sunday</div>
                    </div>

                </div>
            </div></></>
)
}

export default View
interface IProps {
    data: IUser[]
}