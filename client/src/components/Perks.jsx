export default function Perk({selected, onChange}) {


    function handleCbClick(ev) {
        const {checked, name} = ev.target;
        if(checked) {
            onChange([...selected, name]);
        }else{
            onChange();
        }

        console.log(ev.target.name);
    }


    return (
        <div className="mt-2 gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    <label className="border cursor-pointer p-4 rounded-2xl gap-2 items-center flex ">
                        <input type="checkbox" name="wifi" onChange={handleCbClick}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                            </svg>
                        <span>
                           

                            Wifi</span>
                    </label>
                    <label className="border cursor-pointer p-4 rounded-2xl gap-2 items-center flex ">
                        <input type="checkbox" name="parking" onChange={handleCbClick} />
                        <span>Free parking spot</span>
                    </label>
                    <label className="border cursor-pointer p-4 rounded-2xl gap-2 items-center flex ">
                        <input type="checkbox" name="tv" onChange={handleCbClick}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        <span>
                            

                            TV</span>
                    </label>
                    <label className="border cursor-pointer p-4 rounded-2xl gap-2 items-center flex ">
                        <input type="checkbox" name="pets" onChange={handleCbClick}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                        <span>
                           

                            Pets</span>
                    </label>
                    <label className="border cursor-pointer p-4 rounded-2xl gap-2 items-center flex ">
                        <input type="checkbox" name="entrance" onChange={handleCbClick}/>
                        <span>Private Entrance</span>
                    </label>
                    <label className="border cursor-pointer p-4 rounded-2xl gap-2 items-center flex ">
                        <input type="checkbox" name="radio" onChange={handleCbClick}/>
                        <span>Radio</span>
                    </label>
                </div>
    )
}