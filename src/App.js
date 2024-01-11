
function App() {
  return (
    <div className="App">

<nav class="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="assets/imgs/logo.svg" alt="" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#riwayat">Riwayat</a>
                    </li>
                </ul>
            </div>
        </div>          
    </nav>

    <header class="header" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle">hello,I'm</h6>
                <h6 class="title">Riris Silvani</h6>
                <p>Siswa Smk</p>

                {/* <div class="socials mt-4">
                    <a class="social-item" href="javascript:void(0)"><i class="ti-facebook"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-google"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-twitter"></i></a>
                </div> */}
            </div>              
            <div class="img-holder" style={{ borderradius : "1000px" }}>
                <img src="assets/imgs/p.jpg" alt="" style={{ width : "50%" }} />
            </div>      
        </div>  
        
    </header>

    <section id="about" class="section mt-3">
        <div class="container mt-5">
            <div class="row text-center text-md-left">
                <div class="col-md-3">
                    <img src="assets/imgs/p.jpg" alt="" class="img-thumbnail mb-4" />
                </div>
                <div class="pl-md-4 col-md-9">
                    <h6 class="title">Riris Silvani</h6>
                    <p class="subtitle">Siswa Smk</p>
                    <p>Nama : Riris Silvani Putri Aprilia </p>
                    <p>Umur : 17 Th</p>
                    <p>Lahir : 28 April 2006</p>
                    <p>Sekolah : SMK NEGRI 6 JEMBER</p>
                    <p>Alamat : Tanggul</p>
                    <p>Status : Pelajar/Masih Sekolah</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="riwayat">
        <div class="container text-center">
            <h6 class="subtitle">Riwayat</h6>
            <h6 class="section-title mb-4">Riwayat Pendidikan</h6>

            <div class="row text-left">
                <div class="col-sm-6">
                    <h6 class="mb-3">TK DEWI MASHITO</h6>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>89%</span></div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h6 class="mb-3">SDN PATEMON 01</h6>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h6 class="mb-3">SMP NEGRI 4 TANGGUL</h6>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h6 class="mb-3">SMK NEGRI 6 JEMBER</h6>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                    </div>
                </div>
            </div>  
        </div>
    </section>

    </div>
  );
}

export default App;
