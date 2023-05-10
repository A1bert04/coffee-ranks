export default function SearchBar() {
    return <div className="flex flex-row">
        <div className="border-2 border-black rounded-3xl w-full">
            <input type="text" className="w-full font-serif rounded-3xl px-5 py-2"
                   placeholder="Search for coffee or category..."/>
        </div>
        <div className="w-1/6">
            <div className="flex flex-col justify-center w-max h-full mx-2">
                <button className="bg-black h-full text-white rounded-3xl px-5 py-2 hover:bg-teal-700
                ">Search</button>
            </div>
        </div>
    </div>;
}
