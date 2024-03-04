import './App.css';
import { useEffect, useState } from 'react';
import Loading from "./Loading";
import Mobiles from './Mobiles';
const mobiles = [{id:"1",name:"Original Motorola RAZR V3i GSM",quantity:"1",price:"28.24",image:'https://i.ebayimg.com/images/g/T08AAOSwvGlaVOJS/s-l500.jpg'},
                 {id:"2",name:"IDZEE Beauty Microphone Musical Phone(AIAIAI)",quantity:"1",price:"110.32",image:'https://m.media-amazon.com/images/I/31ddb8xtOcL._SX425_.jpg'},
                 {id:"3",name:"Nokia 2300 refurbished GSM",quantity:"1",price:"45.13",image:'https://tymkpck001.s3.amazonaws.com/product/image/main/e6abf780-f76c-430f-9204-0c5b353a9dc5.jpg'}]


function App() {

  const [loading,setLoading] = useState(false);
  const [devices,setDevices] = useState(mobiles);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  const removeMobile=(id) => {
    const leftMobiles = devices.filter((mobile) => mobile.id !== id );
    setDevices(leftMobiles);
  };


  if (loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }



  return (
  <Mobiles mobiles={devices} removeMobile={removeMobile} />
  );
}

export default App;
