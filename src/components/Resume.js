
import ResumeImg from '../assets/resume.jpg';

export default function Resume(){

    const config = {
        link : 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end' >
            <img src={ResumeImg} className='w-[300px]'/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[135px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my Resume <a className='btn' href={config.link}>Download</a></p>
            </div>
        </div>
    </section>
}