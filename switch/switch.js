let sign = prompt('¿Cual es tu signo?').toLowerCase();

switch (sign){
    case 'acuario':
        console.log('Desde los primeros días del mes, algunos nativos de este signo serán el centro de una mayor interacción social, sobre todo si trabajan en campos como el arte, los negocios o las humanidades.')
    break
    case 'piscis':
        console.log('La palabra clave es “revisión” para muchos de los influenciados por esta casa zodiacal. Puede que resulte algo rutinario esto de replantearse constantemente los objetivos y automotivaciones.')
    break
    case 'aries':
        console.log('Un mes de cambios muy positivos para muchos de los nativos de este signo. Se abren puertas para un mayor éxito profesional y se estremecen las raíces del amor reflexivo.')
    break
    case 'tauro':
        console.log('Mes para reorganizarse y sanar internamente, si no lo hiciste en los primeros días del año.')
    break
    case 'geminis':
    case 'géminis':
        console.log('La clave este mes será el autoanálisis y evaluación de metas con fines más realistas. Muy oportuno para afinar estrategias y dar vueltas de timón para enrumbarse hacia lo que se busca.')
    break
    case 'cancer':
    case 'cáncer':
        console.log('Un mes que comienza con posibles cuestionamientos por parte de los nativos del signo hacia sus propios objetivos y logros.')
    break
    case 'leo':
        console.log('Mes de búsquedas internas y de planificación para elevar la entrada de dinero y hallar mayor paz mental y física. El éxito puede estar a la vuelta de la esquina si se abren bien los ojos.')
    break
    case 'virgo':
        console.log('La clave de este mes en tu signo será control y cuidado. No se trata de situaciones de peligro, sino más bien de estar alerta para no caer en discusiones vacías o pérdidas de dinero por descuido.')
    break
    case 'libra':
        console.log('La palabra “organización” podría marcar buena parte de tus acciones y las situaciones que potencialmente podrías experimentar este mes.')
    break
    case 'escorpio':
    case 'escorpion':
    case 'escorpión':
        console.log('La paciencia será determinante para superar las pruebas este mes. Es importante tener siempre en cuenta que hay ciclos que pueden ser más exigentes que otros, aunque esto no quiere decir que sean negativos.')
    break
    case 'sagitario':
        console.log('El pasado podría regresar este mes bajo la figura de tensiones familiares que no fueron resueltas en su oportunidad. Afortunadamente, la salud física y emocional estará en alza por la conjunción astral.')
    break
    case 'capricornio':
        console.log('Un mes de encuentros familiares y oportunidades para armonizar todos los espacios en donde se desenvuelven los nativos de esta casa.')
    break
    default:
        alert('Ingresa un signo valido');
        location.reload();
    break
}