"use client";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header className="relative w-full p-4 sticky top-0 z-50">
                <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
                <div className="relative flex justify-between items-center">
                    <div className="flex gap-x-4 items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Gestoría Digital"
                            width={80}
                            height={80}
                        />
                        <h4 className="text-white leading-tight">
                            Gestoría <br /> Digital
                        </h4>
                    </div>
                    <nav className="flex gap-x-6">
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