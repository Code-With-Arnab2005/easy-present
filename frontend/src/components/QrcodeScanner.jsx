import React, { useState } from 'react';
import QRCode from 'qrcode';

const QrCode = () => {
    const [url, setUrl] = useState("");
    const [imgUrl, setImgUrl] = useState('');
    const [error, setError] = useState(0);


    const qrcodeGenerator = async () => {
        if (!url) {
            setError(1);
            setImgUrl("");
            return;
        } else {
            setError(0);
        }
        try {
            const qrcode = await QRCode.toDataURL(url);
            setImgUrl(qrcode);
            setUrl("");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='min-h-[65vh] flex flex-col justify-center items-center border-2 p-20 gap-10 border-black w-fit mx-auto my-10 rounded-xl'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-center w-full text-3xl font-bold'>Generate and Share a QR Code</h1>
                <span className='text-lg'>Clink on the QR Code to download it</span>
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <label htmlFor="urltext" className='text-lg font-bold'>Enter your Text: </label>
                <input value={url} id='urltext' onChange={(e) => setUrl(e.target.value)} type="text" className='p-2 border-2 text-bold rounded-xl' placeholder='Enter your text' />
            </div>

            <button className='bg-green-500 hover:bg-green-300 border-2 border-black rounded-xl py-2 px-3' onClick={qrcodeGenerator}>Generate QR Code</button>
            {imgUrl && (
                <div className='p-3 rounded-xl border-2 border-white'>
                    <a href={imgUrl} download><img src={imgUrl} alt="img" width={100} height={100} /></a>
                </div>
            )}
            {error === 1 && (
                <div className='p-1 text-red-700 font-bold text-lg'>Please give a valid link to generate the QR code</div>
            )}

        </div>
    )
}

export default QrCode;
