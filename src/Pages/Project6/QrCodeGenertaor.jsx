import React, { useState } from 'react'
import QRCode from 'react-qr-code';
function QrCodeGenertaor() {
    
    const [qrcode,setqrcode] = useState('');
    const [input , setinput] = useState('');
    const handleqr = ()=>{
        setqrcode(input);
        setinput("");
    }
  return (
    <div className='min-h-screen py-5 bg-[#212121] '>
        <div className="flex py-5 justify-center">
            <input type="text" className='w-100 px-4 py-2 '  value={input} onChange={(e)=> setinput(()=> e.target.value)}  placeholder='enter Qr value '/>
            <button onClick={handleqr} className='rounded-xl bg-blue-400 outline-black transition delay-75 duration-300 ease-in-out active:scale-150 px-4 py-2' disabled={input && input.length > 0 ? false : true } >Generate Qr</button>
        </div>
            <div className=' mt-5 flex justify-center'>
                <QRCode id='qr-code-value' value={qrcode}></QRCode>

            </div>
    </div>
  )
}

export default QrCodeGenertaor
