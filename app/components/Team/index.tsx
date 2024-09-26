"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";

export function Team({goTopButtonClicked}: {goTopButtonClicked: boolean}) {
    return (
        <div className="px-12 mx-12 border-x-2 border-deepGray" id="team">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-6 w-1/2 text-white py-32">
                    <div className="text-center px-6 py-1 rounded-full bg-gradient-to-r from-[#0A6BF8] to-[#CB4AFC] border-gray-600 border-2 w-64 uppercase font-bai">
                        Detrás de KAIX
                    </div>
                    <h1 className="text-8xl font-semibold">
                        Equipo
                    </h1>
                </div>
                <div className="flex flex-col items-start gap-4 text-white">
                    <p className="font-light font-md">
                    Nuestro equipo dedicado está comprometido en presentarte <br/> soluciones financieras de primer nivel.
                    </p>
                </div>
            </div>
            <ParallaxScroll team={team}  goTopButtonClicked={goTopButtonClicked}/>
        </div>
    )
}

const team = [
    { id: 1, name: "Mitsuo Méndez Reyna", position: "CEO / Founder", imgUrl: "/team/Mitsuo HD.png", linkedin: "https://www.linkedin.com/in/mitsuomendz/" },
    { id: 2, name: "Brandon Magaña Reyna", position: "Jr. Marketing Analyst", imgUrl: "/team/Brandon.png", linkedin: "https://www.linkedin.com/in/brandon-m-reyna-73a141304/" },
    { id: 6, name: "Alejandra Méndez Reyna", position: "CMO & CDO (Chief Design Officer)", imgUrl: "/team/Alejandra HD.png", linkedin: "https://www.linkedin.com/in/alejandra-mendez-reyna-466002183/" },
    { id: 7, name: "Maximiliano Rivera Jiménez", position: "Graphic Designer", imgUrl: "/team/Maximiliano HD.png", linkedin: "https://www.linkedin.com/in/maximiliano-rivera-jim%C3%A9nez-8a3b5b228/" },
    { id: 5, name: "Álvaro Delgado Covarrubias", position: "CTO", imgUrl: "/team/Alvaro.png", linkedin: "https://www.linkedin.com/in/aadelgado/" },
    { id: 3, name: "Ignacio Gallardo Diaz", position: "Jr. Fin. Analyst", imgUrl: "/team/Ignacio HD.png", linkedin: "https://www.linkedin.com/in/igallardodiaz/" },
    { id: 4, name: "Lisset Mayela Lozano Hernandez", position: "Executive Support Specialist", imgUrl: "/team/Lisset HD.png", linkedin: "https://www.linkedin.com/in/lisset-mayela-lozano-hernandez-2a169722b/" },
    { id: 8, name: "Regina Vizcarra Casillas", position: "Jr. Fin. Analyst", imgUrl: "/team/Regina HD.png", linkedin: "https://www.linkedin.com/in/https://www.linkedin.com/in/regina-vizcarra-casillas/" },
];