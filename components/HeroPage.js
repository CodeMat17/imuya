function HeroPage() {
    return (
        <div id="hero" className="pt-20 pb-8">
            
              <div className="relative h-72 px-8 text-center flex flex-col items-center justify-center 
              bg-gradient-to-tr from-lime-400 to-purple-500
              space-y-2
              [clip-path:circle(88%_at_20%_30%)]
              sm:[clip-path:circle(100%_at_20%_30%)]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-lime-400 to-purple-500 blur-xl h-64"></div>
                <h3 className="relative text-xl md:text-2xl text-black font-semibold tracking-wider">
                    This is the official website of the
                </h3>
                <h1 className="relative font-rye text-3xl md:text-4xl md:px-12 text-black font-semibold tracking-wider">
                    Imeama Mkpumonu United Youths Assembly.
                </h1>
                <h2 className="relative text-3xl text-gray-800 tracking-widest font-bold">
                    (IMUYA)
                </h2>
              </div>
                  
       
        </div>
    )
}

export default HeroPage
