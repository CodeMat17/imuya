import ReactMarkdown from "react-markdown"

function AboutImeama() {
    return (
        <div className="py-8 px-4 max-w-4xl mx-auto">
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 w-[210px] h-[140px] blur-2xl mx-auto 
                    bg-gradient-to-r from-purple-600 via-orange-600 to-lime-600"></div>
                <div className="relative">
                    <img 
                        src="/aboutImeama.webp"
                        className="rounded-lg"
                    />
                </div>
            </div>
            <div className="py-4">
                <h1 className="text-center font-rye text-xl">
                    ABOUT IMEAMA
                </h1>
                <div className="mt-10 text-lg tracking-wider font-semibold space-y-8 gap-x-12 columns-xs ">
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
                            THE COMPOSITION OF IMEAMA
                        </p>
                        <p>
                            Imeama is made up of Ihu-eke and Ihu-akpalata villages.
                        </p>
                        <p className="font-bold text-purple-600 tracking-widest mt-8">
                            Families in Ihu-eke
                        </p>
                        <ul className="mt-1">
                            <li>Umu Chifu</li>
                            <li>Umu Onovo</li>
                            <li>Umu Egbonu</li>
                            <li className="text-red-500">List will be updated soon.</li>
                        </ul>
                        <p className="font-bold text-purple-600 tracking-widest mt-8">
                            Families in Ihu-akpalata.
                        </p>
                        <ul className="mt-1">
                            <li>Umu Chima</li>
                            <li>Umu Chi</li>
                            <li>Umu Njoku na Ugama</li>
                            <li>Umu Nvutaife</li>
                            <li className="text-red-500">List will be updated soon.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutImeama
