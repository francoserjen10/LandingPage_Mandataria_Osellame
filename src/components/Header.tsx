import Image from "next/image";

export default function Header() {
    return (
        <>
            <header className="w-full p-4">
                <div className="flex h-auto justify-between items-center">
                    <div className="flex gap-x-4 items-center">
                        <Image
                            src="/images/logo-final-0.2.png"
                            alt="Gestoría Olavarría"
                            width={80}
                            height={80}
                        />
                        <h4 className="text-white leading-tight">
                            Gestoría <br /> Osellame
                        </h4>
                    </div>
                    <nav className="flex text-white gap-x-6">
                        <a href="#inicio"> Inicio </a>
                        <a href="#servicios" > Servicios </a>
                        <a href="#servicios"> Sobre Mí </a>
                        <a href="#servicios"> Testimonios </a>
                        <a href="#servicios"> Contacto </a>
                        <a href="#servicios"> Whatsapp </a>
                    </nav>
                </div>
            </header>
        </>
    );
}