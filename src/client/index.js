import {handleSubmit} from './js/app'
import {dateStart} from './js/date'
import {dateReturn} from './js/date'
import {format} from './js/date'
import './css/base.scss'
import './css/form.scss'
import './css/main.scss'

// import weather icons
import './icons/a01d.png'
import './icons/a01n.png'
import './icons/a02d.png'
import './icons/a02n.png'
import './icons/a03d.png'
import './icons/a03n.png'
import './icons/a04d.png'
import './icons/a04n.png'
import './icons/a05d.png'
import './icons/a05n.png'
import './icons/a06d.png'
import './icons/a06n.png'
import './icons/c01d.png'
import './icons/c01n.png'
import './icons/c02d.png'
import './icons/c02n.png'
import './icons/c03d.png'
import './icons/c03n.png'
import './icons/c04d.png'
import './icons/c04n.png'
import './icons/d01d.png'
import './icons/d01n.png'
import './icons/d02d.png'
import './icons/d02n.png'
import './icons/d03d.png'
import './icons/d03n.png'
import './icons/f01d.png'
import './icons/f01n.png'
import './icons/r01d.png'
import './icons/r01n.png'
import './icons/r02d.png'
import './icons/r02n.png'
import './icons/r03d.png'
import './icons/r03n.png'
import './icons/r04d.png'
import './icons/r04n.png'
import './icons/r05d.png'
import './icons/r05n.png'
import './icons/r06d.png'
import './icons/r06n.png'
import './icons/s01d.png'
import './icons/s01n.png'
import './icons/s02d.png'
import './icons/s02n.png'
import './icons/s03d.png'
import './icons/s03n.png'
import './icons/s04d.png'
import './icons/s04n.png'
import './icons/s05d.png'
import './icons/s05n.png'
import './icons/s06d.png'
import './icons/s06n.png'
import './icons/t01d.png'
import './icons/t01n.png'
import './icons/t02d.png'
import './icons/t02n.png'
import './icons/t03d.png'
import './icons/t03n.png'
import './icons/t04d.png'
import './icons/t04n.png'
import './icons/t05d.png'
import './icons/t05n.png'
import './icons/u00d.png'
import './icons/u00n.png'



export{
    handleSubmit,
    dateStart,
    dateReturn,
    format
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate').addEventListener('click', handleSubmit);
    document.getElementById('generate').addEventListener('submit', handleSubmit);
    document.getElementById('set').addEventListener('submit', handleSubmit);
    document.getElementById('return').addEventListener('focus', dateReturn);
    document.getElementById('start').addEventListener('focus', dateStart);
});