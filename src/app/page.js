import style from '../style/homepage.module.scss'

//import components
import Navbar from '../components/navbar'
import Card from '../components/card'
import Slider from '../components/slider'
import News from '@/components/News'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className={style.main}>
      <Navbar />
      <Card />
      <Slider />
      <News />
      <Footer />
    </main>
  )
}
