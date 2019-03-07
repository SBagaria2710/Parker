import React from 'react';

import '../styles/components/Slot.css'

interface IProps {
    data: {
        availability: boolean
        id: number
        car: {
            RegistrationNumber: string
            Color: string
        }
    }
    key: number
}

export const Slot = (props: IProps) => {
    const { availability, id, car } = props.data;
    return (
        <div className='slot-container col-5 col-md-4 col-lg-3' style={{ border: `0.5px solid ${availability ? '#adab9c' : '#4caf50'}` }}>
            {!availability ?
                <div>
                    <p className='slot-detail-title'>Registration Number:
                    <br />
                        <span className='slot-detail'>{car.RegistrationNumber}</span>
                    </p>
                    <div style={{ display: 'flex' }}>
                        <p className='slot-detail-title' style={{ marginRight: '7px' }}>Color: </p>
                        <div className='mr-auto slot-detail-color' style={{ backgroundColor: `${car.Color}` }}></div>
                    </div>
                    <p className='slot-detail-title'>SlotID:
                        <span className='slot-detail' style={{ paddingLeft: '7px' }}>{id}</span>
                    </p>
                </div>
                :
                <div>
                    <p className='slot-detail-title'>SlotID:
                        <span className='slot-detail' style={{ paddingLeft: '7px' }}>{id}</span>
                    </p>
                </div>
            }

        </div>
    );
}