import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="xl:w-[1260px] lg:mx-auto px-5 lg:px-4 pb-12 lg:pb-0">
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between home__image">
        <div className="w-full flex flex-col items-center lg:block lg:max-w-[490px]">
          <div className='max-w-[162px] mb-0 lg:mb-16 mt-5 lg:mt-0'>
            <img src="https://atto.uz/_nuxt/static/img/svg/logo.svg" className='w-full' alt="" />
          </div>
          <div>
            <p className='text-[#4CB0FE] font-bold text-lg lg:text-2xl my-7 text-center lg:text-left'>404 XATO</p>
            <h1 className="text-[#232455] font-bold text-3xl text-center lg:text-left lg:text-6xl lg:my-8">
              Bu siz izlayotgan sahifa bo'lmasligi mumkin.
            </h1>
            <p className="text-[#B1B2CA] text-lg lg:text-2xl my-4 lg:my-7 text-center lg:text-left">Kechirasiz, siz so'ragan sahifa mavjud emas. Manzilning yozilishini tekshiring yoki asosiy sahifaga o'ting.</p>
            <div className="mt-10 flex justify-center lg:justify-start">
            <Link to="/" className='bg-[#4CB0FE] text-sm py-5 px-7 rounded-2xl text-white'>Asosiy sahifaga qaytish</Link>
            </div>
          </div>

        </div>
        <div className="max-w-[220px] xl:w-1/2 relative lg:max-w-sm  xl:max-w-[550px] px-5 md:px-0 pb-5 md:pb-0">
          <img
            src="https://www.atto.uz/_nuxt/static/img/svg/error-background.svg"
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            alt=""
          />
          <img
            src="https://www.atto.uz/_nuxt/static/img/error-photo.png"
            className="relative z-1 mx-auto w-full h-full max-h-[350px] md:max-h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound