function tempo(seg){
    var h = seg / 3600 - (seg / 3600) % 1
    var m = seg % 3600 / 60 - (seg % 3600 / 60 % 1)
    var s = seg % 3600 % 60
    console.log(h,m,s)
}
    tempo(3600)