import React from 'react'
import Navigation from '../components/Navbar'

interface MyFormValues {
    email: string,
    password: string
}

class Overview extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Navigation />
                <div className='container'>
                    <h1>Parked Cars Table</h1>                    
                </div>
            </div>
        );
    }
}

export default Overview;