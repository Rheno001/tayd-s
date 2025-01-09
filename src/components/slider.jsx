const Slider = () => {
    return (
        <div className="overflow-hidden py-[5px]">
            <div className="relative z-[0]">
                <div className="flex justify-center relative z-[999]">
                    <div className="sliding-text-box w-[110%] z-[999] relative">
                        <div className="sliding-text flex justify-center items-center font-sigmar gap-[10px] lg:gap-[40px]">
                            {/* Original content */}
                            <div className="lg:text-[20px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>💸 Affordable Memberships</p> </div>
                            <div className="lg:text-[20px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>🎯 Achieve Your Goals Faster</p> </div>
                            <div className="lg:text-[20px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>🏋️ Expert Trainers</p> </div>


                            {/* Duplicate content */}
                            <div className="lg:text-[20px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>🔥 Variety of Classes</p> </div> 
                            <div className="lg:text-[20px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>🕒 Flexible Hours</p> </div> 
                            <div className="lg:text-[20px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>🌟 Exclusive Amenities</p> </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;