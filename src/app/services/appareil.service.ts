export  class AppareilService {
    appareils = [
        {
            name : 'Machine à laver',
            status: 'éteint'
        },
        {
            name : 'Télévision',
            status: 'allumé'
        },
        {
            name : 'Ordinateur',
            status: 'éteint'
        }
    ];


    onAllumer() {
        for (let appareil of this.appareils){
            appareil.status = 'allumé';

        }
    }
    onEteindre() {
        for (let appareil of this.appareils){
            appareil.status = 'éteint';

        }
    }

    onSwitchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
    }
    onSwitchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }
}