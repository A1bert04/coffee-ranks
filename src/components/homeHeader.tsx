import SearchBar from "@/components/searchBar";

export default function HomeHeader() {
    return <div className="h-[65vh] flex flex-col justify-center text-center">
        <h1 className="text-6xl font-serif">Coffee Ranks &nbsp;
        <span className="text-4xl">(.com)</span>
        </h1>
        <h2 className="text-xl font-serif py-5">
            Welcome to the home of the coffeeholics.
        </h2>
       <div className="w-full flex flex-row justify-center py-10">
           <div className="w-1/4 text-centert">
               <SearchBar/>
           </div>
       </div>
    </div>;
}
