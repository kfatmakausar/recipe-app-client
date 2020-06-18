import React from 'react'; 

export default class NavBar extends React.Component{
    render() {
        const pages = [ 'My Profile', 'LogOut' ]
        const navLinks = pages.map(pages =>{
            return(
                <a href={'/' + page}>
                     {page}
                </a>
            )
            });
        return <na>{navLinks}</na>
    }
}

