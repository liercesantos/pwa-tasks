

export const reorder = (array, column) => {
    return array.sort(( a, b ) => {
        switch (column) {
            case 'id': {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;

                break;
            }
            case 'name': {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;

                break;
            }
            default: {
                const aHour = a.schedule.split(":")[0];
                const aMinute = a.schedule.split(":")[1];
                const bHour = b.schedule.split(":")[0];
                const bMinute = b.schedule.split(":")[1];

                if ( +aHour < +bHour || ((+aHour === +bHour) && (+aMinute < +bMinute))) return -1;
                if ( +aHour > +bHour || ((+aHour === +bHour) && (+aMinute > +bMinute))) return 1;

                break;
            }
        }
        return 0;

    })
}
