import layer from './components/layer/layer.js'
import './css/common.css'



const App = function(){
    var dom = document.getElementById('app')
    var la = new layer()

    dom.innerHTML = la.tpl
}

new App()