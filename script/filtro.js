document.addEventListener('DOMContentLoaded', function () {
    //Inicializamos flatpickr
    const dateInput = flatpickr("#fecha", {
        mode: "multiple",
        dateFormat: "dMy",
        altInput: true,
        altFormat: "d M Y",
    });

    //Revisamos cuando se envía el formulario
    document.getElementById('buscar-hotel').addEventListener('submit', function (event) {
        event.preventDefault();
        
        //Revisamos el tipo de cliente y la fecha
        const customerType = document.getElementById('tipoDeCliente').checked ? 'Recompensa' : 'Regular';
        const fechasSeleccionadas = dateInput.selectedDates;

        if (fechasSeleccionadas.length === 0) {
            alert("Selecciona 1 o más días");
            return;
        }
        //Hoteles
        const hoteles = [
            {
                nombre: 'Lakewood',
                calificacion: 3,
                weekdayRates: { Regular: 110, Recompensa: 80 },
                weekendRates: { Regular: 90, Recompensa: 80 },
                descripcion:"Disfruta de la tranquilidad y el confort en Lakewood, donde cada rincón está diseñado para tu descanso. Ideal para quienes buscan una escapada relajante.",
                img:"../img/hotel1.png"
            },
            {
                nombre: 'Bridgewood',
                calificacion: 4,
                weekdayRates: { Regular: 160, Recompensa: 110 },
                weekendRates: { Regular: 60, Recompensa: 50 },
                descripcion:"Sumérgete en el lujo accesible de Bridgewood. Un hotel encantador que combina elegancia y comodidad, perfecto para tus vacaciones o viajes de negocios.",

                img:"../img/hotel2.png"
            },
            {
                nombre: 'Ridgewood',
                calificacion: 5,
                weekdayRates: { Regular: 220, Recompensa: 100 },
                weekendRates: { Regular: 150, Recompensa: 40 },
                descripcion:"Vive una experiencia cinco estrellas en Ridgewood. Servicios de primer nivel y atención personalizada en un entorno sofisticado, ideal para los viajeros más exigentes.",
                img:"../img/hotel3.png"
            }
        ];

        //Calculamos el valor de la reserva
        let hotelCosts = hoteles.map(hotel => {
            let totalCost = 0;
            fechasSeleccionadas.forEach(date => {
                let isWeekend = (date.getDay() === 0 || date.getDay() === 6);
                let dayType = isWeekend ? 'weekend' : 'weekday';
                totalCost += hotel[`${dayType}Rates`][customerType];
            });
            return { ...hotel, totalCost };
        });
        
         //Ordenamos los hoteles si tienen el mismo costo
        hotelCosts.sort((a, b) => {
            if (a.totalCost === b.totalCost) {
                return b.calificacion - a.calificacion;
            }
            return a.totalCost - b.totalCost;
        });

        //Dibujamos las estrellas
        function generateStarRating(rating) {
            let starsHTML = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    starsHTML += '<span class="fa fa-star checked"></span>';
                } else {
                    starsHTML += '<span class="fa fa-star"></span>';
                }
            }
            return starsHTML;
        }

         //Resultado de la busqueda
        let resultHTML = '';
        hotelCosts.forEach(hotel => {
            resultHTML += `
                <div class="card-hotel sombra ${hotel.nombre === hotelCosts[0].nombre ? 'highlight' : ''}">
                    <div class="img-container">
                        <img src="${hotel.img}" alt="Imagen del hotel 1" class="img-hotel">
                    </div>
                    <div class="texto-hotel">
                        <h3>${hotel.nombre}</h3>
                            <p>${hotel.descripcion}</p>
                            <p>${generateStarRating(hotel.calificacion)}</p>
                            <p>Precio</p>
                            <p class="precio">$${hotel.totalCost}</p>
                            <div class="btn-container">
                                <a href="#" id="btn-reservar">Reservar</a>
                            </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('hoteles').innerHTML = resultHTML;
    });
});

