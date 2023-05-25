import React from 'react';
import ChildComp from './ChildComp';

function PropComp(props) {
    // console.log('Props====',props.data)

    const { data, Formdatas } = props
    console.log(Formdatas)
    return (
        <div>
            {data}

            {
                Formdatas.map((items, id) => {
                    return (

                        <p key={id}>{id + 1} {items.name} <span>{items.email}</span></p>

                    )
                })
            }
            <ChildComp data={data} />
        </div>
    );
}

export default PropComp;