import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./profil.css";

const Profil: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle className="profil">Profil Aplikasi</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                
                
               {/* Tambahkan tabel untuk teks lain di sini */}
                    <table className="content-table">
                        <tbody>
                    <tr><td>Aplikasi dibuat menggunakan IONIC versi 7 dengan framework React, tools yang digunakan yaitu VS CODE, Android Studio, WEB BROWSER.</td><td><a href="https://ionicframework.com/">IONIC</a></td></tr>
                    
                <tr><td>API yang digunakan diambil dari web :</td><td><a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">openweathermap.org</a></td></tr>
                <tr><td>Profil Github :</td><td> <a href="https://github.com/Vqylangi">@Vqylangi</a></td></tr>
                <tr>
                    <td>Nama Pembuat</td>
                    <td>Vicky Rolando Langi</td>
                </tr>
                <tr>
                    <td>NIM</td>
                    <td>210211060251</td>
                </tr>
                    </tbody>
                </table>
            </IonContent>
            <IonFooter>
                <IonToolbar className="VRL" color={'primary'}>
                    VL-WEATHER APP
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default Profil;
