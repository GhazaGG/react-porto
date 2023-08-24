import React, { useState } from 'react'

const Experience = () => {
    const [activeView, setActiveView] = useState('personal project')




    return (
        <div className='work-container'>
            <aside className='work-navbar'>
                <div className="sidebar">
                    <a className={`work ${activeView == 'personal peroject' ? 'active' :''}`} onClick={()=> setActiveView('personal project')}>Personal Project</a>
                    <a className={`work ${activeView == 'bangkit academy' ? 'active': ''}`} onClick={()=> setActiveView('bangkit academy')}>Bangkit Academy</a>
                </div>
            </aside>

            <div className="work-content">
                {activeView == 'personal project' &&(
                    <div className='personal-project'>
                        test test
                    </div>
                )}

                {activeView == 'bangkit academy' &&(
                    <div className="bangkit-academy">
                        bangkit academy
                    </div>
                )}

            </div>
        </div>
    )
}

export default Experience