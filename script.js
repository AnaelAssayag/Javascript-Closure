var hey = function () {
    var x = "boom"

    var yo = function () {
        console.log(x)
    }

    return yo;
}

var closure = hey()
closure ()