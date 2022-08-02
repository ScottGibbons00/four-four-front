import type { NextPage } from 'next';
import Landing from './landing';
import Navbar from './navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  )
}

export default Home
