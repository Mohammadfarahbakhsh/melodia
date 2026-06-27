type ButtonProps={
    variant:"contained"|"outline"|"text"
}
const Button:React.FC<ButtonProps> = ({variant}) => {
    switch (variant) {
        case "contained" :
            return <div>
                <button className="hover:bg-[#98Ef00] 
                            hover:transition 
                            hover:delay-75 
                            text-[#ffffff] 
                            hover:text-[#070708] 
                            rounded-full 
                            bg-[#232329]
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
                        '">

                </button>
            </div>
           
        case "outline":
        default:
            break;
    }
}

export default Button;
