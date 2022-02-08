import { useState, useEffect } from "react";
import md5 from "crypto-js/md5";
import axios from "axios";

export default function Index() {
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState(null);

    useEffect(async () => {
        try {
            const org = await axios.get("https://registry.npmjs.org/-/v1/search?text=scope:windui");
            if (org && org.data && org.data.objects) {
                setData(org.data.objects);
                setLoading(false);
            };
        } catch {};
    }, []);
    
    if (loading || data.length < 1) return (
        <div className="flex items-enter justify-center p-5">
            <i className="fal fa-spinner-third animate-spin text-red-400 fa-3x" />
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((item, index) => (
                <div key={index} className="bg-red-900/10 backdrop-blur p-5 rounded-xl">
                    <h1 className="text-white text-lg">{item.package.name}</h1>
                    <h6 className="text-zinc-400 text-xs">{item.package.description}</h6>
                    <h1 className="mt-5 font-extralight text-zinc-200 uppercase mb-1 text-xs">Keywords</h1>
                    <div className="flex items-center gap-1 flex-wrap">
                        {item.package.keywords.map((key, i) => (
                            <span className="py-1 px-2 rounded-full text-xs text-white bg-black" key={i}>
                                {key}
                            </span>
                        ))}
                    </div>
                    <h1 className="mt-5 font-extralight text-zinc-200 uppercase mb-1 text-xs">Maintainers</h1>
                    <div className="flex items-center gap-1 flex-wrap">
                        {item.package.maintainers.map((user, i) => (
                            <span className="py-1 pl-1 pr-2 rounded-full flex items-center text-sm text-white bg-black" key={i}>
                                <img className="h-8 w-8 rounded-full mr-2" src={`https://www.gravatar.com/avatar/${md5(user.email).toString()}`} alt="Photo" />
                                {user.username}
                            </span>
                        ))}
                    </div>
                    <a target="_blank" href={"https://npmjs.org/package/" + item.package.name} className="bg-red-400 text-zinc-900 py-2 px-4 rounded-xl mt-5 w-full flex items-center justify-center">
                        <i className="fal fa-external-link mr-2" /> View
                    </a>
                </div>
            ))}
        </div>
    );
};