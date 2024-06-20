import photo_2 from "../assets/photo_2.jpg"

function Home(){
    return(
        <div className="w-full h-full">
            <div className="sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover 2xl:bg-cover bg-center h-[150vh] w-full flex items-start justify-center pt-[10em]" 
            style={{backgroundImage: `url(${photo_2})`}}
            >
                <div className="font-Josefin font-semibold text-[#022E43] flex flex-col items-center text-opacity-95">
                    <p className="text-[2rem]">Welcome to</p>
                    <p className="text-[3.9rem] flex items-start">DearDiary</p>
                    <p className="text-[1.6rem]">Your Ultimate dominion for immersive diary writing</p>
                    <p className="text-[1.2rem] font-normal">Life's a grand adventure. Scribble your stories here</p>
                    <p className="text-[1.2rem] font-normal">Whispers of the heart, dreams in motion. Capture it all, in this digital ocean.</p>
                    <p className="text-[1.2rem] font-normal">Memories bloom. Plant the seeds today.</p>
                    <button className="bg-[#765555] text-[#E3DDC5] font-Josefin font-normal mt-7 w-40 h-9 rounded-3xl">
                        SignUp/SignIn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;