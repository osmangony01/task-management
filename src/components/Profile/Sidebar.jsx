import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <aside className="w-[250px] h-screen  bg-white hidden lg:flex lg:flex-col">
                <div className="flex flex-col px-6 text-lg">
                    <div className="py-6"><Link href="/contact-list">Contacts</Link></div>
                    <hr />
                    <div className="py-6"><Link href="/charts-maps">Charts and Maps</Link></div>
                </div>

            </aside>
        </div>
    );
};

export default Sidebar;