import React from 'react';

const TopicDetection: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto my-8 h-[260px] flex flex-col justify-center">
            <p className="text-md text-black/[.65]">
                Hola, estoy interesado en saber más sobre el <span className="bg-yellow-200 py-1 px-2 rounded-md">financiamiento</span> para el <span className="bg-black text-white py-1 px-2 rounded-md">BMW X5</span> pero tengo algunas dudas. Estoy buscando un <span className="bg-[#E13BA3] py-1 px-2 rounded-md text-white">modelo 2022</span> porque prefiero no comprar uno nuevo, y me gustaría entender las opciones de <span className="bg-[#3F5FFF] py-1 px-2 rounded-md text-white">financiamiento</span> disponibles, específicamente si ofrecen planes a <span className="bg-[#F93C65] text-white py-1 px-2 rounded-md">largo plazo</span>, como a 5 o 6 <span className="bg-blue-200 py-1 px-2 rounded-md">años</span>, y cuáles serían los <span className="bg-yellow-200 py-1 px-2 rounded-md">requisitos</span>... También me gustaría saber si podría hacer un <span className="bg-green-200 py-1 px-2 rounded-md">pago inicial</span> más alto para reducir las mensualidades, y si existe algún tipo de promoción o descuento por pagar una parte en efectivo. Por último, me pregunto si el <span className="bg-red-200 py-1 px-2 rounded-md">interés</span> es <span className="bg-purple-200 py-1 px-2 rounded-md">fijo o variable</span> y si es posible combinar el financiamiento con la compra de un <span className="bg-orange-200 py-1 px-2 rounded-md">seguro</span>.
            </p>
        </div>
    );
};

export default TopicDetection;
