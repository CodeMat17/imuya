import ReactMarkdown from "react-markdown"

function AboutUs() {
    return (
        <div id="about" className="py-8 px-4 max-w-4xl mx-auto scroll-mt-24">
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center 
                justify-center w-[155px] h-[155px] mx-auto blur-2xl 
                bg-gradient-to-r from-purple-600 via-orange-600 to-lime-600 rounded-full animate-spin">
                </div>
                    <img 
                        src="/aboutImg.webp"
                        className="relative rounded-full aspect-[1/1]"
                    />
              
            </div>
            <div className="py-4">
                <h1 className="text-center font-rye text-xl">
                    ABOUT IMUYA
                </h1>
                <div className="mt-10 text-lg tracking-wider font-semibold space-y-8 columns-xs gap-x-12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Iaculis at erat pellentesque adipiscing commodo elit. 
                        Enim blandit volutpat maecenas volutpat blandit aliquam etiam. 
                        Et egestas quis ipsum suspendisse ultrices gravida. Nisi 
                        scelerisque eu ultrices vitae auctor eu. Quis risus sed 
                        vulputate odio ut enim blandit volutpat. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Iaculis at erat pellentesque adipiscing commodo elit. 
                        Enim blandit volutpat maecenas volutpat blandit aliquam etiam. 
                        Et egestas quis ipsum suspendisse ultrices gravida. Nisi 
                        scelerisque eu ultrices vitae auctor eu. Quis risus sed 
                        vulputate odio ut enim blandit volutpat. 
                    </p>
                    <div id="mission" className="scroll-mt-24">
                        <p className="font-bold text-purple-600 tracking-widest">
                            MISSION & VISSION STATEMENT
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Iaculis at erat pellentesque adipiscing commodo elit. 
                        Enim blandit volutpat maecenas volutpat blandit aliquam etiam. 
                        Et egestas quis ipsum suspendisse ultrices gravida. Nisi 
                        scelerisque eu ultrices vitae auctor eu. Quis risus sed 
                        vulputate odio ut enim blandit volutpat. 
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
