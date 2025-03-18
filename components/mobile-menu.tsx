import {createContext, PropsWithChildren, ReactNode, useContext, useEffect} from "react";
import {motion} from "framer-motion"
import Backdrop from "./backdrop";
import {X as Close} from "lucide-react";

interface FlyoutContext{
    handleClose: () => void
}

interface FlyoutProvider extends PropsWithChildren {
    handleClose: () => void
}

interface FlyoutMenuProps extends PropsWithChildren {
    handleClose: () => void;
}

const FlyoutContext = createContext<FlyoutContext | undefined>(undefined)

const useFlyoutContext = () => {
    const context = useContext(FlyoutContext);
    if(!context) {
        throw new Error('useFloutContext must be used within a FlyoutMenu Component');
    }
    return context;
}



const FlyoutProvider = ({children, handleClose}: FlyoutProvider) => {
    return(
        <FlyoutContext.Provider value={{ handleClose }}>
            {children}
        </FlyoutContext.Provider>
    )
}
const FlyoutMenuTitle = ({children}: {children: ReactNode}) => {
    const {handleClose} = useFlyoutContext();
    return (
        <div className="flex items-center justify-between">
            <h3 className="font-medium text-[1.75rem]">{children}</h3>
            <span onClick={handleClose} className="cursor-pointer">
            <Close size={20} />
            </span>
        </div>
    )
}


const FlyoutMenu = ({handleClose, children}: FlyoutMenuProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClose]);
    return(
        <Backdrop onClick={handleClose} className="justify-start">
            <FlyoutProvider handleClose={handleClose}>
                <motion.div
                    initial={{x: -500}}
                    animate={{x: 0}}
                    exit={{x: -500}}
                    className="h-full  w-[300px] bg-white py-4 px-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </motion.div>
            </FlyoutProvider>
        </Backdrop>
    )
}

FlyoutMenu.Title = FlyoutMenuTitle;
export default FlyoutMenu;