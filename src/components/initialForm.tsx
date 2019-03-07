import React from 'react';

export const InitialForm = (props) => {
    return (
        <div className='container-fluid'>
            <div className='custom-card'>
                <form className='form-group' onSubmit={props.handleSubmit}>
                    <label>
                        Parking Capacity:
                        <input
                            className='col-12'
                            type='number'
                            name='N'
                            value={props.N}
                            onChange={props.handleChange}
                        />
                    </label>
                    <label>
                        Initial Parked Cars:
                        <input
                            className='col-12'
                            type='number'
                            name='M'
                            value={props.M}
                            onChange={props.handleChange}
                        />
                    </label>
                    <br />
                    <button 
                        className='btn btn-outline-dark' 
                        type='submit' 
                        value='Submit'
                        >Submit
                    </button>
                </form>
            </div>
        </div>
    );
}