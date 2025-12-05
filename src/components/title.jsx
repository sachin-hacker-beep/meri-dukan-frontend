import React from 'react'

function Title({text1,text2}) {
  return (
    <section className='main-title w-full mt-14 mb-14' >
       <div className="text-head flex flex-col md:flex-row justify-center items-center gap-2" > 
            <p className='prata-regular text-gray-700 text-xl'>{text1}</p>
            <h1 className='prata-regular text-gray-700 text-3xl '>{text2}</h1>
            <div className='w-24 bg-slate-700 h-[1.5px]'></div>
        </div>
    </section>      
  )
}

export default Title
