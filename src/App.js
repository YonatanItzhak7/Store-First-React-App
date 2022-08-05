import './App.css';
import WelcomeUser from './Home.jsx'
import MyName from './Title.jsx'
import NewPicture from './Product.jsx'
import ProductClass from './Product.component.jsx'
import Title from './Title.component.jsx'
import TopHead from './Header.component'
function App() {
  return (
    <div>
      <WelcomeUser/>
      <MyName name="Yonatan"/>
      <MyName name="Eldad"/>
      <MyName name="Solomon"/>
      <MyName name="Netanel"/>
      <MyName name="Yossi"/>
      <NewPicture src="https://cdn.shopify.com/s/files/1/0535/0493/files/one-eye-transparent_large.png?4260524264372094991"/>
      <NewPicture src="/stickman1.gif"/>
      <NewPicture src="/stickman2.gif"/>
      <NewPicture src="/stickman3.webp"/>
      <NewPicture src="/stickman4.gif"/>
      <NewPicture src="/stickman5.gif"/>
      <ProductClass/>
      <Title name ="Headline"/>
      <TopHead/>
    </div>
  )
    
}

export default App;
