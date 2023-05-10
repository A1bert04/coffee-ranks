export default function Navbar() {
    return <nav className="h-12 flex flex-col justify-center mx-20">
        <div className="flex justify-center">
            <div className="w-1/2">
            </div>
            <div className="w-1/2 text-right">
                <a href="/login" className="text-md font-serif text-teal-600 hover:underline px-3">Login</a>
                <a href="/signup" className="text-md font-serif text-teal-600 hover:underline px-3">Sign Up</a>
            </div>
        </div>
    </nav>
}
