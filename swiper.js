/*
var swiper = new Swiper({
    el: "#swiper",
    imgs: ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'],
    height: 300,
    width: 500
})
*/

var style = document.createElement("style")
// 两个反引号
style.innerHTML = `
*{
    margin: 0;
    padding: 0;
}

.swiper {
    height: 300px;
    width: 500px;
    border: gold solid 2px;
    margin: 50px auto;
    position: relative;
}

.imgList {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.imgItem {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s;
}

.active {
    opacity: 1;
}

.preBtn,
.nxtBtn {
    width: 30px;
    height: 50px;
    background-color: rgba(97, 63, 0, 0.6);
    position: absolute;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    /* 更改移入鼠标样式 */
    cursor: pointer;
}

.preBtn {
    top: calc(50% - 25px);
    left: 5px;
}

.nxtBtn {
    top: calc(50% - 25px);
    left: calc(100% - 35px);
}

.circleList{
    width: 98%;
    height: 20px;
    position: absolute;
    top: 90%;
    left: 0px;
    display: flex;
	justify-content: flex-end;
}
.circle{
    width: 12px;
    height: 12px;
    margin: 3px;
    border-radius: 50%;
    z-index: 2;
    background-color: rgba(97, 63, 0, 0.6);
}
.choose{
    background-color: rgb(255, 115, 0);
}
`

document.body.appendChild(style)

function Swiper(options) {
    var swiper = document.querySelector(options.name)
    swiper.classList.add('swiper')
    swiper.style.height = options.height + 'px'
    swiper.style.width = options.width + 'px'
    swiper.style.borderColor = options.color

    // 设置circleList和imgList
    var index = 0
    var imgList = document.createElement('div')
    var circleList = document.createElement("div")
    imgList.className = "imgList"
    circleList.className = "circleList"

    // 将dom添加到swiper
    swiper.appendChild(imgList)
    swiper.appendChild(circleList)

    // 对每张图片生成对应dom和小圆点
    options.imgs.forEach(function (item, i) {
        let imgItem = document.createElement('img')
        imgItem.src = item
        imgItem.className = i == index ? 'imgItem active' : 'imgItem'
        let circle = document.createElement('div');
        circle.className = i == index ? "circle choose" : "circle"
        circle.setAttribute('data-id', i)
        imgList.appendChild(imgItem)
        circleList.appendChild(circle)
    })

    // 按钮
    var preBtn = document.createElement("div")
	preBtn.className = "preBtn"
	preBtn.innerText = "<"
	var nxtBtn = document.createElement("div")
	nxtBtn.className = "nxtBtn"
	nxtBtn.innerText = ">"

    // 将按钮添加到swiper
    swiper.appendChild(nxtBtn)
    swiper.appendChild(preBtn)

    // 获取所有的图片列表
	var imgsArr = document.querySelectorAll(".imgItem")
	var circleArr = document.querySelectorAll('.circle')

    // 移除和添加效果函数
    var remove = function () {
        imgsArr[index].classList.remove("active")
        circleArr[index].classList.remove("choose")
    }
    var add = function () {
        imgsArr[index].classList.add("active")
        circleArr[index].classList.add("choose")
    }

    // 用以限制按钮生效的频率
    var canClick = true;

    // nxt按钮
    nxtBtn.addEventListener("click", function () {
        if(canClick){
            canClick = false
            setTimeout(function(){
                canClick = true
            }, 500)
            remove()
            index = (index + 1) % imgsArr.length
            add()
        }
    })

    // pre按钮
    preBtn.addEventListener("click", function () {
        if(canClick){
            canClick = false
            setTimeout(function(){
                canClick = true
            }, 500)
            remove()
            index = (index + imgsArr.length - 1) % imgsArr.length
            add()
        }
    })

    // 自动播放
    var intervalId = setInterval(function () {
        nxtBtn.click()
    }, 3000)
    
    // 手动点击和自动轮播切换
    var swiper = document.querySelector(".swiper")
    swiper.onmouseenter = function () {
        clearInterval(intervalId)
    }
    swiper.onmouseleave = function () {
        intervalId = setInterval(function () {
            nxtBtn.click()
        }, 3000)
    }

    // 选中小圆圈 委托
    var circleList = document.querySelector(".circleList")
    circleList.addEventListener("click", function(evt){
        if(evt.target.className == "circle"){
            remove()
            index = parseInt(evt.target.dataset.id)
            add()
        }
    })

}
