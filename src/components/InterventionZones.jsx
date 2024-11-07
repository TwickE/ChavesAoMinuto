import interventionZonesImg from '../assets/interventionZones.webp'

function InterventionZones() {
    return (
        <section className="mt-12 bg-[#252330]">
            <div className='p-4 sm:p-10 bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `url(${interventionZonesImg})` }}>
                <h2 className="text-primary-default text-2xl text-center font-bold mb-4">Zonas de Intervenção</h2>
                <div className="grid grid-cols-2 gap-10 sm:gap-20 w-fit text-xl font-bold text-white mx-auto">
                    <ul className="list-disc list-inside flex flex-col gap-4">
                        <li>Almada</li>
                        <li>Amadora</li>
                        <li>Cascais</li>
                        <li>Lisboa</li>
                        <li>Loures</li>
                    </ul>
                    <ul className="list-disc list-inside flex flex-col gap-4">
                        <li>Odivelas</li>
                        <li>Oeiras</li>
                        <li>Seixal</li>
                        <li>Sintra</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default InterventionZones