import moment from "moment";
moment.locale('pt-br')

type DateProps = {
    startDate: string, // Tem que receber como ANO/MÊS/DIA (YYYY/MM/DD)
    endDate: string // Tem que receber como ANO/MÊS/DIA (YYYY/MM/DD)
}

export function MomentDate({ startDate, endDate }: DateProps) {
    const startDateFormart = moment(startDate).format("DD/MM/YYYY")
    const endDateFormart = moment(endDate).format("DD/MM/YYYY")

    const diff = moment(endDateFormart).diff(startDate)

    const diffDays = moment.duration(diff).asDays()

    return diffDays
}


export function CalcDate({ startDate, endDate }: DateProps) {  
    const diaInicial = new Date(startDate);
    const diaFinal = new Date(endDate);
    
    const diffMS = new Date('2022-08-18') - new Date("2022-08-19")

    const diffDays = diffMS / (1000 * 60 * 60 * 24);

    return diffDays
}