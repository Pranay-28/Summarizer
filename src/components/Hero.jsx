
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className=' w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center mb-10 pt-3 w-full'>
        <img src={logo} alt='Sum_logo' className='w-28 object-contain'/>
        <button
          type='button'
          onClick={() => window.open("https://github.com/Pranay-28")} 
          className='black_btn'
        >
        Github
        </button>
      </nav>
       <h1 className='head_text'>
        Summarize your article with <br
            className='max-md:hidden'
        />
        <span className='orange_gradient'>OpenAI GPT-4</span>
       </h1>
       <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
       </h2>

    </header>
  )
}

export default Hero