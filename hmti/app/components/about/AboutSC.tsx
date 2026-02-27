// import { FullScreen } from '@tsparticles/engine';
import Image from 'next/image'

export default function AboutSC() {
    return (
        <>
            {/* <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style> */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mt-50">
                <div className="relative shadow-2xl shadow-slate-300/40 rounded-2xl overflow-hidden shrink-0">
                    <Image className="max-w-md w-full object-cover rounded-2xl"
                        src="https://res.cloudinary.com/dxjptcgdd/image/upload/v1769555431/Screenshot_20251121_161631_Gallery_wjwfer.jpg"
                        width={448}
                        height={448}
                        alt="Image" />
                </div>
                <div className="text-sm text-slate-300 max-w-lg">
                    <h1 className="text-xl uppercase font-normal text-white mask-b-from-15%">What is cerenity?</h1>
                    <div className="w-48 h-px m-px bg-linear-to-r from-transparent to-transparent via-slate-400/90" />
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repellat quasi labore accusamus nisi assumenda quibusdam eum, nulla et dolores dolorum laudantium necessitatibus, autem eligendi doloribus excepturi quo. Voluptatem, sunt. </p>
                    <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae laborum autem explicabo sint iure doloremque qui modi, officiis iste quis quam facilis dolor ullam fuga voluptates molestias ratione unde..</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid illo recusandae dolore blanditiis iste veniam asperiores voluptates modi consequuntur. Eius consequuntur, magni itaque nam dolor laudantium atque in iste similique..</p>
                    <a href="#" className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-linear-to-br from-slate-500/75 via-black to-slate-500 shadow-sm shadow-blue-400 py-3 px-8 rounded-full text-white">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff" className='mask-b-from-50%' />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    );
};