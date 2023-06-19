import React, { useEffect, useState } from "react";


const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  

  useEffect(() => {
    const countdownDate = new Date("August 28, 2023").getTime();

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const distance = countdownDate - currentTime;

      const calculatedDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const calculatedMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const calculatedSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(calculatedDays);
      setHours(calculatedHours);
      setMinutes(calculatedMinutes);
      setSeconds(calculatedSeconds);
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    
    <div class="container">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        </meta>
      </head>
     
      <img class="me-5 contfade  "src="/images/uclogo.png" alt="logo_uc" width={128} />
      
      <img class="ms-5 contfade " src="/images/oweeklogo.png" alt="logo_uc" width={90} />
      <div class="my-5">
        <h1>
          <strong>Countdown to Universitas Ciputra
Orientation Week 2023</strong>
        </h1>
        <br />
        <div class="text-center text-white countdownbar contfade ">
          <div class="row align-items-center justify-content-center">
            <div class="col pt-3">
              <h1 class="display-1 fw-bold orangeuc">{days}</h1>
              <p>Days</p>
              
            </div>
            <div class="col pt-3">
              <h1 class="display-1 fw-bold orangeuc">{hours}</h1>
              <p>Hours</p>
            </div>
            <div class="col pt-3">
              <h1 class="display-1 fw-bold orangeuc">{minutes}</h1>
              <p>Minutes</p>
            </div>
            <div class="col pt-3">
              <h1 class="display-1 fw-bold orangeuc">{seconds}</h1>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-5 contfadeb ">
        <h1>
          <strong>About O-Week </strong>
        </h1>

          
            <div class="card p-4 mx-auto px-5">
              <p className=" pinfo">
              Masa orientasi baru atau yang lebih dikenal dengan <b>O-Week</b> merupakan sebuah proses pembelajaran bagi mahasiswa baru terutama dalam menemukan jati diri mereka. Mahasiswa diajarkan untuk memiliki karakter yang unggul dan mandiri sebagai pemimpin dan calon entrepreneur muda. Setiap mahasiswa juga harus memiliki sebuah visi dalam membangun sebuah bisnis yang memiliki dampak tidak hanya bagi dirinya sendiri namun juga bagi masyarakat dan bangsa ini. Visi merupakan sebuah gambaran masa depan bagi calon entrepreneur muda yang harus dibentuk sejak dini, hal ini selaras dengan tema <b>O-Week</b> yaitu mahasiswa diajak untuk menjadi pribadi yang sukses dalam bisnis dan cita-cita mereka. Calon Mahasiswa/i baru <b>Universitas Ciputra</b> dapat mengakses informasi tentang Universitas di bawah ini
              </p>
              
              <a href="https://uc.ac.id" class="mx-auto">
              <button class="btn btn-primary p-2 ">Visit UC Website</button>
              </a>
              
            </div>
          
        
      </div>
      
    </div>
    
  );
  
};


export default CountdownTimer;
