export default function Header() {
    return (
        <div className="border-b border-red-400/10 pb-3 mb-3 flex items-center space-x-2">
            <h1 className="text-red-400 text-3xl font-light">@windui</h1>
            <span className="uppercase font-extralight text-white text-sm bg-red-800/10 backdrop-blur py-2 px-4 rounded-md">
                UI Packages
            </span>
            <h1 className="flex-1 text-right text-red-400">
                Developed with ❤️
            </h1>
        </div>
    );
};