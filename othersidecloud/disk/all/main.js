
let herf = '#'
// '//'相当于http:// 可以自动判断该网站有没有ssl证书 链接只用加上http:// 后面的就可以了

let an = document.getElementById('android_download')
an.onclick = function () {
    console.log(111);
    let show = document.getElementById('download_dialog')
    show.className = 'download__dialog-wrp_show'
}
let close = document.getElementById('download_dialog_close')
close.onclick = function () {
    let close_win = document.getElementById('download_dialog')
    close_win.className = 'download__dialog-wrp'
}

let download = document.getElementById('android_download_64')
download.onclick = function () {
    window.open(herf)
}