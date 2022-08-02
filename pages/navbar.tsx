import CircleLogo from '../assets/ff-circle-logo.svg';
import Image from 'next/image'

const Navbar = () => {
    return (
        <div id='navbar'>
            <Image src={CircleLogo} width={100} height={100} />
            <div id='links'>
                <h1>About</h1>
                <h1>Team</h1>
                <h1>Contact</h1>
            </div>
        </div>
    )
}
export default Navbar;