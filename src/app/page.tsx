"use client";
import Tombol_1, { Tombol_2, Tombol_3} from "./component/button";
import Gallery from "./component/gallery";
import Form, { Form_2 } from "./component/form";

export default function Home(){
  return(
    <>
    <div className="container mx-auto">
    <h2>Kuis Kota</h2>
    <Tombol_1/>
    <hr></hr>
    <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan"/>
    </div>
    <br></br>
    <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
      <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
      <Tombol_3 isiPesan="Child Element : Tombol-2" namaTombol="Tombol-2"/>
    </div>
    <br></br>
    <Gallery/>
    <br></br>
    <Form/>
    <br></br>
    <Form_2/>
    </>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onshow={() => setActiveIndex(0)}
      >
        Dengan populasi sekitar 2 juta orang, Almaty adalah kota terbesar di Kazakhstan.
        Dari tahun 1929 hingga 1997, kota ini menjadi ibu kota Kazakhstan.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onshow={() => setActiveIndex(1)}
      >
        Nama "Almaty" berasal dari kata <span lang="kk-KZ">алма</span>,
        dalam bahasa Kazakh yang berarti "apel" dan sering diterjemahkan sebagai
        "penuh dengan apel". Sebenarnya, wilayah sekitar Almaty dipercaya
        sebagai asal usul apel, dan <i lang="la">Malus sieversii</i> liar
        dianggap sebagai kandidat yang mungkin menjadi nenek moyang apel domestik
        modern.
      </Panel>
    </>
  );
}