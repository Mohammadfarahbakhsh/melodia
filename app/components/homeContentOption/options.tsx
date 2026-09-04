const Options = () => {
    const options = [
        { id: 1, label: "موسیقی" },
        {id:5,label:"پادکست"},
        { id: 2, label: "جهان" },
        { id: 3, label: "ایران" },
        { id: 4, label: "همه" }
    ];

    return (
        <div className='w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
            <div className='flex justify-center md:justify-end items-center gap-2 md:gap-4 lg:gap-6 px-2 md:px-6 py-4 md:py-4 min-w-max'>
                {options.map((option) => (
                    <button
                        key={option.id}
                        className='
                            hover:bg-[#98Ef00] 
                            hover:transition 
                            hover:delay-75 
                            text-black 
                            hover:opacity-75
                            rounded-full 
                            bg-[#98EF00]
                            /* Responsive sizes */
                            w-auto 
                            min-w-17.5 
                            md:min-w-22.5 
                            lg:w-24
                            h-7 
                            md:h-8 
                            lg:h-8
                            px-3 
                            md:px-4
                            text-xs 
                            md:text-base 
                            lg:text-lg
                            font-medium
                            whitespace-nowrap
                            shrink-0
                            transition-all
                            duration-200
                            flex
                            items-center
                            justify-center
                            text-center
                        '
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Options