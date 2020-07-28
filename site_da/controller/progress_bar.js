    const updateScrollPercentage = function() {  
    const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.body.offsetHeight,
    percentage = document.querySelector("[look_load] .progress_bar")
    percentageVal = document.querySelector("#percnkisud-matedngentag")

    if(bodyHeight - contentScrolled <= heightOfWindow) {
    percentageVal.textContent = percentage.style.width = "100%"
    }
    else {
    const total = bodyHeight - heightOfWindow,
    got = contentScrolled,
    percent = parseInt((got/total) * 100)
    percentageVal.textContent = percentage.style.width = percent + "%"
    }
    };
    window.addEventListener('scroll', updateScrollPercentage)