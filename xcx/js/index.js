const { ipcRenderer,shell } = require('electron')
    let ywyj = 'https://ywyj.cn/'
    let kg = 'https://www.kugou.com/'
    let qq = 'https://y.qq.com/'
    let wy = 'https://music.163.com/'
    let bz = 'https://www.bilibili.com/'
    let dy = 'https://www.douyin.com/'
    let yp = 'https://vocalremover.org/'
    let ps = 'https://www.photopea.com/'
    
    window.onload = function () {
        
        
        let ywyj_win =document.getElementById('ywyj')

        ywyj_win.addEventListener('click',() => {
            open_applet_add('ywyj',ywyj)

        })
        
        let kg_win =document.getElementById('kg')

        kg_win.addEventListener('click',() => {
            open_applet_add('ywyj',kg)
        })
        
        let qq_win =document.getElementById('qq')

        qq_win.addEventListener('click',() => {
            open_applet_add('ywyj',qq)
        })

        let wy_win =document.getElementById('wy')

        wy_win.addEventListener('click',() => {
            open_applet_add('ywyj',wy)
        })

        let bz_win =document.getElementById('bz')

        bz_win.addEventListener('click',() => {
            open_applet_add('ywyj',bz)
        })

        let dy_win =document.getElementById('dy')

        dy_win.addEventListener('click',() => {
            open_applet_add('ywyj',dy)
        })

        let yp_win =document.getElementById('yp')

        yp_win.addEventListener('click',() => {
            open_applet_add('ywyj',yp)
        })

        let ps_win =document.getElementById('ps')

        ps_win.addEventListener('click',() => {
            open_applet_add('ywyj',ps)
        })

        function open_applet_add(name,add) {
            ipcRenderer.send(name,add)
            console.log(name);
            console.log(add);
        }
    }