import actImg from './act.svg';
import adaImg from './ada.svg';
import adxImg from './adx.svg';
import aeImg from './ae.svg';
import aionImg from './aion.svg';
import ampImg from './amp.svg';
import antImg from './ant.svg';
import ardrImg from './ardr.svg';
import arkImg from './ark.svg';
import astImg from './ast.svg';
import atmImg from './atm.svg';
import batImg from './bat.svg';
import bayImg from './bay.svg';
import ltcImg from './ltc.svg';
import btcImg from './btc.svg';
import xrpImg from './xrp.svg';
import xmrImg from './xmr.svg';

const coins = [{img: btcImg, name: 'Bitcoin', symbol: 'btc'}, {
    img: xrpImg,
    name: 'Ripple',
    symbol: 'xrp'
}, {img: xmrImg, name: 'Monero', symbol: 'xmr'}, {img: ltcImg, name: 'Litecoin', symbol: 'ltc'}, {
    img: actImg,
    name: 'Achain',
    symbol: 'act'
}, {img: adaImg, name: 'Cardano', symbol: 'ada'}, {img: aeImg, name: 'Aeternity', symbol: 'ae'}, {
    img: aionImg,
    name: 'Aion',
    symbol: 'aion'
}, {img: ampImg, name: 'Synereo', symbol: 'amp'}, {img: antImg, name: 'Aragon', symbol: 'ant'}, {
    img: ardrImg,
    name: 'Ardor',
    symbol: 'ardr'
}, {img: arkImg, name: 'Ark', symbol: 'ark'}, {img: astImg, name: 'AirSwap', symbol: 'ast'}, {
    img: atmImg,
    name: 'ATMChain',
    symbol: 'atm'
}, {img: batImg, name: 'BatCoin', symbol: 'bat'}, {img: bayImg, name: 'BitBay', symbol: 'bay'}];
export const coinsWithSymbolKey = {
    btc: {img: btcImg, name: 'Bitcoin', symbol: 'btc'},
    xrp: {img: xrpImg, name: 'Ripple', symbol: 'xrp'},
    xmr: {img: xmrImg, name: 'Monero', symbol: 'xmr'},
    ltc: {img: ltcImg, name: 'Litecoin', symbol: 'ltc'},
    act: {img: actImg, name: 'Achain', symbol: 'act'},
    ada: {img: adaImg, name: 'Cardano', symbol: 'ada'},
    ae: {img: aeImg, name: 'Aeternity', symbol: 'ae'},
    aion: {img: aionImg, name: 'Aion', symbol: 'aion'},
    amp: {img: ampImg, name: 'Synereo', symbol: 'amp'},
    ant: {img: antImg, name: 'Aragon', symbol: 'ant'},
    ardr: {img: ardrImg, name: 'Ardor', symbol: 'ardr'},
    ark: {img: arkImg, name: 'Ark', symbol: 'ark'},
    ast: {img: astImg, name: 'AirSwap', symbol: 'ast'},
    atm: {img: atmImg, name: 'ATMChain', symbol: 'atm'},
    bat: {img: batImg, name: 'BatCoin', symbol: 'bat'},
    bay: {img: bayImg, name: 'BitBay', symbol: 'bay'}
};
export default coins
