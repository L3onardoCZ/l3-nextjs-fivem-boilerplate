import { useUI } from "@/context/UIContext";

export default function UI() {
    const { data } = useUI();

    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="text-2xl text-white bg-slate-400/10 px-10 py-8 rounded-lg">UI: <span>{data}</span></div>
        </div>
        
    )
};
