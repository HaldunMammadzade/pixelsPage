// var mainDiv = document.getElementById('workMap');
var myObj = {
    imageUrl: '/backg.png',
    banner: "",
    instagramLink: '',
    text: '',
    areas: [
        {
            url: 'site1.com',
            title: 'site1',
            start: [0,0],
            size: [10,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site2.com',
            title: 'site2',
            start: [10,0],
            size: [20,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site3.com',
            title: 'site3',
            start: [20,0],
            size: [30,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site4.com',
            title: 'site4',
            start: [30,0],
            size: [40,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site5.com',
            title: 'site5',
            start: [40,0],
            size: [50,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site6.com',
            title: 'site6',
            start: [50,0],
            size: [60,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site7.com',
            title: 'site7',
            start: [60,0],
            size: [70,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site8.com',
            title: 'site8',
            start: [70,0],
            size: [80,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site9.com',
            title: 'site9',
            start: [80,0],
            size: [90,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site10.com',
            title: 'site10',
            start: [90,0],
            size: [100,10],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site11.com',
            title: 'site11',
            start: [0,10],
            size: [10,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site12.com',
            title: 'site12',
            start: [10,10],
            size: [20,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site13.com',
            title: 'site13',
            start: [20,10],
            size: [30,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site14.com',
            title: 'site14',
            start: [30,10],
            size: [40,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site14.com',
            title: 'site14',
            start: [40,10],
            size: [50,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site15.com',
            title: 'site15',
            start: [50,10],
            size: [60,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site16.com',
            title: 'site16',
            start: [60,10],
            size: [70,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site17.com',
            title: 'site17',
            start: [70,10],
            size: [80,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site18.com',
            title: 'site18',
            start: [80,10],
            size: [90,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site19.com',
            title: 'site19',
            start: [90,10],
            size: [100,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },
        {
            url: 'site20.com',
            title: 'site20',
            start: [100,10],
            size: [110,20],
            target: '_blank',
            alt: 'alt',
            shape: 'rect'
        },

    ]
};

function appendElements() {
    for(let i =0; i < myObj.areas.length; i++) {
        let area = document.createElement('area');
        area.setAttribute('coords', myObj.areas[i].start.concat(myObj.areas[i].size));
        area.setAttribute('title', myObj.areas[i].title)
        area.setAttribute('href', myObj.areas[i].url)
        area.setAttribute('target', myObj.areas[i].target)
        area.setAttribute('alt', myObj.areas[i].alt)
        area.setAttribute('shape', myObj.areas[i].shape)
        workMap.appendChild(area);
    }
}

appendElements();