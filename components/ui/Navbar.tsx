import Navitems from '@/components/Navitems'
const Navbar = () => {
  return (
    <nav className="navbar" >
        <div className="flex  items-center p-4">
            <div className="logo text-2xl font-bold">
            Learnify
            </div>
        </div>
        <div className="flex gap-8 items-center" >
            <Navitems/>
            <p>Sign In</p>
        </div>
    </nav>
  )
}

export default Navbar
