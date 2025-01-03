import "../App.css"
import CardFunzionalita from "./CardFunzionalita"
import CardPrezzo from "./CardPrezzo"
import SezioniConFoto from "./SezioniConFoto"

function ContentDiv() {
    return (


        <>
            <div className="containerDiv">

                <div className="bar">
                    <div className="divTesto">
                        <h1>Per Bar e Ristoranti</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam ac rhoncus quam.
                        </p>
                    </div>

                </div>



                <div className='prezzo'>
                    <div>
                        <h2>Funzionalità</h2>
                        <div className="barCard">
                            <CardFunzionalita></CardFunzionalita>
                            <CardFunzionalita></CardFunzionalita>
                            <CardFunzionalita></CardFunzionalita>
                        </div>
                    </div>
                </div>


                <div className='principale'>
                    <SezioniConFoto link={"https://incloud.teamsystem.com/hubfs/vero-aiuto-cucina.png"} sxdx={true}></SezioniConFoto>
                </div>

                <div className="principale">
                    <SezioniConFoto link={"https://incloud.teamsystem.com/hubfs/incasso-sotto-controllo.png"} sxdx={false}></SezioniConFoto>
                </div>

                <div className="principale">
                    <SezioniConFoto link={"https://incloud.teamsystem.com/hubfs/incasso-sotto-controllo.png"} sxdx={true}></SezioniConFoto>
                </div>
                <div className='principale'>
                    <SezioniConFoto link={"https://incloud.teamsystem.com/hubfs/vero-aiuto-cucina.png"} sxdx={false}></SezioniConFoto>
                </div>

                <div className="principale">
                    <SezioniConFoto link={"https://incloud.teamsystem.com/hubfs/incasso-sotto-controllo.png"} sxdx={true}></SezioniConFoto>
                </div>

                <div className="principale">
                    <SezioniConFoto link={"https://incloud.teamsystem.com/hubfs/incasso-sotto-controllo.png"} sxdx={false}></SezioniConFoto>
                </div>


                <div className='prezzo'>
                    <div >
                        <h2>Prezzi</h2>
                        <div className="barCard">
                            <CardPrezzo prezzo={25}></CardPrezzo>
                            <CardPrezzo prezzo={50}></CardPrezzo>
                        </div>
                    </div>
                </div>


                <div className="ultimo">
                    <div className="barTesto">
                        <h2>Sub-header</h2>
                        <p>
                            Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                            fringilla aliquet..
                        </p>

                    </div>

                </div>






            </div>
        </>

    )
}

export default ContentDiv