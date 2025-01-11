import React from 'react'


function client() {
  return (
    <div>
        <section className='client-hero '>
            <video width="600" controls>
                <source src="path/to/your/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>


    </div>
  )
}

export default client